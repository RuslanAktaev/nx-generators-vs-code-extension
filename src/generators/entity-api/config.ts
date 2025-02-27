import { GeneratorConfig } from "../types";

export const entityApiGeneratorConfig: GeneratorConfig = {
  title: "Entity api",
  command: "entity-api",
  params: [
    {
      param: "name",
      detail: "Name of the entity (e.g. User)",
      type: "string",
    },
    {
      param: "baseEndpoint",
      detail: "Name of used endpoint in your API (e.g. /users)",
      type: "string",
    },
  ],
};
