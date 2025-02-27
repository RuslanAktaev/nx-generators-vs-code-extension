import { GeneratorConfig } from "../types";

export const sentryGeneratorConfig: GeneratorConfig = {
  title: "Sentry",
  command: "sentry",
  params: [
    {
      param: "directory",
      detail: "The application directory that uses Sentry",
      type: "string",
    },
    {
      param: "dsn",
      detail: "Data Source Name of your Sentry project",
      type: "string",
    },
  ],
};
