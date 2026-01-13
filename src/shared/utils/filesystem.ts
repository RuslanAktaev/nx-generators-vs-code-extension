import * as vscode from "vscode";

const getUriFromRelativePath = (...pathSegments: Array<string>): vscode.Uri => {
  const workSpaceUri = vscode.workspace.workspaceFolders?.[0]?.uri;

  if (!workSpaceUri) {
    throw new Error("No workspace folder found");
  }

  return vscode.Uri.joinPath(workSpaceUri, ...pathSegments);
};

export const fileExists = async (
  ...pathSegments: Array<string>
): Promise<boolean> => {
  const uri = getUriFromRelativePath(...pathSegments);

  try {
    await vscode.workspace.fs.stat(uri);

    return true;
  } catch (error) {
    return false;
  }
};

export const readJSON = async (
  ...pathSegments: Array<string>
): Promise<Record<string, any>> => {
  const projectJsonBytes = await vscode.workspace.fs.readFile(
    getUriFromRelativePath(...pathSegments)
  );

  const projectJson = JSON.parse(new TextDecoder().decode(projectJsonBytes));

  return projectJson;
};
