import * as vscode from "vscode";
import { TerminalParamPickerItem } from "../types";
import { inputTerminalParamValue } from "./input-terminal-param-value";
import { getSourceInfo } from "../../shared";

export type PickTerminalCommandParamsArgs = {
  uri?: vscode.Uri;
  title: string;
  placeholder: string;
  executeCommandTitle: (params: Record<string, string>) => string;
  options: Array<TerminalParamPickerItem>;
  onParamsEntered: (params: Record<string, string>) => void;
};

export const pickTerminalCommandParams = async ({
  uri,
  title,
  placeholder,
  executeCommandTitle,
  options,
  onParamsEntered,
}: PickTerminalCommandParamsArgs): Promise<
  vscode.QuickPick<TerminalParamPickerItem>
> => {
  vscode.window.showInformationMessage("pickTerminalCommandParams");

  const sourceInfo = await getSourceInfo(uri);

  let params: Record<string, any> = {};

  const quickPick = vscode.window.createQuickPick<TerminalParamPickerItem>();

  const handleParamsEntered = (): void => {
    quickPick.dispose();
    onParamsEntered?.(params);
  };

  const updateParam = (
    param: string,
    value?: string,
    removeSelector: boolean = true
  ): void => {
    if (!value) {
      quickPick.items = quickPick.items;

      return;
    }

    params[param] = value;
    quickPick.items[0].label = executeCommandTitle(params);

    quickPick.items = removeSelector
      ? quickPick.items.filter((item) => item.label !== param)
      : quickPick.items;
  };

  quickPick.title = title;
  quickPick.placeholder = placeholder;
  quickPick.items = [
    {
      label: executeCommandTitle(params),
      type: "execute",
    },
    ...options,
  ];

  options.forEach(({ context, label }) => {
    if (
      sourceInfo.locationType === "lib" &&
      (context === "type" || context === "app" || context === "scope")
    ) {
      updateParam(label, sourceInfo[context], false);
    }

    vscode.window.showInformationMessage(
      `sourceInfo.locationType: ${sourceInfo.locationType}, context: ${context}`
    );

    if (
      sourceInfo.locationType === "app" &&
      (context === "appType" || context === "app")
    ) {
      updateParam(label, sourceInfo[context], false);
    }
  });

  quickPick.onDidChangeSelection(async ([{ label, type }]) => {
    if (type === "execute") {
      handleParamsEntered();

      return;
    }

    const paramValue = await inputTerminalParamValue({
      type,
      title: label,
      placeHolder: `--${label}`,
    });

    updateParam(label, paramValue);
    quickPick.show();
  });

  quickPick.show();

  return quickPick;
};
