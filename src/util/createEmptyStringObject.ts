type StringObject<T extends string> = {
  [key in T]: string;
};

const createEmptyStringObject = <T extends string>(strings: T[]): StringObject<T> => {
  let obj = {} as StringObject<T>;

  strings.forEach((i) => {
    obj[i] = "";
  });

  return obj;
};

export default createEmptyStringObject;
