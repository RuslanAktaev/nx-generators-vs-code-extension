import { GeneratorConfig } from "../types";

export const renameLibraryGeneratorConfig: GeneratorConfig = {
  title: "Rename library",
  command: "lib-rename",
  params: [
    {
      param: "currentLibName",
      detail:
        "Name of the library (e.g.: mobile-account-features-profile-settings)",
      type: "string",
    },
    {
      param: "newLibName",
      detail:
        "New name of the library (e.g.: user-settings, project name will be mobile-account-features-user-settings)",
      type: "string",
    },
  ],
};
