export default (string: string) => {
  const split = string.split(".").at(-1);

  if (split) {
    return split.match(/.+(.ts|.js)/);
  }

  return false;
};
