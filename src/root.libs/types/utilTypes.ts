/**
 * example @type Optional
 */
export type Optional<T> = {
  [K in keyof T]?: T[K];
};

/**
 * keyof 의 value 버전
 */
export type ValueOf<T> = T[keyof T];
/**
 * T 와 K 의 타입을 중복을 제외하고 합친다.
 */
export type Combine<T, K> = T & Omit<K, keyof T>;
