"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.pickTerminalCommandOptions = void 0;
const vscode = __importStar(require("vscode"));
const enums_1 = require("../enums");
const pickTerminalCommandOptions = ({ title, placeholder, executeCommandTitle, options, textInputOptions = {}, onParamsEntered, }) => {
    let paramsString = "";
    const quickPick = vscode.window.createQuickPick();
    const handleParamsEntered = () => {
        quickPick.dispose();
        onParamsEntered?.(paramsString);
    };
    quickPick.title = title;
    quickPick.placeholder = placeholder;
    quickPick.items = [
        {
            label: executeCommandTitle,
            value: enums_1.TerminalOptionsPickerValue.EXECUTE_COMMAND,
        },
        ...options,
    ];
    quickPick.onDidChangeSelection(async ([{ label, value }]) => {
        if (value === enums_1.TerminalOptionsPickerValue.EXECUTE_COMMAND) {
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
        }
        else {
            handleParamsEntered();
        }
    });
    quickPick.show();
    return quickPick;
};
exports.pickTerminalCommandOptions = pickTerminalCommandOptions;
//# sourceMappingURL=pick-terminal-command-options.js.map