import { awscdk, javascript, Task } from "projen";
import { Job, JobPermission } from "projen/lib/github/workflows-model";

export interface AwsCdkTypeScriptAppOptions extends awscdk.AwsCdkTypeScriptAppOptions {}

export class AwsCdkTypeScriptApp extends awscdk.AwsCdkTypeScriptApp {
  /**
   * The "format" task.
   */
  public readonly formatTask: Task;

  /**
   * @experimental
   */
  constructor(options: AwsCdkTypeScriptAppOptions) {
    super({
      authorName: "Pepperize UG (haftungsbeschränkt)",
      authorEmail: "info@pepperize.com",
      authorUrl: "https://www.pepperize.com",
      dependabot: true,
      dependabotOptions: {
        labels: ["auto-approve"],
      },
      ...options,
      authorOrganization: true,
      license: "MIT",
      copyrightOwner: "Pepperize UG (haftungsbeschränkt)",
      autoApproveUpgrades: true,
      autoApproveOptions: {
        ...options.autoApproveOptions,
        allowedUsernames: ["pflorek", "acfo", "dependabot[bot]"],
        label: "auto-approve",
        secret: "GITHUB_TOKEN",
      },
      eslint: true,
      prettier: true,
      prettierOptions: {
        ...options.prettierOptions,
        settings: {
          ...options.prettierOptions?.settings,
          printWidth: 120,
        },
      },
      defaultReleaseBranch: "main",
      npmAccess: javascript.NpmAccess.PUBLIC,
      release: true,
      gitignore: [...(options.gitignore || [])],
    });

    this.gitignore.exclude(".idea/", "*.iml");

    this.prettier?.addIgnorePattern("API.md");
    this.formatTask = this.addTask("format", {
      description: "Format with prettier",
      exec: "prettier --write src/{**/,}*.ts test/{**/,}*.ts .projenrc.[jt]s README.md",
    });

    this.jest?.addTestMatch("<rootDir>/**/?(*.)@(spec|test).[tj]s?(x)");

    if (!this.github?.mergify && options.github) {
      const conditions: Array<string> = [
        "github.actor == 'dependabot[bot]'",
        "github.event.workflow_run.conclusion == 'success'",
      ];

      // https://github.com/pascalgn/automerge-action#supported-events
      const mergeJob: Job = {
        runsOn: ["ubuntu-latest"],
        permissions: {
          pullRequests: JobPermission.WRITE,
          checks: JobPermission.WRITE,
          contents: JobPermission.WRITE,
        },
        if: conditions.join(" && "),
        steps: [
          {
            // https://github.com/pascalgn/automerge-action
            id: "auto-merge",
            name: "auto-merge",
            uses: "pascalgn/automerge-action@v0.15.3",
            env: {
              GITHUB_TOKEN: "${{ secrets.GITHUB_TOKEN }}",
              MERGE_LABELS: "auto-approve,!do-not-merge",
              MERGE_METHOD: "merge",
              MERGE_FORKS: "false",
              MERGE_RETRIES: "10",
              MERGE_RETRY_SLEEP: "60000",
              MERGE_DELETE_BRANCH: "true",
              MERGE_REQUIRED_APPROVALS: "1",
            },
          },
        ],
      };

      const workflow = this.github?.addWorkflow("auto-merge")!;
      workflow.on({
        // https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#workflow_run
        workflowRun: {
          workflows: ["build"],
          types: ["completed"],
        },
      });
      workflow.addJobs({ merge: mergeJob });
    }
  }
}
