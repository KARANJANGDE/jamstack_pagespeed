export const replace = (val: string, replace_args: Record<string, string>) => {
  return Object.entries(replace_args).reduce(
    (prev, [key, value]) => prev.replace(key, value),
    val
  );
};
export const replaceAll = (
  inputString: string,
  replacements: Record<string, string>
) => {
  let resultString = inputString;

  for (const [token, replacement] of Object.entries(replacements)) {
    const regex = new RegExp(token, "g");
    resultString = resultString.replace(regex, replacement);
  }

  return resultString;
};