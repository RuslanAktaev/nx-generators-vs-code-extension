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
        const title = "RonasIT/NX Generators: Generate component";

        pickTerminalCommandParams({
          title: `${title}. Options`,
          placeholder: "Execute command or set flags",
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
          onParamsEntered: (paramsString) =>
            sendTextToTerminal({
              name: title,
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
