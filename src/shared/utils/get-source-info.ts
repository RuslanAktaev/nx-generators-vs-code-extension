import * as vscode from "vscode";

export type GetSourceInfoResult = {
  isLib: boolean;
  app: string;
  scope: string;
  type: string;
};

export const getSourceInfo = (uri?: vscode.Uri): GetSourceInfoResult => {
  const path = vscode.workspace.asRelativePath(uri ?? "");

  const pathSegments = path.split("/");

  const isLib = pathSegments[0] === "libs";
  const app = pathSegments[1];
  const scope = pathSegments[2];
  const type = pathSegments[3];

  return {
    isLib,
    app,
    scope,
    type,
  };
};
