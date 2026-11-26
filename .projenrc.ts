import { javascript, cdk } from "projen";
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

  projenrcTs: true,

  autoApproveUpgrades: true,
  autoApproveOptions: {
    allowedUsernames: ["pflorek", "acfo", "dependabot[bot]"],
    secret: "GITHUB_TOKEN",
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
  release: true,
  releaseToNpm: true,
  // publishToNuget: {
  //  dotNetNamespace: "Pepperize.Projen",
  //  packageId: "Pepperize.Projen.AwsCdkTypeScriptApp",
  // },
  publishToPypi: {
    distName: "pepperize.projen-awscdk-app-ts",
    module: "pepperize_projen_awscdk_app_ts",
  },
  publishToMaven: {
    mavenGroupId: "com.pepperize",
    mavenArtifactId: "projen-awscdk-app-ts",
    javaPackage: "com.pepperize.projen.awscdk_app_ts",
  },

  gitignore: [".idea/", "*.iml"],

  packageManager: javascript.NodePackageManager.YARN_CLASSIC,
  minNodeVersion: "22.13.0",
  typescriptVersion: "~5.9.0",
  jestOptions: {
    jestVersion: "^29",
    jestConfig: {
      // projen depends on the ESM-only `dax`, which jest must transpile to CommonJS
      transformIgnorePatterns: [
        "/node_modules/(?!(dax|@dsherret|console-static-text)/)(?!.*/node_modules/(dax|@dsherret|console-static-text)/)",
      ],
      transform: {
        "^.+\\.m?js$": new javascript.Transform("ts-jest", { tsconfig: { allowJs: true } }),
      },
    },
  },

  devDeps: ["projen@^0.105.12", "@types/node@^22"],
  peerDeps: ["projen@^0.105.12"],
});

project.setScript("format", "prettier --write src/**/*.ts test/**/*.ts .projenrc.[jt]s README.md");

project.synth();
