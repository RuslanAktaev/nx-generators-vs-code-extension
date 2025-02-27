import { GeneratorConfig } from "../types";

export const libraryTagsGeneratorConfig: GeneratorConfig = {
  title: "Library tags",
  command: "lib-tags",
  params: [
    {
      param: "silent",
      detail: "Disables all logs",
      type: "boolean",
    },
    {
      param: "skipRepoCheck",
      detail: "Disables check repository status",
      type: "boolean",
    },
  ],
};
