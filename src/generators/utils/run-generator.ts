import { buildTerminalGeneratorCommand } from "./build-terminal-generator-command";
import { pickTerminalCommandParams, sendTextToTerminal } from "../../terminal";
import { GeneratorConfig } from "../types";

export const runGenerator = (config: GeneratorConfig) => {
  const title = `RonasIT/NX Generators: ${config.title}`;

  pickTerminalCommandParams({
    title: `${title}. Options`,
    placeholder: "Execute command or set flags",
    executeCommandTitle: (paramsString: string) =>
      `Execute command: ${buildTerminalGeneratorCommand(
        config.command,
        paramsString
      )}`,
    options: config.params.map(({ param, detail, type }) => ({
      label: param,
      type,
      detail,
    })),
    onParamsEntered: (paramsString) =>
      sendTextToTerminal({
        name: title,
        command: buildTerminalGeneratorCommand(config.command, paramsString),
      }),
  });
};
