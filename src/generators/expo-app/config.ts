import { GeneratorConfig } from "../types";

export const expoAppGeneratorConfig: GeneratorConfig = {
  title: "Generate Expo App",
  command: "expo-app",
  params: [
    {
      param: "name",
      detail: "Name of the app for app.config.ts (e.g: my-app)",
      type: "string",
    },
    {
      param: "directory",
      detail: "Name of the directory in the apps/ folder (e.g: mobile)",
      type: "string",
    },
  ],
};
