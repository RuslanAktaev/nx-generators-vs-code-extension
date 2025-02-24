import * as vscode from "vscode";
import { TerminalParamType } from "../types";
import { omit } from "lodash";

export type InputTerminalParamValueArgs =
  | ({
      type: "string";
    } & vscode.InputBoxOptions)
  | ({
      type: "boolean";
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
    default:
      return;
  }
};
