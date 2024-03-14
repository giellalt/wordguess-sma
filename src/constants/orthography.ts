import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'q',
  'w',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  'å',
  'ï',

  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  'ö',
  'æ',

  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
