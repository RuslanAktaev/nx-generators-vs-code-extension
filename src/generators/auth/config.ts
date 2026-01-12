import { GeneratorConfig } from "../types";

export const authGeneratorConfig: GeneratorConfig = {
  title: "Generate authentication setup",
  command: "auth",
  params: [
    {
      param: "directory",
      detail: "The name of the directory in the 'apps/' folder",
      type: "string",
    },
    {
      param: "type",
      detail: "Application type",
      type: "app-type",
    },
  ],
};
