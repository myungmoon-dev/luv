import { merge } from "lodash";
import type { Config } from "tailwindcss";
import { tailwindConfig } from "theme";

const customConfig = {
  prefix: "ui-",
};

const config: Config = merge({}, tailwindConfig, customConfig);

export default config;
