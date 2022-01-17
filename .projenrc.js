const { typescript, javascript } = require("projen");
const project = new typescript.TypeScriptProject({
  authorName: "Patrick Florek",
  authorAddress: "patrick.florek@gmail.com",
  authorOrganization: true,
  license: "MIT",
  copyrightOwner: "Pepperize UG (haftungsbeschränkt)",
  name: "@pepperize/projen-awscdk-construct",
  description: "This project provides a projen project type providing presets for an AWS CDK construct library project",
  keywords: ["aws", "cdk", "projen"],
  repositoryUrl: "https://github.com/pepperize/projen-awscdk-construct.git",

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

  gitignore: [".idea/", "*.iml"],

  deps: ["projen"] /* Runtime dependencies of this module. */,
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

project.setScript("format", "prettier --write src/**/*.ts test/**/*.ts .projenrc.js README.md");

project.jest.addTestMatch("**/?(*.)@(spec|test).[tj]s?(x)");

project.synth();
