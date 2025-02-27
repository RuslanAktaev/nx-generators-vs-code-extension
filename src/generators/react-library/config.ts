import { GeneratorConfig } from "../types";

export const reactLibraryGeneratorConfig: GeneratorConfig = {
  title: "React React library",
  command: "react-lib",
  params: [
    {
      param: "app",
      detail: "Name of an app or shared",
      type: "string",
    },
    {
      param: "scope",
      detail:
        "Name of a scope or shared. This option is for a library, related to an app.",
      type: "scope",
    },
    {
      param: "type",
      detail:
        "Type of library. Possible values are features, data-access, ui and utils",
      type: "string",
    },
    {
      param: "name",
      detail: "Name of a library",
      type: "string",
    },
    {
      param: "withComponent",
      detail:
        "Generate the library with lib/component.tsx file. This option is for features or ui library",
      type: "boolean",
    },
    {
      param: "withComponentForwardRef",
      detail:
        "Generate a component with forwardRef in lib/component.tsx file. This option works if withComponent is true",
      type: "boolean",
    },
    {
      param: "dryRun",
      detail: "Generate the library without creating files",
      type: "boolean",
    },
  ],
};
