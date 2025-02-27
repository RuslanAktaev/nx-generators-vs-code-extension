import { GeneratorConfig } from "../types";

export const componentGeneratorConfig: GeneratorConfig = {
  title: "Generate React component",
  command: "react-component",
  params: [
    {
      param: "name",
      detail: "Name of the component (e.g. AppButton)",
      type: "string",
    },
    {
      param: "subcomponent",
      detail: "Generate a folder for components",
      type: "string",
    },
    {
      param: "withForwardRef",
      detail: "Generate a component with forwardRef",
      type: "boolean",
    },
  ],
};
