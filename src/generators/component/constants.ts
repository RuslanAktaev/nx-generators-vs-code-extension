import * as vscode from "vscode";
import { TerminalParam, TerminalParamPickerItem } from "../../shared/types";

export const constants = {
  command: "react-component",
  generatorOptions: [
    {
      param: "name",
      detail: "Name of the component (e.g. AppButton)",
      type: "string",
    },
    {
      param: "subcomponent",
      detail: "Generate a folder for components",
      type: "string",
    },
    {
      param: "withForwardRef",
      detail: "Generate a component with forwardRef",
      type: "boolean",
    },
  ] as TerminalParam[],
};
