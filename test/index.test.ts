import { AwsCdkTypeScriptApp } from "../src";

describe("AwsCdkTypeScriptApp", () => {
  it("", () => {
    // Given
    const project = new AwsCdkTypeScriptApp({
      cdkVersion: "1.139.0",
      ...defaultOptions,
    });

    // Then
    expect(project.formatTask.description).toEqual("Format with prettier");
  });
});

const defaultOptions = {
  authorName: "Patrick Florek",
  authorAddress: "patrick.florek@gmail.com",
  clobber: false,
  defaultReleaseBranch: "main",
  jest: false,
  name: "test-project",
  repositoryUrl: "https://github.com/pepperize/projen-awscdk-app-ts.git",
} as const;
