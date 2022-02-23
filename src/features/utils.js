/* eslint-disable import/prefer-default-export */
export const Capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const HyphenToSpace = (str) => str.replaceAll('-', ' ');

export const NormalizeFistWord = (str) => Capitalize(HyphenToSpace(str));
