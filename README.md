[![GitHub](https://img.shields.io/github/license/pepperize/projen-awscdk-app-ts?style=flat-square)](https://github.com/pepperize/projen-awscdk-app-ts/blob/main/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@pepperize/projen-awscdk-app-ts?style=flat-square)](https://www.npmjs.com/package/@pepperize/projen-awscdk-app-ts)
[![PyPI](https://img.shields.io/pypi/v/pepperize.projen-awscdk-app-ts?style=flat-square)](https://pypi.org/project/pepperize.projen-awscdk-app-ts/)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/pepperize/projen-awscdk-app-ts/release/main?label=release&style=flat-square)](https://github.com/pepperize/projen-awscdk-app-ts/actions/workflows/release.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/pepperize/projen-awscdk-app-ts?sort=semver&style=flat-square)](https://github.com/pepperize/projen-awscdk-app-ts/releases)

# Projen awscdk-app-ts

This project provides a projen project type providing presets for an AWS CDK construct library project.

## Getting started

To create a new project, run the following command and follow the instructions:

```shell
mkdir my-project
cd my-project
git init -b main
npx projen new --from @pepperize/projen-awscdk-app-ts
```

_If your git cli doesn't have a `-b` option, either update [git](https://git-scm.com/) or issue `git init && git checkout -b main`._

## Usage

To init a new project from this module:

```shell
npx projen new --from @pepperize/projen-awscdk-app-ts@latest
```
_Note: it will install the `latest` version. If you don't specify the `latest` version, it won't be upgraded while running `npx projen`_

## Create a new projen project type

1. Create a new project for the projen external jsii npm module
   ```shell
   mkdir my-project
   cd my-project
   git init -b main
   npx projen new jsii
   ```
2. Your `src/index.ts` should export only one project.
