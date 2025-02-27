import { GeneratorConfig } from "../types";

export const formGeneratorConfig: GeneratorConfig = {
  title: "Form",
  command: "form",
  params: [
    {
      param: "name",
      detail: "Name of the form (e.g: profile-settings)",
      type: "string",
    },
    {
      param: "placeOfUse",
      detail:
        "name of the component or hook, where the form should be (e.g: ProfileSettings or useProfileSettings)",
      type: "string",
    },
  ],
};
