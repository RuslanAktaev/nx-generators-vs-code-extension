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
    },
    {
      param: "app",
      detail: "Name of an app or shared",
      type: "string",
    },
    {
      param: "scope",
      detail:
        "Name of a scope or shared. This option is for a library, related to an app",
      type: "string",
    },
    {
      param: "type",
      detail:
        "Type of library. Possible values are features, data-access, ui and utils",
      type: "library-type",
    },
    {
      param: "name",
      detail: "Name of a library",
      type: "string",
    },
  ],
};
