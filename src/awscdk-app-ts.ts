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
      ...options,
      authorOrganization: true,
      license: "MIT",
      copyrightOwner: "Pepperize UG (haftungsbeschränkt)",
      autoApproveUpgrades: true,
      autoApproveOptions: {
        ...options.autoApproveOptions,
        allowedUsernames: ["unerty", "pflorek", "acfo", "dependabot[bot]"],
        label: "auto-approve",
        secret: "GITHUB_TOKEN",
      },
      depsUpgradeOptions: {
        ...options.depsUpgradeOptions,
        workflowOptions: {
          ...options.depsUpgradeOptions?.workflowOptions,
          secret: "PROJEN_GITHUB_TOKEN",
        },
      },
      dependabot: true,
      dependabotOptions: {
        labels: ["auto-approve"],
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
      exec: "prettier --write src/{**/,}*.ts test/{**/,}*.ts .projenrc.js README.md",
    });

    this.jest?.addTestMatch("<rootDir>/**/?(*.)@(spec|test).[tj]s?(x)");

    if (!this.github?.mergify) {
      const conditions: Array<string> = [];
      conditions.push("github.event.pull_request.user.login == 'dependabot[bot]'");
      conditions.push("contains(github.event.pull_request.labels.*.name, 'auto-approve'");
      conditions.push("-label~=(do-not-merge)");
      conditions.push("#approved-reviews-by>=1");

      const mergeJob: Job = {
        runsOn: ["ubuntu-latest"],
        permissions: {
          pullRequests: JobPermission.WRITE,
        },
        if: conditions.join(" && "),
        steps: [
          {
            uses: "actions/checkout@v2",
          },
          {
            // https://github.com/pascalgn/automerge-action
            uses: "pascalgn/automerge-action@v0.14.3",
            env: {
              GITHUB_TOKEN: "${{ secrets.GITHUB_TOKEN }}",
              MERGE_LABELS: "",
              MERGE_FORKS: "false",
              MERGE_RETRY_SLEEP: "60000",
              MERGE_DELETE_BRANCH: "true",
            },
          },
        ],
      };

      const workflow = this.github?.addWorkflow("auto-merge")!;
      workflow.on({
        pullRequestTarget: {
          types: ["labeled", "opened", "synchronize", "reopened", "ready_for_review"],
        },
      });
      workflow.addJobs({ merge: mergeJob });
    }
  }
}
