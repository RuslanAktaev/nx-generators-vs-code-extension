import { GeneratorConfig } from "../types";

export const nextAppGeneratorConfig: GeneratorConfig = {
  title: "Generate Next App",
  command: "next-app",
  params: [
    {
      param: "name",
      detail: "Name of the app (e.g: my-app)",
      type: "string",
    },
    {
      param: "directory",
      detail: "Name of the directory in the apps/ folder (e.g: web)",
      type: "string",
    },
  ],
};
