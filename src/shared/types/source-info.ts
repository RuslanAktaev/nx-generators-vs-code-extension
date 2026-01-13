import { constants } from "../constants";

export type GetSourceLibInfo = {
  locationType: "lib";
  app: string;
  scope: string;
  type: string;
  libName: string;
};

export type GetSourceAppInfo = {
  locationType: "app";
  app: string;
  appType: (typeof constants.appTypes)[number];
};

export type GetSourceOtherInfo = {
  locationType: "other";
};

export type GetSourceInfoResult =
  | GetSourceLibInfo
  | GetSourceAppInfo
  | GetSourceOtherInfo;
