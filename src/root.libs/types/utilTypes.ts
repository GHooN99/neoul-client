/**
 * example @type Optional
 */
export type Optional<T> = {
  [K in keyof T]?: T[K];
};
