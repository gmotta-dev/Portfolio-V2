type Variants = { [key: string]: { [subKey: string]: string | { [subSubKey: string]: string } | string } };

export const createStylization = <T extends Variants>(props: { variants: T; defaultValues?: { [K in keyof T]?: keyof T[K] } }) => {
  return <U extends { [K in keyof T]?: keyof T[K] }>(styles?: U) => {
    let appliedStyles: { [key: string]: any } = {};

    if (props.defaultValues) {
      for (const defaultKey in props.defaultValues) {
        appliedStyles[defaultKey] = props.variants[defaultKey][props.defaultValues[defaultKey] as keyof T[typeof defaultKey]] as string;
      }
    }

    if (!styles) for (const variantKey in props.variants) appliedStyles[variantKey] = "";
    else {
      for (const styleKey in styles) {
        if (styleKey in props.variants) {
          const variantValue = styles[styleKey]; 

          for (const variantKey in props.variants) {
            for (const subVariantKey in props.variants[variantKey]) {
              if (subVariantKey === (variantValue as any) && styleKey === variantKey) {
                appliedStyles[variantKey] = props.variants[variantKey][subVariantKey];
              }
            }
          }
        }
      }
    }

    return appliedStyles as {
      [K in keyof T]: {
        [SK in keyof T[K][U[K] & keyof T[K]]]: string;
      };
    };
  };
};

export type TInferStylization<T extends (...args: any) => any> = Parameters<T>[0];
