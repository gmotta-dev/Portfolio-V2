import { DefaultColors } from "tailwindcss/types/generated/colors";

import tailwindConfig from "../../tailwind.config";

export type TTWColorsKeys = keyof typeof tailwindConfig.theme.extend.colors | keyof DefaultColors;