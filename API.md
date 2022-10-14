# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="structs"></a>

### AwsCdkTypeScriptAppOptions <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions" id="pepperizeprojenawscdkapptsawscdktypescriptappoptions"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { AwsCdkTypeScriptAppOptions } from '@pepperize/projen-awscdk-app-ts'

const awsCdkTypeScriptAppOptions: AwsCdkTypeScriptAppOptions = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`name`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyname)<span title="Required">*</span> | `string` | This is the name of your project. |
| [`commitGenerated`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertycommitgenerated) | `boolean` | Whether to commit the managed files by default. |
| [`logging`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertylogging) | [`projen.LoggerOptions`](#projen.LoggerOptions) | Configure logging options such as verbosity. |
| [`outdir`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyoutdir) | `string` | The root directory of the project. |
| [`parent`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyparent) | [`projen.Project`](#projen.Project) | The parent project, if this project is part of a bigger project. |
| [`projenCommand`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyprojencommand) | `string` | The shell command to use in order to run the projen CLI. |
| [`projenrcJson`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyprojenrcjson) | `boolean` | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| [`projenrcJsonOptions`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyprojenrcjsonoptions) | [`projen.ProjenrcOptions`](#projen.ProjenrcOptions) | Options for .projenrc.json. |
| [`renovatebot`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyrenovatebot) | `boolean` | Use renovatebot to handle dependency upgrades. |
| [`renovatebotOptions`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyrenovatebotoptions) | [`projen.RenovatebotOptions`](#projen.RenovatebotOptions) | Options for renovatebot. |
| [`autoApproveOptions`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyautoapproveoptions) | [`projen.github.AutoApproveOptions`](#projen.github.AutoApproveOptions) | Enable and configure the 'auto approve' workflow. |
| [`autoMerge`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyautomerge) | `boolean` | Enable automatic merging on GitHub. |
| [`autoMergeOptions`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyautomergeoptions) | [`projen.github.AutoMergeOptions`](#projen.github.AutoMergeOptions) | Configure options for automatic merging on GitHub. |
| [`clobber`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyclobber) | `boolean` | Add a `clobber` task which resets the repo to origin. |
| [`devContainer`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertydevcontainer) | `boolean` | Add a VSCode development environment (used for GitHub Codespaces). |
| [`github`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertygithub) | `boolean` | Enable GitHub integration. |
| [`githubOptions`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertygithuboptions) | [`projen.github.GitHubOptions`](#projen.github.GitHubOptions) | Options for GitHub integration. |
| [`gitpod`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertygitpod) | `boolean` | Add a Gitpod development environment. |
| [`mergify`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertymergify) | `boolean` | Whether mergify should be enabled on this repository or not. |
| [`mergifyOptions`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertymergifyoptions) | [`projen.github.MergifyOptions`](#projen.github.MergifyOptions) | Options for mergify. |
| [`projectType`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyprojecttype) | [`projen.ProjectType`](#projen.ProjectType) | Which type of project this is (library/app). |
| [`projenCredentials`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyprojencredentials) | [`projen.github.GithubCredentials`](#projen.github.GithubCredentials) | Choose a method of providing GitHub API access for projen workflows. |
| [`projenTokenSecret`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyprojentokensecret) | `string` | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| [`readme`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyreadme) | [`projen.SampleReadmeProps`](#projen.SampleReadmeProps) | The README setup. |
| [`stale`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertystale) | `boolean` | Auto-close of stale issues and pull request. |
| [`staleOptions`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertystaleoptions) | [`projen.github.StaleOptions`](#projen.github.StaleOptions) | Auto-close stale issues and pull requests. |
| [`vscode`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyvscode) | `boolean` | Enable VSCode integration. |
| [`allowLibraryDependencies`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyallowlibrarydependencies) | `boolean` | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| [`authorEmail`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyauthoremail) | `string` | Author's e-mail. |
| [`authorName`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyauthorname) | `string` | Author's name. |
| [`authorOrganization`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyauthororganization) | `boolean` | Author's Organization. |
| [`authorUrl`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyauthorurl) | `string` | Author's URL / Website. |
| [`autoDetectBin`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyautodetectbin) | `boolean` | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| [`bin`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertybin) | {[ key: string ]: `string`} | Binary programs vended with your module. |
| [`bugsEmail`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertybugsemail) | `string` | The email address to which issues should be reported. |
| [`bugsUrl`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertybugsurl) | `string` | The url to your project's issue tracker. |
| [`bundledDeps`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertybundleddeps) | `string`[] | List of dependencies to bundle into this module. |
| [`codeArtifactOptions`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertycodeartifactoptions) | [`projen.javascript.CodeArtifactOptions`](#projen.javascript.CodeArtifactOptions) | Options for npm packages using AWS CodeArtifact. |
| [`deps`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertydeps) | `string`[] | Runtime dependencies of this module. |
| [`description`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertydescription) | `string` | The description is just a string that helps people understand the purpose of the package. |
| [`devDeps`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertydevdeps) | `string`[] | Build dependencies for this module. |
| [`entrypoint`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyentrypoint) | `string` | Module entrypoint (`main` in `package.json`). |
| [`homepage`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyhomepage) | `string` | Package's Homepage / Website. |
| [`keywords`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertykeywords) | `string`[] | Keywords to include in `package.json`. |
| [`license`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertylicense) | `string` | License's SPDX identifier. |
| [`licensed`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertylicensed) | `boolean` | Indicates if a license should be added. |
| [`maxNodeVersion`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertymaxnodeversion) | `string` | Minimum node.js version to require via `engines` (inclusive). |
| [`minNodeVersion`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyminnodeversion) | `string` | Minimum Node.js version to require via package.json `engines` (inclusive). |
| [`npmAccess`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertynpmaccess) | [`projen.javascript.NpmAccess`](#projen.javascript.NpmAccess) | Access level of the npm package. |
| [`npmRegistry`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertynpmregistry) | `string` | The host name of the npm registry to publish to. |
| [`npmRegistryUrl`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertynpmregistryurl) | `string` | The base URL of the npm package registry. |
| [`npmTokenSecret`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertynpmtokensecret) | `string` | GitHub secret which contains the NPM token to use when publishing packages. |
| [`packageManager`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertypackagemanager) | [`projen.javascript.NodePackageManager`](#projen.javascript.NodePackageManager) | The Node Package Manager used to execute scripts. |
| [`packageName`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertypackagename) | `string` | The "name" in package.json. |
| [`peerDependencyOptions`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertypeerdependencyoptions) | [`projen.javascript.PeerDependencyOptions`](#projen.javascript.PeerDependencyOptions) | Options for `peerDeps`. |
| [`peerDeps`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertypeerdeps) | `string`[] | Peer dependencies for this module. |
| [`repository`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyrepository) | `string` | The repository is the location where the actual code for your package lives. |
| [`repositoryDirectory`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyrepositorydirectory) | `string` | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| [`scopedPackagesOptions`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyscopedpackagesoptions) | [`projen.javascript.ScopedPackagesOptions`](#projen.javascript.ScopedPackagesOptions)[] | Options for privately hosted scoped packages. |
| [`scripts`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyscripts) | {[ key: string ]: `string`} | npm scripts to include. |
| [`stability`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertystability) | `string` | Package's Stability. |
| [`jsiiReleaseVersion`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyjsiireleaseversion) | `string` | Version requirement of `publib` which is used to publish modules to npm. |
| [`majorVersion`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertymajorversion) | `number` | Major version to release from the default branch. |
| [`minMajorVersion`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyminmajorversion) | `number` | Minimal Major version to release. |
| [`npmDistTag`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertynpmdisttag) | `string` | The npmDistTag to use when publishing from the default branch. |
| [`postBuildSteps`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertypostbuildsteps) | [`projen.github.workflows.JobStep`](#projen.github.workflows.JobStep)[] | Steps to execute after build as part of the release workflow. |
| [`prerelease`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyprerelease) | `string` | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| [`publishDryRun`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertypublishdryrun) | `boolean` | Instead of actually publishing to package managers, just print the publishing command. |
| [`publishTasks`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertypublishtasks) | `boolean` | Define publishing tasks that can be executed manually as well as workflows. |
| [`releaseBranches`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyreleasebranches) | {[ key: string ]: [`projen.release.BranchOptions`](#projen.release.BranchOptions)} | Defines additional release branches. |
| [`releaseEveryCommit`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyreleaseeverycommit) | `boolean` | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| [`releaseFailureIssue`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyreleasefailureissue) | `boolean` | Create a github issue on every failed publishing task. |
| [`releaseFailureIssueLabel`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyreleasefailureissuelabel) | `string` | The label to apply to issues indicating publish failures. |
| [`releaseSchedule`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyreleaseschedule) | `string` | CRON schedule to trigger new releases. |
| [`releaseTagPrefix`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyreleasetagprefix) | `string` | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. |
| [`releaseTrigger`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyreleasetrigger) | [`projen.release.ReleaseTrigger`](#projen.release.ReleaseTrigger) | The release trigger to use. |
| [`releaseWorkflowName`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyreleaseworkflowname) | `string` | The name of the default release workflow. |
| [`releaseWorkflowSetupSteps`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyreleaseworkflowsetupsteps) | [`projen.github.workflows.JobStep`](#projen.github.workflows.JobStep)[] | A set of workflow steps to execute in order to setup the workflow container. |
| [`versionrcOptions`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyversionrcoptions) | {[ key: string ]: `any`} | Custom configuration used when creating changelog with standard-version package. |
| [`workflowContainerImage`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyworkflowcontainerimage) | `string` | Container image to use for GitHub workflows. |
| [`workflowRunsOn`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyworkflowrunson) | `string`[] | Github Runner selection labels. |
| [`defaultReleaseBranch`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertydefaultreleasebranch)<span title="Required">*</span> | `string` | The name of the main release branch. |
| [`artifactsDirectory`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyartifactsdirectory) | `string` | A directory which will contain build artifacts. |
| [`autoApproveUpgrades`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyautoapproveupgrades) | `boolean` | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). |
| [`buildWorkflow`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertybuildworkflow) | `boolean` | Define a GitHub workflow for building PRs. |
| [`buildWorkflowTriggers`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertybuildworkflowtriggers) | [`projen.github.workflows.Triggers`](#projen.github.workflows.Triggers) | Build workflow triggers. |
| [`bundlerOptions`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertybundleroptions) | [`projen.javascript.BundlerOptions`](#projen.javascript.BundlerOptions) | Options for `Bundler`. |
| [`codeCov`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertycodecov) | `boolean` | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v1 A secret is required for private repos. Configured with @codeCovTokenSecret. |
| [`codeCovTokenSecret`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertycodecovtokensecret) | `string` | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. |
| [`copyrightOwner`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertycopyrightowner) | `string` | License copyright owner. |
| [`copyrightPeriod`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertycopyrightperiod) | `string` | The copyright years to put in the LICENSE file. |
| [`dependabot`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertydependabot) | `boolean` | Use dependabot to handle dependency upgrades. |
| [`dependabotOptions`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertydependabotoptions) | [`projen.github.DependabotOptions`](#projen.github.DependabotOptions) | Options for dependabot. |
| [`depsUpgrade`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertydepsupgrade) | `boolean` | Use github workflows to handle dependency upgrades. |
| [`depsUpgradeOptions`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertydepsupgradeoptions) | [`projen.javascript.UpgradeDependenciesOptions`](#projen.javascript.UpgradeDependenciesOptions) | Options for `UpgradeDependencies`. |
| [`gitignore`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertygitignore) | `string`[] | Additional entries to .gitignore. |
| [`jest`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyjest) | `boolean` | Setup jest unit tests. |
| [`jestOptions`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyjestoptions) | [`projen.javascript.JestOptions`](#projen.javascript.JestOptions) | Jest options. |
| [`mutableBuild`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertymutablebuild) | `boolean` | Automatically update files modified during builds to pull-request branches. |
| [`npmignore`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertynpmignore) | `string`[] | Additional entries to .npmignore. |
| [`npmignoreEnabled`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertynpmignoreenabled) | `boolean` | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| [`package`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertypackage) | `boolean` | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| [`prettier`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyprettier) | `boolean` | Setup prettier. |
| [`prettierOptions`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyprettieroptions) | [`projen.javascript.PrettierOptions`](#projen.javascript.PrettierOptions) | Prettier options. |
| [`projenDevDependency`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyprojendevdependency) | `boolean` | Indicates of "projen" should be installed as a devDependency. |
| [`projenrcJs`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyprojenrcjs) | `boolean` | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| [`projenrcJsOptions`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyprojenrcjsoptions) | [`projen.javascript.ProjenrcOptions`](#projen.javascript.ProjenrcOptions) | Options for .projenrc.js. |
| [`projenVersion`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyprojenversion) | `string` | Version of projen to install. |
| [`pullRequestTemplate`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertypullrequesttemplate) | `boolean` | Include a GitHub pull request template. |
| [`pullRequestTemplateContents`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertypullrequesttemplatecontents) | `string`[] | The contents of the pull request template. |
| [`release`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyrelease) | `boolean` | Add release management to this project. |
| [`releaseToNpm`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyreleasetonpm) | `boolean` | Automatically release to npm when new versions are introduced. |
| [`releaseWorkflow`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyreleaseworkflow) | `boolean` | DEPRECATED: renamed to `release`. |
| [`workflowBootstrapSteps`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyworkflowbootstrapsteps) | [`projen.github.workflows.JobStep`](#projen.github.workflows.JobStep)[] | Workflow steps to use in order to bootstrap this repo. |
| [`workflowGitIdentity`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyworkflowgitidentity) | [`projen.github.GitIdentity`](#projen.github.GitIdentity) | The git identity to use in workflows. |
| [`workflowNodeVersion`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyworkflownodeversion) | `string` | The node version to use in GitHub workflows. |
| [`disableTsconfig`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertydisabletsconfig) | `boolean` | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| [`docgen`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertydocgen) | `boolean` | Docgen by Typedoc. |
| [`docsDirectory`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertydocsdirectory) | `string` | Docs directory. |
| [`entrypointTypes`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyentrypointtypes) | `string` | The .d.ts file that includes the type declarations for this module. |
| [`eslint`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyeslint) | `boolean` | Setup eslint. |
| [`eslintOptions`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyeslintoptions) | [`projen.javascript.EslintOptions`](#projen.javascript.EslintOptions) | Eslint options. |
| [`libdir`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertylibdir) | `string` | Typescript  artifacts output directory. |
| [`projenrcTs`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyprojenrcts) | `boolean` | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| [`projenrcTsOptions`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyprojenrctsoptions) | [`projen.typescript.ProjenrcOptions`](#projen.typescript.ProjenrcOptions) | Options for .projenrc.ts. |
| [`sampleCode`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertysamplecode) | `boolean` | Generate one-time sample in `src/` and `test/` if there are no files there. |
| [`srcdir`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertysrcdir) | `string` | Typescript sources directory. |
| [`testdir`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertytestdir) | `string` | Jest tests directory. Tests files should be named `xxx.test.ts`. |
| [`tsconfig`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertytsconfig) | [`projen.javascript.TypescriptConfigOptions`](#projen.javascript.TypescriptConfigOptions) | Custom TSConfig. |
| [`tsconfigDev`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertytsconfigdev) | [`projen.javascript.TypescriptConfigOptions`](#projen.javascript.TypescriptConfigOptions) | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| [`tsconfigDevFile`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertytsconfigdevfile) | `string` | The name of the development tsconfig.json file. |
| [`typescriptVersion`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertytypescriptversion) | `string` | TypeScript version to use. |
| [`buildCommand`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertybuildcommand) | `string` | A command to execute before synthesis. |
| [`cdkout`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertycdkout) | `string` | cdk.out directory. |
| [`context`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertycontext) | {[ key: string ]: `any`} | Additional context to include in `cdk.json`. |
| [`featureFlags`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyfeatureflags) | `boolean` | Include all feature flags in cdk.json. |
| [`requireApproval`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyrequireapproval) | [`projen.awscdk.ApprovalLevel`](#projen.awscdk.ApprovalLevel) | To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them. |
| [`watchExcludes`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertywatchexcludes) | `string`[] | Glob patterns to exclude from `cdk watch`. |
| [`watchIncludes`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertywatchincludes) | `string`[] | Glob patterns to include in `cdk watch`. |
| [`cdkVersion`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertycdkversion)<span title="Required">*</span> | `string` | Minimum version of the AWS CDK to depend on. |
| [`cdkAssert`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertycdkassert) | `boolean` | Warning: NodeJS only. |
| [`cdkAssertions`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertycdkassertions) | `boolean` | Install the assertions library? |
| [`cdkDependencies`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertycdkdependencies) | `string`[] | Which AWS CDKv1 modules this project requires. |
| [`cdkDependenciesAsDeps`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertycdkdependenciesasdeps) | `boolean` | If this is enabled (default), all modules declared in `cdkDependencies` will be also added as normal `dependencies` (as well as `peerDependencies`). |
| [`cdkTestDependencies`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertycdktestdependencies) | `string`[] | AWS CDK modules required for testing. |
| [`cdkVersionPinning`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertycdkversionpinning) | `boolean` | Use pinned version instead of caret version for CDK. |
| [`constructsVersion`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyconstructsversion) | `string` | Minimum version of the `constructs` library to depend on. |
| [`appEntrypoint`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyappentrypoint) | `string` | The CDK app's entrypoint (relative to the source directory, which is "src" by default). |
| [`edgeLambdaAutoDiscover`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyedgelambdaautodiscover) | `boolean` | Automatically adds an `cloudfront.experimental.EdgeFunction` for each `.edge-lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. |
| [`integrationTestAutoDiscover`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyintegrationtestautodiscover) | `boolean` | Automatically discovers and creates integration tests for each `.integ.ts` file in under your test directory. |
| [`lambdaAutoDiscover`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertylambdaautodiscover) | `boolean` | Automatically adds an `awscdk.LambdaFunction` for each `.lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. |
| [`lambdaExtensionAutoDiscover`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertylambdaextensionautodiscover) | `boolean` | Automatically adds an `awscdk.LambdaExtension` for each `.lambda-extension.ts` entrypoint in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. |
| [`lambdaOptions`](#pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertylambdaoptions) | [`projen.awscdk.LambdaFunctionCommonOptions`](#projen.awscdk.LambdaFunctionCommonOptions) | Common options for all AWS Lambda functions. |

---

##### `name`<sup>Required</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.name" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.commitGenerated" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertycommitgenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* `boolean`
- *Default:* true

Whether to commit the managed files by default.

---

##### `logging`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.logging" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertylogging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* [`projen.LoggerOptions`](#projen.LoggerOptions)
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.outdir" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyoutdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* `string`
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.  If this project has a parent, this directory is relative to the parent directory and it cannot be the same as the parent or any of it's other sub-projects.

---

##### `parent`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.parent" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyparent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* [`projen.Project`](#projen.Project)

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.projenCommand" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyprojencommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* `string`
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.projenrcJson" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyprojenrcjson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* `boolean`
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.projenrcJsonOptions" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyprojenrcjsonoptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcOptions;
```

- *Type:* [`projen.ProjenrcOptions`](#projen.ProjenrcOptions)
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.renovatebot" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyrenovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* `boolean`
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.renovatebotOptions" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyrenovatebotoptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* [`projen.RenovatebotOptions`](#projen.RenovatebotOptions)
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.autoApproveOptions" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyautoapproveoptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* [`projen.github.AutoApproveOptions`](#projen.github.AutoApproveOptions)
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.autoMerge" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyautomerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* `boolean`
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify` is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.autoMergeOptions" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyautomergeoptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* [`projen.github.AutoMergeOptions`](#projen.github.AutoMergeOptions)
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if `github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.clobber" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyclobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* `boolean`
- *Default:* true

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.devContainer" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertydevcontainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* `boolean`
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.github" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertygithub"></a>

```typescript
public readonly github: boolean;
```

- *Type:* `boolean`
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.githubOptions" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertygithuboptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* [`projen.github.GitHubOptions`](#projen.github.GitHubOptions)
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.gitpod" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertygitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* `boolean`
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.mergify" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertymergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* `boolean`
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.mergifyOptions" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertymergifyoptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* [`projen.github.MergifyOptions`](#projen.github.MergifyOptions)
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.projectType" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyprojecttype"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* [`projen.ProjectType`](#projen.ProjectType)
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.projenCredentials" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyprojencredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* [`projen.github.GithubCredentials`](#projen.github.GithubCredentials)
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.projenTokenSecret" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyprojentokensecret"></a>

- *Deprecated:* use `projenCredentials`

```typescript
public readonly projenTokenSecret: string;
```

- *Type:* `string`
- *Default:* "PROJEN_GITHUB_TOKEN"

The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.

This token needs to have the `repo`, `workflows` and `packages` scope.

---

##### `readme`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.readme" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyreadme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* [`projen.SampleReadmeProps`](#projen.SampleReadmeProps)
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

##### `stale`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.stale" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertystale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* `boolean`
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.staleOptions" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertystaleoptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* [`projen.github.StaleOptions`](#projen.github.StaleOptions)
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.vscode" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyvscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* `boolean`
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.allowLibraryDependencies" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyallowlibrarydependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* `boolean`
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.authorEmail" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyauthoremail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* `string`

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.authorName" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyauthorname"></a>

```typescript
public readonly authorName: string;
```

- *Type:* `string`

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.authorOrganization" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyauthororganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* `boolean`

Author's Organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.authorUrl" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyauthorurl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* `string`

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.autoDetectBin" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyautodetectbin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* `boolean`
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.bin" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertybin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in your `package.json`, but unless `autoDetectBin` is `false`, every executable file under `bin` will automatically be added to this section.

---

##### `bugsEmail`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.bugsEmail" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertybugsemail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* `string`

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.bugsUrl" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertybugsurl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* `string`

The url to your project's issue tracker.

---

##### `bundledDeps`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.bundledDeps" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertybundleddeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* `string`[]

List of dependencies to bundle into this module.

These modules will be added both to the `dependencies` section and `bundledDependencies` section of your `package.json`.  The recommendation is to only specify the module name here (e.g. `express`). This will behave similar to `yarn add` or `npm install` in the sense that it will add the module as a dependency to your `package.json` file with the latest version (`^`). You can specify semver requirements in the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and this will be what you `package.json` will eventually include.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.codeArtifactOptions" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertycodeartifactoptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* [`projen.javascript.CodeArtifactOptions`](#projen.javascript.CodeArtifactOptions)
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `deps`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.deps" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertydeps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* `string`[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g. `express`). This will behave similar to `yarn add` or `npm install` in the sense that it will add the module as a dependency to your `package.json` file with the latest version (`^`). You can specify semver requirements in the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and this will be what you `package.json` will eventually include.

---

##### `description`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.description" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well. See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.devDeps" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertydevdeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* `string`[]
- *Default:* []

Build dependencies for this module.

These dependencies will only be available in your build environment but will not be fetched when this module is consumed.  The recommendation is to only specify the module name here (e.g. `express`). This will behave similar to `yarn add` or `npm install` in the sense that it will add the module as a dependency to your `package.json` file with the latest version (`^`). You can specify semver requirements in the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and this will be what you `package.json` will eventually include.

---

##### `entrypoint`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.entrypoint" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyentrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* `string`
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.homepage" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyhomepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* `string`

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.keywords" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertykeywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* `string`[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.license" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertylicense"></a>

```typescript
public readonly license: string;
```

- *Type:* `string`
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses. Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.licensed" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertylicensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* `boolean`
- *Default:* true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.maxNodeVersion" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertymaxnodeversion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* `string`
- *Default:* no max

Minimum node.js version to require via `engines` (inclusive).

---

##### `minNodeVersion`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.minNodeVersion" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyminnodeversion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* `string`
- *Default:* no "engines" specified

Minimum Node.js version to require via package.json `engines` (inclusive).

---

##### `npmAccess`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.npmAccess" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertynpmaccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* [`projen.javascript.NpmAccess`](#projen.javascript.NpmAccess)
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.npmRegistry" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertynpmregistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* `string`

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.npmRegistryUrl" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertynpmregistryurl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* `string`
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.npmTokenSecret" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertynpmtokensecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* `string`
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `packageManager`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.packageManager" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertypackagemanager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* [`projen.javascript.NodePackageManager`](#projen.javascript.NodePackageManager)
- *Default:* NodePackageManager.YARN

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.packageName" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertypackagename"></a>

```typescript
public readonly packageName: string;
```

- *Type:* `string`
- *Default:* defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.peerDependencyOptions" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertypeerdependencyoptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* [`projen.javascript.PeerDependencyOptions`](#projen.javascript.PeerDependencyOptions)

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.peerDeps" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertypeerdeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* `string`[]
- *Default:* []

Peer dependencies for this module.

Dependencies listed here are required to be installed (and satisfied) by the _consumer_ of this library. Using peer dependencies allows you to ensure that only a single module of a certain library exists in the `node_modules` tree of your consumers.  Note that prior to npm@7, peer dependencies are _not_ automatically installed, which means that adding peer dependencies to a library will be a breaking change for your customers.  Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is enabled by default), projen will automatically add a dev dependency with a pinned version for each peer dependency. This will ensure that you build & test your module against the lowest peer version required.

---

##### `repository`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.repository" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyrepository"></a>

```typescript
public readonly repository: string;
```

- *Type:* `string`

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.repositoryDirectory" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyrepositorydirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* `string`

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.scopedPackagesOptions" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyscopedpackagesoptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* [`projen.javascript.ScopedPackagesOptions`](#projen.javascript.ScopedPackagesOptions)[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### `scripts`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.scripts" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyscripts"></a>

```typescript
public readonly scripts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}
- *Default:* {}

npm scripts to include.

If a script has the same name as a standard script, the standard script will be overwritten.

---

##### `stability`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.stability" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertystability"></a>

```typescript
public readonly stability: string;
```

- *Type:* `string`

Package's Stability.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.jsiiReleaseVersion" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyjsiireleaseversion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* `string`
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.majorVersion" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertymajorversion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* `number`
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line. If not specified, we bump the global latest version.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.minMajorVersion" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyminmajorversion"></a>

```typescript
public readonly minMajorVersion: number;
```

- *Type:* `number`
- *Default:* No minimum version is being enforced

Minimal Major version to release.

This can be useful to set to 1, as breaking changes before the 1.x major release are not incrementing the major version number.  Can not be set together with `majorVersion`.

---

##### `npmDistTag`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.npmDistTag" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertynpmdisttag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* `string`
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property for each branch.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.postBuildSteps" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertypostbuildsteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* [`projen.github.workflows.JobStep`](#projen.github.workflows.JobStep)[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.prerelease" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyprerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* `string`
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `publishDryRun`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.publishDryRun" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertypublishdryrun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* `boolean`
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.publishTasks" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertypublishtasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* `boolean`
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this in order to create a publishing task for each publishing activity.

---

##### `releaseBranches`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.releaseBranches" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyreleasebranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: [`projen.release.BranchOptions`](#projen.release.BranchOptions)}
- *Default:* no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each release branch which will publish releases from commits in this branch. Each release branch _must_ be assigned a major version number which is used to enforce that versions published from that branch always use that major version. If multiple branches are used, the `majorVersion` field must also be provided for the default branch.

---

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.releaseEveryCommit" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyreleaseeverycommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* `boolean`
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.releaseFailureIssue" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyreleasefailureissue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* `boolean`
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.releaseFailureIssueLabel" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyreleasefailureissuelabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* `string`
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.releaseSchedule" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyreleaseschedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* `string`
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.releaseTagPrefix" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyreleasetagprefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- *Type:* `string`
- *Default:* no prefix

Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.

Note: this prefix is used to detect the latest tagged version when bumping, so if you change this on a project with an existing version history, you may need to manually tag your latest release with the new prefix.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.releaseTrigger" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyreleasetrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* [`projen.release.ReleaseTrigger`](#projen.release.ReleaseTrigger)
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.releaseWorkflowName" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyreleaseworkflowname"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* `string`
- *Default:* "Release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.releaseWorkflowSetupSteps" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyreleaseworkflowsetupsteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* [`projen.github.workflows.JobStep`](#projen.github.workflows.JobStep)[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `versionrcOptions`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.versionrcOptions" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyversionrcoptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: `any`}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with standard-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.workflowContainerImage" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyworkflowcontainerimage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* `string`
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.workflowRunsOn" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyworkflowrunson"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* `string`[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.defaultReleaseBranch" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertydefaultreleasebranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* `string`
- *Default:* "main"

The name of the main release branch.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.artifactsDirectory" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyartifactsdirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* `string`
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.autoApproveUpgrades" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyautoapproveupgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* `boolean`
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.buildWorkflow" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertybuildworkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* `boolean`
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowTriggers`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.buildWorkflowTriggers" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertybuildworkflowtriggers"></a>

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- *Type:* [`projen.github.workflows.Triggers`](#projen.github.workflows.Triggers)
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.bundlerOptions" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertybundleroptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* [`projen.javascript.BundlerOptions`](#projen.javascript.BundlerOptions)

Options for `Bundler`.

---

##### `codeCov`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.codeCov" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertycodecov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* `boolean`
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v1 A secret is required for private repos. Configured with @codeCovTokenSecret.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.codeCovTokenSecret" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertycodecovtokensecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* `string`
- *Default:* if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.copyrightOwner" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertycopyrightowner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* `string`
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.copyrightPeriod" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertycopyrightperiod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* `string`
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.dependabot" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertydependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* `boolean`
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.dependabotOptions" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertydependabotoptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* [`projen.github.DependabotOptions`](#projen.github.DependabotOptions)
- *Default:* default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.depsUpgrade" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertydepsupgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* `boolean`
- *Default:* true

Use github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.depsUpgradeOptions" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertydepsupgradeoptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* [`projen.javascript.UpgradeDependenciesOptions`](#projen.javascript.UpgradeDependenciesOptions)
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `gitignore`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.gitignore" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertygitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* `string`[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.jest" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyjest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* `boolean`
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.jestOptions" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyjestoptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* [`projen.javascript.JestOptions`](#projen.javascript.JestOptions)
- *Default:* default options

Jest options.

---

##### `mutableBuild`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.mutableBuild" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertymutablebuild"></a>

```typescript
public readonly mutableBuild: boolean;
```

- *Type:* `boolean`
- *Default:* true

Automatically update files modified during builds to pull-request branches.

This means that any files synthesized by projen or e.g. test snapshots will always be up-to-date before a PR is merged.  Implies that PR builds do not have anti-tamper checks.

---

##### ~~`npmignore`~~<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.npmignore" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertynpmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* `string`[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.npmignoreEnabled" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertynpmignoreenabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* `boolean`
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `package`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.package" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertypackage"></a>

```typescript
public readonly package: boolean;
```

- *Type:* `boolean`
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `prettier`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.prettier" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyprettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* `boolean`
- *Default:* false

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.prettierOptions" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyprettieroptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- *Type:* [`projen.javascript.PrettierOptions`](#projen.javascript.PrettierOptions)
- *Default:* default options

Prettier options.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.projenDevDependency" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyprojendevdependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* `boolean`
- *Default:* true

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.projenrcJs" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyprojenrcjs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* `boolean`
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.projenrcJsOptions" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyprojenrcjsoptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* [`projen.javascript.ProjenrcOptions`](#projen.javascript.ProjenrcOptions)
- *Default:* default options

Options for .projenrc.js.

---

##### `projenVersion`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.projenVersion" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyprojenversion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* `string`
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.pullRequestTemplate" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertypullrequesttemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* `boolean`
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.pullRequestTemplateContents" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertypullrequesttemplatecontents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* `string`[]
- *Default:* default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.release" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyrelease"></a>

```typescript
public readonly release: boolean;
```

- *Type:* `boolean`
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.releaseToNpm" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyreleasetonpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* `boolean`
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.releaseWorkflow" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyreleaseworkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* `boolean`
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.workflowBootstrapSteps" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyworkflowbootstrapsteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* [`projen.github.workflows.JobStep`](#projen.github.workflows.JobStep)[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.workflowGitIdentity" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyworkflowgitidentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* [`projen.github.GitIdentity`](#projen.github.GitIdentity)
- *Default:* GitHub Actions

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.workflowNodeVersion" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyworkflownodeversion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* `string`
- *Default:* same as `minNodeVersion`

The node version to use in GitHub workflows.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.disableTsconfig" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertydisabletsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* `boolean`
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `docgen`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.docgen" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertydocgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* `boolean`
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.docsDirectory" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertydocsdirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* `string`
- *Default:* "docs"

Docs directory.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.entrypointTypes" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyentrypointtypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* `string`
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.eslint" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyeslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* `boolean`
- *Default:* true

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.eslintOptions" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyeslintoptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* [`projen.javascript.EslintOptions`](#projen.javascript.EslintOptions)
- *Default:* opinionated default options

Eslint options.

---

##### `libdir`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.libdir" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertylibdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* `string`
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `projenrcTs`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.projenrcTs" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyprojenrcts"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* `boolean`
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.projenrcTsOptions" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyprojenrctsoptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* [`projen.typescript.ProjenrcOptions`](#projen.typescript.ProjenrcOptions)

Options for .projenrc.ts.

---

##### `sampleCode`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.sampleCode" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertysamplecode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* `boolean`
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `srcdir`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.srcdir" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertysrcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* `string`
- *Default:* "src"

Typescript sources directory.

---

##### `testdir`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.testdir" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertytestdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* `string`
- *Default:* "test"

Jest tests directory. Tests files should be named `xxx.test.ts`.

If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`), then tests are going to be compiled into `lib/` and executed as javascript. If the test directory is outside of `src`, then we configure jest to compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.tsconfig" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertytsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- *Type:* [`projen.javascript.TypescriptConfigOptions`](#projen.javascript.TypescriptConfigOptions)
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.tsconfigDev" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertytsconfigdev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- *Type:* [`projen.javascript.TypescriptConfigOptions`](#projen.javascript.TypescriptConfigOptions)
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.tsconfigDevFile" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertytsconfigdevfile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* `string`
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.typescriptVersion" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertytypescriptversion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* `string`
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `buildCommand`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.buildCommand" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertybuildcommand"></a>

```typescript
public readonly buildCommand: string;
```

- *Type:* `string`
- *Default:* no build command

A command to execute before synthesis.

This command will be called when running `cdk synth` or when `cdk watch` identifies a change in your source code before redeployment.

---

##### `cdkout`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.cdkout" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertycdkout"></a>

```typescript
public readonly cdkout: string;
```

- *Type:* `string`
- *Default:* "cdk.out"

cdk.out directory.

---

##### `context`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.context" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertycontext"></a>

```typescript
public readonly context: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: `any`}
- *Default:* no additional context

Additional context to include in `cdk.json`.

---

##### `featureFlags`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.featureFlags" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyfeatureflags"></a>

```typescript
public readonly featureFlags: boolean;
```

- *Type:* `boolean`
- *Default:* true

Include all feature flags in cdk.json.

---

##### `requireApproval`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.requireApproval" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyrequireapproval"></a>

```typescript
public readonly requireApproval: ApprovalLevel;
```

- *Type:* [`projen.awscdk.ApprovalLevel`](#projen.awscdk.ApprovalLevel)
- *Default:* ApprovalLevel.BROADENING

To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them.

---

##### `watchExcludes`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.watchExcludes" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertywatchexcludes"></a>

```typescript
public readonly watchExcludes: string[];
```

- *Type:* `string`[]
- *Default:* []

Glob patterns to exclude from `cdk watch`.

---

##### `watchIncludes`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.watchIncludes" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertywatchincludes"></a>

```typescript
public readonly watchIncludes: string[];
```

- *Type:* `string`[]
- *Default:* []

Glob patterns to include in `cdk watch`.

---

##### `cdkVersion`<sup>Required</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.cdkVersion" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertycdkversion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* `string`
- *Default:* "2.1.0"

Minimum version of the AWS CDK to depend on.

---

##### ~~`cdkAssert`~~<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.cdkAssert" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertycdkassert"></a>

- *Deprecated:* The

```typescript
public readonly cdkAssert: boolean;
```

- *Type:* `boolean`
- *Default:* will be included by default for AWS CDK >= 1.0.0 < 2.0.0

Warning: NodeJS only.

Install the @aws-cdk/assert library?

---

##### `cdkAssertions`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.cdkAssertions" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertycdkassertions"></a>

```typescript
public readonly cdkAssertions: boolean;
```

- *Type:* `boolean`
- *Default:* will be included by default for AWS CDK >= 1.111.0 < 2.0.0

Install the assertions library?

Only needed for CDK 1.x. If using CDK 2.x then assertions is already included in 'aws-cdk-lib'

---

##### ~~`cdkDependencies`~~<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.cdkDependencies" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertycdkdependencies"></a>

- *Deprecated:* For CDK 2.x use "deps" instead. (or "peerDeps" if you're building a library)

```typescript
public readonly cdkDependencies: string[];
```

- *Type:* `string`[]

Which AWS CDKv1 modules this project requires.

---

##### ~~`cdkDependenciesAsDeps`~~<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.cdkDependenciesAsDeps" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertycdkdependenciesasdeps"></a>

- *Deprecated:* Not supported in CDK v2.

```typescript
public readonly cdkDependenciesAsDeps: boolean;
```

- *Type:* `boolean`
- *Default:* true

If this is enabled (default), all modules declared in `cdkDependencies` will be also added as normal `dependencies` (as well as `peerDependencies`).

This is to ensure that downstream consumers actually have your CDK dependencies installed when using npm < 7 or yarn, where peer dependencies are not automatically installed. If this is disabled, `cdkDependencies` will be added to `devDependencies` to ensure they are present during development.  Note: this setting only applies to construct library projects

---

##### ~~`cdkTestDependencies`~~<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.cdkTestDependencies" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertycdktestdependencies"></a>

- *Deprecated:* For CDK 2.x use 'devDeps' (in node.js projects) or 'testDeps' (in java projects) instead

```typescript
public readonly cdkTestDependencies: string[];
```

- *Type:* `string`[]

AWS CDK modules required for testing.

---

##### `cdkVersionPinning`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.cdkVersionPinning" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertycdkversionpinning"></a>

```typescript
public readonly cdkVersionPinning: boolean;
```

- *Type:* `boolean`

Use pinned version instead of caret version for CDK.

You can use this to prevent mixed versions for your CDK dependencies and to prevent auto-updates. If you use experimental features this will let you define the moment you include breaking changes.

---

##### `constructsVersion`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.constructsVersion" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyconstructsversion"></a>

```typescript
public readonly constructsVersion: string;
```

- *Type:* `string`
- *Default:* for CDK 1.x the default is "3.2.27", for CDK 2.x the default is "10.0.5".

Minimum version of the `constructs` library to depend on.

---

##### `appEntrypoint`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.appEntrypoint" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyappentrypoint"></a>

```typescript
public readonly appEntrypoint: string;
```

- *Type:* `string`
- *Default:* "main.ts"

The CDK app's entrypoint (relative to the source directory, which is "src" by default).

---

##### `edgeLambdaAutoDiscover`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.edgeLambdaAutoDiscover" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyedgelambdaautodiscover"></a>

```typescript
public readonly edgeLambdaAutoDiscover: boolean;
```

- *Type:* `boolean`
- *Default:* true

Automatically adds an `cloudfront.experimental.EdgeFunction` for each `.edge-lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.

---

##### `integrationTestAutoDiscover`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.integrationTestAutoDiscover" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertyintegrationtestautodiscover"></a>

```typescript
public readonly integrationTestAutoDiscover: boolean;
```

- *Type:* `boolean`
- *Default:* true

Automatically discovers and creates integration tests for each `.integ.ts` file in under your test directory.

---

##### `lambdaAutoDiscover`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.lambdaAutoDiscover" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertylambdaautodiscover"></a>

```typescript
public readonly lambdaAutoDiscover: boolean;
```

- *Type:* `boolean`
- *Default:* true

Automatically adds an `awscdk.LambdaFunction` for each `.lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.

---

##### `lambdaExtensionAutoDiscover`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.lambdaExtensionAutoDiscover" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertylambdaextensionautodiscover"></a>

```typescript
public readonly lambdaExtensionAutoDiscover: boolean;
```

- *Type:* `boolean`
- *Default:* true

Automatically adds an `awscdk.LambdaExtension` for each `.lambda-extension.ts` entrypoint in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.

---

##### `lambdaOptions`<sup>Optional</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions.property.lambdaOptions" id="pepperizeprojenawscdkapptsawscdktypescriptappoptionspropertylambdaoptions"></a>

```typescript
public readonly lambdaOptions: LambdaFunctionCommonOptions;
```

- *Type:* [`projen.awscdk.LambdaFunctionCommonOptions`](#projen.awscdk.LambdaFunctionCommonOptions)
- *Default:* default options

Common options for all AWS Lambda functions.

---

## Classes <a name="Classes" id="classes"></a>

### AwsCdkTypeScriptApp <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptApp" id="pepperizeprojenawscdkapptsawscdktypescriptapp"></a>

#### Initializers <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptApp.Initializer" id="pepperizeprojenawscdkapptsawscdktypescriptappinitializer"></a>

```typescript
import { AwsCdkTypeScriptApp } from '@pepperize/projen-awscdk-app-ts'

new AwsCdkTypeScriptApp(options: AwsCdkTypeScriptAppOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`options`](#pepperizeprojenawscdkapptsawscdktypescriptappparameteroptions)<span title="Required">*</span> | [`@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions`](#@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions) | *No description.* |

---

##### `options`<sup>Required</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptApp.parameter.options" id="pepperizeprojenawscdkapptsawscdktypescriptappparameteroptions"></a>

- *Type:* [`@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions`](#@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptAppOptions)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`formatTask`](#pepperizeprojenawscdkapptsawscdktypescriptapppropertyformattask)<span title="Required">*</span> | [`projen.Task`](#projen.Task) | The "format" task. |

---

##### `formatTask`<sup>Required</sup> <a name="@pepperize/projen-awscdk-app-ts.AwsCdkTypeScriptApp.property.formatTask" id="pepperizeprojenawscdkapptsawscdktypescriptapppropertyformattask"></a>

```typescript
public readonly formatTask: Task;
```

- *Type:* [`projen.Task`](#projen.Task)

The "format" task.

---



