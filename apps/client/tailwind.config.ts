import type { Config } from "tailwindcss";
import { tailwindConfig } from "theme";

const customConfig = {};

const config: Config = { ...tailwindConfig, ...customConfig };

export default config;
