import * as vscode from "vscode";
import { TerminalOptionsPickerItem } from "../types";
import { TerminalOptionsPickerValue } from "../enums";

// TODO: Add support of unnecessary params
export type PickTerminalCommandOptionsParams = {
  title: string;
  placeholder: string;
  executeCommandTitle: string;
  options: Array<TerminalOptionsPickerItem>;
  textInputOptions?: vscode.InputBoxOptions;
  onParamsEntered: (paramsString: string) => void;
};

export const pickTerminalCommandOptions = ({
  title,
  placeholder,
  executeCommandTitle,
  options,
  textInputOptions = {},
  onParamsEntered,
}: PickTerminalCommandOptionsParams): vscode.QuickPick<TerminalOptionsPickerItem> => {
  let paramsString = "";

  const quickPick = vscode.window.createQuickPick<TerminalOptionsPickerItem>();

  const handleParamsEntered = (): void => {
    quickPick.dispose();
    onParamsEntered?.(paramsString);
  };

  quickPick.title = title;
  quickPick.placeholder = placeholder;
  quickPick.items = [
    {
      label: executeCommandTitle,
      value: TerminalOptionsPickerValue.EXECUTE_COMMAND,
    },
    ...options,
  ];

  quickPick.onDidChangeSelection(async ([{ label, value }]) => {
    if (value === TerminalOptionsPickerValue.EXECUTE_COMMAND) {
      handleParamsEntered();
    }

    const paramValue = await vscode.window.showInputBox({
      title: label,
      ...textInputOptions,
    });

    paramsString = `${paramsString} ${label}=${paramValue}`;

    quickPick.items = quickPick.items.filter((item) => item.label !== label);

    if (quickPick.items.length !== 0) {
      quickPick.show();
    } else {
      handleParamsEntered();
    }
  });

  quickPick.show();

  return quickPick;
};
