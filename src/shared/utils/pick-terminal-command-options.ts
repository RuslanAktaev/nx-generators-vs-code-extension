import * as vscode from "vscode";
import { TerminalParamPickerItem } from "../types";
import { inputTerminalParamValue } from "./input-terminal-param-value";
import { appendParamToTerminalCommand } from "./append-param-to-terminal-command";

// TODO: Add support of unnecessary params
export type PickTerminalCommandParamsArgs = {
  title: string;
  placeholder: string;
  executeCommandTitle: (paramsString: string) => string;
  options: Array<TerminalParamPickerItem>;
  textInputOptions?: vscode.InputBoxOptions;
  onParamsEntered: (paramsString: string) => void;
};

export const pickTerminalCommandParams = ({
  title,
  placeholder,
  executeCommandTitle,
  options,
  textInputOptions = {},
  onParamsEntered,
}: PickTerminalCommandParamsArgs): vscode.QuickPick<TerminalParamPickerItem> => {
  let paramsString = "";

  const quickPick = vscode.window.createQuickPick<TerminalParamPickerItem>();

  const handleParamsEntered = (): void => {
    quickPick.dispose();
    onParamsEntered?.(paramsString);
  };

  const updateParam = (param: string, value?: string): void => {
    if (!value) {
      quickPick.items = quickPick.items;

      return;
    }

    paramsString = appendParamToTerminalCommand({
      sourceParamsString: paramsString,
      param,
      value,
    });

    quickPick.items[0].label = executeCommandTitle(paramsString);
    quickPick.items = [
      ...quickPick.items.filter((item) => item.label !== param),
    ];
  };

  quickPick.title = title;
  quickPick.placeholder = placeholder;
  quickPick.items = [
    {
      label: executeCommandTitle(paramsString),
      type: "execute",
    },
    ...options,
  ];

  quickPick.onDidChangeSelection(async ([{ label, type }]) => {
    if (type === "execute") {
      handleParamsEntered();

      return;
    }

    const paramValue = await inputTerminalParamValue({
      type,
      title: label,
      ...textInputOptions,
    });

    updateParam(label, paramValue);
    quickPick.show();
  });

  quickPick.show();

  return quickPick;
};
