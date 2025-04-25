import { buildTerminalGeneratorCommand } from "./build-terminal-generator-command";
import { pickTerminalCommandParams, sendTextToTerminal } from "../../terminal";
import { GeneratorConfig } from "../types";
import * as vscode from "vscode";

export const runGenerator = (config: GeneratorConfig, uri?: vscode.Uri) => {
  const title = `RonasIT/NX Generators: ${config.title}`;

  pickTerminalCommandParams({
    uri,
    title: `${title}. Options`,
    placeholder: "Execute command or set flags",
    executeCommandTitle: (params) =>
      `Execute command: ${buildTerminalGeneratorCommand(
        config.command,
        params
      )}`,
    options: config.params.map(({ param, detail, type, context }) => ({
      label: param,
      type,
      detail,
      context,
    })),
    onParamsEntered: (params) =>
      sendTextToTerminal({
        name: title,
        command: buildTerminalGeneratorCommand(config.command, params),
      }),
  });
};
