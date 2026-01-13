import { GeneratorConfig } from "../types";

export const removeLibraryGeneratorConfig: GeneratorConfig = {
  title: "Remove library",
  command: "lib-remove",
  params: [
    {
      param: "libName",
      detail:
        "Name of the library (e.g.: mobile-account-features-profile-settings)",
      type: "string",
      context: "libName",
    },
  ],
};
