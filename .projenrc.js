const { javascript, cdk } = require("projen");
const project = new cdk.JsiiProject({
  author: "Patrick Florek",
  authorAddress: "patrick.florek@gmail.com",
  authorOrganization: true,
  license: "MIT",
  copyrightOwner: "Pepperize UG (haftungsbeschränkt)",
  name: "@pepperize/projen-awscdk-app-ts",
  description: "This project provides a projen project type providing presets for an AWS CDK construct library project",
  keywords: ["aws", "cdk", "projen"],
  repositoryUrl: "https://github.com/pepperize/projen-awscdk-app-ts.git",

  autoApproveUpgrades: true,
  autoApproveOptions: {
    allowedUsernames: ["unerty", "pflorek", "acfo", "dependabot[bot]"],
    secret: "GITHUB_TOKEN",
  },
  depsUpgradeOptions: {
    workflowOptions: {
      secret: "PROJEN_GITHUB_TOKEN",
    },
  },
  dependabot: true,
  dependabotOptions: {
    labels: ["auto-approve"],
  },

  prettier: true,
  prettierOptions: {
    settings: {
      printWidth: 120,
    },
  },

  defaultReleaseBranch: "main",
  npmAccess: javascript.NpmAccess.PUBLIC,
  release: {
    releaseEveryCommit: true,
  },
  releaseToNpm: true,
  // publishToNuget: {
  //  dotNetNamespace: "Pepperize.Projen",
  //  packageId: "Pepperize.Projen.AwsCdkTypeScriptApp",
  // },
  publishToPypi: {
    distName: "pepperize.projen-awscdk-app-ts",
    module: "pepperize_projen_awscdk_app_ts",
  },

  gitignore: [".idea/", "*.iml"],

  devDeps: ["projen"],
  peerDeps: ["projen"],
});

project.setScript("format", "prettier --write src/**/*.ts test/**/*.ts .projenrc.js README.md");

project.jest.addTestMatch("<rootDir>/**/?(*.)@(spec|test).[tj]s?(x)");

project.synth();
