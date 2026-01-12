import * as vscode from "vscode";
import { omit } from "lodash";
import { constants } from "../../shared";

export type InputTerminalParamValueArgs =
  | ({
      type: "string";
    } & vscode.InputBoxOptions)
  | ({
      type: "boolean" | "library-type" | "app-type";
    } & vscode.QuickPickOptions);

export const inputTerminalParamValue = async (
  options: InputTerminalParamValueArgs
): Promise<string | undefined> => {
  switch (options.type) {
    case "string":
      return await vscode.window.showInputBox(omit(options, ["type"]));
    case "boolean":
      return await vscode.window.showQuickPick(
        ["true", "false"],
        omit(options, ["type"])
      );
    case "library-type":
      return await vscode.window.showQuickPick(
        constants.libraryTypes,
        omit(options, ["type"])
      );
    case "app-type":
      return await vscode.window.showQuickPick(
        constants.appTypes,
        omit(options, ["type"])
      );
    default:
      return;
  }
};
