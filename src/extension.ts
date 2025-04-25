import * as vscode from "vscode";
import {
  componentGeneratorConfig,
  reactLibraryGeneratorConfig,
  runGenerator,
  expoAppGeneratorConfig,
  nextAppGeneratorConfig,
  moveLibraryGeneratorConfig,
  renameLibraryGeneratorConfig,
  removeLibraryGeneratorConfig,
  libraryTagsGeneratorConfig,
  formGeneratorConfig,
  entityApiGeneratorConfig,
  sentryGeneratorConfig,
  repoConfigGeneratorConfig,
  codeChecksGeneratorConfig,
} from "./generators";
import { isNXProject } from "./shared";

export async function activate(context: vscode.ExtensionContext) {
  vscode.commands.executeCommand(
    "setContext",
    "ronas-it-nx-generators.isNXProject",
    isNXProject()
  );

  [
    repoConfigGeneratorConfig,
    codeChecksGeneratorConfig,
    expoAppGeneratorConfig,
    nextAppGeneratorConfig,
    reactLibraryGeneratorConfig,
    moveLibraryGeneratorConfig,
    renameLibraryGeneratorConfig,
    removeLibraryGeneratorConfig,
    libraryTagsGeneratorConfig,
    componentGeneratorConfig,
    formGeneratorConfig,
    entityApiGeneratorConfig,
    sentryGeneratorConfig,
  ].forEach((config) => {
    context.subscriptions.push(
      vscode.commands.registerCommand(
        `ronas-it-nx-generators.${config.command}`,
        (uri) => runGenerator(config, uri)
      )
    );
  });
}

// This method is called when your extension is deactivated
export function deactivate() {}
