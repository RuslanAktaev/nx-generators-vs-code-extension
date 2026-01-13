import * as vscode from "vscode";
import { fileExists, readJSON } from "./filesystem";
import { GetSourceInfoResult } from "../types";

export const getLibName = async (
  ...pathSegments: Array<string>
): Promise<string> => {
  const projectJson = await readJSON(
    ...pathSegments.slice(0, 5),
    "project.json"
  );

  return projectJson.name;
};

export const checkIsNextApp = async (appFolder: string): Promise<boolean> => {
  return await fileExists(`/apps/${appFolder}/next.config.js`);
};

export const checkIsExpoApp = async (appFolder: string): Promise<boolean> => {
  return await fileExists(`/apps/${appFolder}/app.config.ts`);
};

export const getLibInfo = async (
  ...pathSegments: Array<string>
): Promise<GetSourceInfoResult> => {
  const app = pathSegments[1];
  const scope = pathSegments[2];
  const type = pathSegments[3];
  const libName = await getLibName(...pathSegments);

  return {
    locationType: "lib",
    app,
    scope,
    type,
    libName,
  };
};

export const getAppInfo = async (
  ...pathSegments: Array<string>
): Promise<GetSourceInfoResult> => {
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
};

export const getSourceInfo = async (
  uri?: vscode.Uri
): Promise<GetSourceInfoResult> => {
  const path = vscode.workspace.asRelativePath(uri ?? "");

  const pathSegments = path.split("/");

  const rootSegment = pathSegments[0];

  switch (rootSegment) {
    case "libs": {
      return getLibInfo(...pathSegments);
    }
    case "apps": {
      return getAppInfo(...pathSegments);
    }
    default: {
      return {
        locationType: "other",
      };
    }
  }
};
