import * as vscode from "vscode";
import { constants } from "./generators/component";
import {
  buildTerminalGeneratorCommand,
  pickTerminalCommandParams,
  sendTextToTerminal,
} from "./shared/utils";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "ronas-it-nx-generators.generateComponent",
      () => {
        pickTerminalCommandParams({
          title: "Generate component: options",
          placeholder: "Select option",
          executeCommandTitle: (paramsString: string) =>
            `Execute command: ${buildTerminalGeneratorCommand(
              constants.command,
              paramsString
            )}`,
          options: constants.generatorOptions.map(
            ({ param, detail, type }) => ({
              label: param,
              type,
              detail,
            })
          ),
          textInputOptions: {
            prompt: "Generate component",
          },
          onParamsEntered: (paramsString) =>
            sendTextToTerminal({
              name: "Generate component",
              command: buildTerminalGeneratorCommand(
                constants.command,
                paramsString
              ),
            }),
        });
      }
    )
  );
}

// This method is called when your extension is deactivated
export function deactivate() {}
