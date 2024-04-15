export function isNullOrUndefined(object) {
  return object === null || undefined;
}

export function isNotNullOrUndefined(object) {
  return !isNullOrUndefined(object);
}

export function isEmptyArray(array) {
  return !array?.length;
}

export function isNotEmptyArray(array) {
  return !isEmptyArray(array);
}