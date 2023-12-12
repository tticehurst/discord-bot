/**
 *
 * @description Check if a string ends with .ts or .js
 * @param string The string to check
 * @returns True if the string ends with .ts or .js
 *
 */
export default (string: string) => {
  const split = string.split(".").at(-1);

  if (split) {
    return split.match(/(ts)|(js)/);
  }

  return false;
};
