import { GeneratorConfig } from "../types";

export const moveLibraryGeneratorConfig: GeneratorConfig = {
  title: "Move library",
  command: "lib-move",
  params: [
    {
      param: "srcLibName",
      detail:
        "Name of the library (e.g.: mobile-account-features-profile-settings)",
      type: "string",
      context: "libName",
    },
    {
      param: "app",
      detail: "Name of an app or shared",
      type: "string",
      context: "app",
    },
    {
      param: "scope",
      detail:
        "Name of a scope or shared. This option is for a library, related to an app",
      type: "string",
      context: "scope",
    },
    {
      param: "type",
      detail:
        "Type of library. Possible values are features, data-access, ui and utils",
      type: "libraryType",
      context: "type",
    },
    {
      param: "name",
      detail: "Name of a library",
      type: "string",
    },
  ],
};
