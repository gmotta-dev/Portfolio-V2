import { z, ZodType } from "zod";

type InferZodSchema<T extends ZodType<any, any>> = z.infer<T>;

type HandlerProps<T extends ZodType<any, any>> = Omit<RequestInit, "body"> & {
  schema?: T;
  body?: any;
};

/**
 *
 This function is a normal fetch method, but with the possibility to pass a ZOD Schema to validate the response
 * 
 * @param url
 * @param options - Same fetch properties, with zod schema added to it
 * @returns
 */
export const fetchWithZod = async <T extends ZodType<any, any>>(url: string, options?: HandlerProps<T>): Promise<InferZodSchema<T>> => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Network response was not ok, status: ${response.status}`);
  }

  const data = await response.json();

  if (options?.schema) options.schema.parse(data);

  return data as InferZodSchema<T>;
};
