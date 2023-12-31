import resolveConfig from "tailwindcss/resolveConfig";
import { DefaultColors } from "tailwindcss/types/generated/colors";

import tailwindConfig from "../../tailwind.config";

const resolved = resolveConfig(tailwindConfig) as any;

const twColors = resolved.theme?.colors as typeof tailwindConfig.theme.extend.colors & DefaultColors;

export default twColors;
