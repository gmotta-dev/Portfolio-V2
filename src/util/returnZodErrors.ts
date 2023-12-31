import { ZodError } from "zod";

export default function returnZodErrors(err: any) {
  let zodErrors = undefined;

  if (err instanceof ZodError && err.errors) {
    zodErrors = err.errors.reduce((acc, cur) => {
      const fieldName = cur.path[0];

      return { ...acc, [fieldName]: cur.message };
    }, {});
  }

  return zodErrors;
}
