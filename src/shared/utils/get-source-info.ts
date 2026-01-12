import * as vscode from "vscode";
import { constants } from "../constants";

async function fileExists(relativePath: string): Promise<boolean> {
  const workSpaceUri = vscode.workspace.workspaceFolders?.[0]?.uri;

  if (!workSpaceUri) {
    return false;
  }

  try {
    await vscode.workspace.fs.stat(
      vscode.Uri.joinPath(workSpaceUri, relativePath)
    );

    return true;
  } catch (error) {
    return false;
  }
}

const checkIsNextApp = async (appFolder: string): Promise<boolean> => {
  return await fileExists(`/apps/${appFolder}/next.config.js`);
};

const checkIsExpoApp = async (appFolder: string): Promise<boolean> => {
  return await fileExists(`/apps/${appFolder}/app.config.ts`);
};

export type GetSourceInfoResult =
  | {
      locationType: "lib";
      app: string;
      scope: string;
      type: string;
    }
  | {
      locationType: "app";
      app: string;
      appType: (typeof constants.appTypes)[number];
    }
  | {
      locationType: "other";
    };

export const getSourceInfo = async (
  uri?: vscode.Uri
): Promise<GetSourceInfoResult> => {
  const path = vscode.workspace.asRelativePath(uri ?? "");

  const pathSegments = path.split("/");

  const rootSegment = pathSegments[0];

  switch (rootSegment) {
    case "libs": {
      const app = pathSegments[1];
      const scope = pathSegments[2];
      const type = pathSegments[3];

      return {
        locationType: "lib",
        app,
        scope,
        type,
      };
    }
    case "apps": {
      const app = pathSegments[1];

      const appConfig = {
        locationType: "app",
        app,
      } as const;

      const isNextApp = await checkIsNextApp(app);
      const isExpoApp = await checkIsExpoApp(app);

      return isNextApp
        ? {
            ...appConfig,
            appType: "next-app",
          }
        : isExpoApp
        ? {
            ...appConfig,
            appType: "expo-app",
          }
        : {
            locationType: "other",
          };
    }
    default: {
      return {
        locationType: "other",
      };
    }
  }
};
