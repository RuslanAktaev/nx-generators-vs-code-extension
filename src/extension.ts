import * as vscode from "vscode";

const quickPickItems: vscode.QuickPickItem[] = [
  {
    label: "--first-param",
    description: "First item param",
  },
  {
    label: "--second-param",
    description: "Second item param",
  },
  {
    label: "--third-param",
    description: "Third item param",
  },
];

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "ronas-it-nx-generators" is now activeeee!'
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(
      "ronas-it-nx-generators.generateComponent",
      (resourceUrl?: vscode.Uri) => {
        if (!resourceUrl) {
          return;
        }

        // const relativeSource = vscode.workspace.asRelativePath(
        //   resourceUrl,
        //   false
        // );

        // let cmd = 'nx g some-cmd';
        let params = "";

        const quickPick = vscode.window.createQuickPick();

        quickPick.title = "Generate component: options";
        quickPick.placeholder = "Select option";
        quickPick.items = quickPickItems;

        quickPick.onDidChangeSelection(async ([{ label }]) => {
          const value = await vscode.window.showInputBox({
            title: label,
            prompt: "Enter param value",
          });

          params = `${params} ${label}=${value}`;

          // vscode.window.showInformationMessage(label + ": " + value);

          quickPick.items = quickPick.items.filter(
            (item) => item.label !== label
          );

          if (quickPick.items.length !== 0) {
            quickPick.show();
          } else {
            quickPick.dispose();

            const terminal = vscode.window.createTerminal("Generate component");

            terminal.show();
            terminal.sendText(`nx g custom-generator:component ${params}`);
          }
        });

        quickPick.show();
      }
    )
  );

  // context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
