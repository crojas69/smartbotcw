const {
  blue,
  blueDark,
  green,
  greenDark,
  yellow,
  yellowDark,
  slate,
  slateDark,
  red,
  redDark,
  violet,
  violetDark,
} = require('@radix-ui/colors');
const customSlate = { ...slate };
const customSlateDark = { ...slateDark };

customSlate.slate4 = '#f19106';
customSlateDark.slate4 = '#f19106';
export const colors = {
  woot: {
    25: blue.blue2,
    50: blue.blue3,
    75: blue.blue4,
    100: blue.blue5,
    200: blue.blue7,
    300: blue.blue8,
    400: blueDark.blue11,
    500: blueDark.blue10,
    600: blueDark.blue9,
    700: blueDark.blue8,
    800: blueDark.blue6,
    900: blueDark.blue2,
  },
  green: {
    50: greenDark.green12,
    100: green.green6,
    200: green.green7,
    300: green.green8,
    400: greenDark.green10,
    500: greenDark.green9,
    600: green.green10,
    700: green.green11,
    800: greenDark.green7,
    900: greenDark.green6,
  },
  yellow: {
    50: yellow.yellow2,
    100: yellow.yellow3,
    200: yellow.yellow5,
    300: yellowDark.yellow10,
    400: yellowDark.yellow9,
    500: yellowDark.yellow11,
    600: yellow.yellow8,
    700: yellowDark.yellow7,
    800: yellowDark.yellow2,
    900: yellowDark.yellow1,
  },
  slate: {
    25: customslate.slate2,
    50: customslate.slate3,
    75: customslate.slate4, // color modificado
    100: customslate.slate5,
    200: customslate.slate7,
    300: customslate.slate8,
    400: customslateDark.slate11,
    500: customslateDark.slate10,
    600: customslate.slate11,
    700: customslateDark.slate8,
    800: customslateDark.slate4, // color modificado
    900: customslateDark.slate1,
  },
  black: {
    50: customslate.slate2,
    100: customslateDark.slate12,
    200: customslate.slate7,
    300: customslate.slate8,
    400: customslateDark.slate11,
    500: customslate.slate9,
    600: customslateDark.slate9,
    700: customslateDark.slate8,
    800: customslateDark.slate7,
    900: customslateDark.slate2,
  },
  red: {
    50: redDark.red12,
    100: red.red6,
    200: red.red8,
    300: redDark.red11,
    400: redDark.red10,
    500: red.red9,
    600: red.red10,
    700: red.red11,
    800: redDark.red8,
    900: red.red12,
  },
  violet: {
    50: violet.violet1,
    100: violetDark.violet12,
    200: violet.violet6,
    300: violet.violet8,
    400: violet.violet11,
    500: violet.violet9,
    600: violetDark.violet8,
    700: violetDark.violet7,
    800: violetDark.violet6,
    900: violet.violet12,
  },
  primary: {
    25: 'rgb(var(--color-primary-25) / <alpha-value>)',
    50: 'rgb(var(--color-primary-50) / <alpha-value>)',
    75: 'rgb(var(--color-primary-75) / <alpha-value>)',
    100: 'rgb(var(--color-primary-100) / <alpha-value>)',
    200: 'rgb(var(--color-primary-200) / <alpha-value>)',
    300: 'rgb(var(--color-primary-300) / <alpha-value>)',
    400: 'rgb(var(--color-primary-400) / <alpha-value>)',
    500: 'rgb(var(--color-primary-500) / <alpha-value>)',
    600: 'rgb(var(--color-primary-600) / <alpha-value>)',
    700: 'rgb(var(--color-primary-700) / <alpha-value>)',
    800: 'rgb(var(--color-primary-800) / <alpha-value>)',
    900: 'rgb(var(--color-primary-900) / <alpha-value>)',
  },
  ash: {
    25: 'rgb(var(--color-ash-25) / <alpha-value>)',
    50: 'rgb(var(--color-ash-50) / <alpha-value>)',
    75: 'rgb(var(--color-ash-75) / <alpha-value>)',
    100: 'rgb(var(--color-ash-100) / <alpha-value>)',
    200: 'rgb(var(--color-ash-200) / <alpha-value>)',
    300: 'rgb(var(--color-ash-300) / <alpha-value>)',
    400: 'rgb(var(--color-ash-400) / <alpha-value>)',
    500: 'rgb(var(--color-ash-500) / <alpha-value>)',
    600: 'rgb(var(--color-ash-600) / <alpha-value>)',
    700: 'rgb(var(--color-ash-700) / <alpha-value>)',
    800: 'rgb(var(--color-ash-800) / <alpha-value>)',
    900: 'rgb(var(--color-ash-900) / <alpha-value>)',
  },
  teal: {
    25: 'rgb(var(--color-teal-25) / <alpha-value>)',
    50: 'rgb(var(--color-teal-50) / <alpha-value>)',
    100: 'rgb(var(--color-teal-100) / <alpha-value>)',
    200: 'rgb(var(--color-teal-200) / <alpha-value>)',
    300: 'rgb(var(--color-teal-300) / <alpha-value>)',
    400: 'rgb(var(--color-teal-400) / <alpha-value>)',
    500: 'rgb(var(--color-teal-500) / <alpha-value>)',
    600: 'rgb(var(--color-teal-600) / <alpha-value>)',
    700: 'rgb(var(--color-teal-700) / <alpha-value>)',
    800: 'rgb(var(--color-teal-800) / <alpha-value>)',
    900: 'rgb(var(--color-teal-900) / <alpha-value>)',
  },
  amber: {
    25: 'rgb(var(--color-amber-25) / <alpha-value>)',
    50: 'rgb(var(--color-amber-50) / <alpha-value>)',
    75: 'rgb(var(--color-amber-75) / <alpha-value>)',
    100: 'rgb(var(--color-amber-100) / <alpha-value>)',
    200: 'rgb(var(--color-amber-200) / <alpha-value>)',
    300: 'rgb(var(--color-amber-300) / <alpha-value>)',
    400: 'rgb(var(--color-amber-400) / <alpha-value>)',
    500: 'rgb(var(--color-amber-500) / <alpha-value>)',
    600: 'rgb(var(--color-amber-600) / <alpha-value>)',
    700: 'rgb(var(--color-amber-700) / <alpha-value>)',
    800: 'rgb(var(--color-amber-800) / <alpha-value>)',
    900: 'rgb(var(--color-amber-900) / <alpha-value>)',
  },
  ruby: {
    25: 'rgb(var(--color-ruby-25) / <alpha-value>)',
    50: 'rgb(var(--color-ruby-50) / <alpha-value>)',
    75: 'rgb(var(--color-ruby-75) / <alpha-value>)',
    100: 'rgb(var(--color-ruby-100) / <alpha-value>)',
    200: 'rgb(var(--color-ruby-200) / <alpha-value>)',
    300: 'rgb(var(--color-ruby-300) / <alpha-value>)',
    400: 'rgb(var(--color-ruby-400) / <alpha-value>)',
    500: 'rgb(var(--color-ruby-500) / <alpha-value>)',
    600: 'rgb(var(--color-ruby-600) / <alpha-value>)',
    700: 'rgb(var(--color-ruby-700) / <alpha-value>)',
    800: 'rgb(var(--color-ruby-800) / <alpha-value>)',
    900: 'rgb(var(--color-ruby-900) / <alpha-value>)',
  },
  grass: {
    25: 'rgb(var(--color-green-25) / <alpha-value>)',
    50: 'rgb(var(--color-green-50) / <alpha-value>)',
    75: 'rgb(var(--color-green-75) / <alpha-value>)',
    100: 'rgb(var(--color-green-100) / <alpha-value>)',
    200: 'rgb(var(--color-green-200) / <alpha-value>)',
    300: 'rgb(var(--color-green-300) / <alpha-value>)',
    400: 'rgb(var(--color-green-400) / <alpha-value>)',
    500: 'rgb(var(--color-green-500) / <alpha-value>)',
    600: 'rgb(var(--color-green-600) / <alpha-value>)',
    700: 'rgb(var(--color-green-700) / <alpha-value>)',
    800: 'rgb(var(--color-green-800) / <alpha-value>)',
    900: 'rgb(var(--color-green-900) / <alpha-value>)',
  },
  mint: {
    25: 'rgb(var(--color-mint-25) / <alpha-value>)',
    50: 'rgb(var(--color-mint-50) / <alpha-value>)',
    75: 'rgb(var(--color-mint-75) / <alpha-value>)',
    100: 'rgb(var(--color-mint-100) / <alpha-value>)',
    200: 'rgb(var(--color-mint-200) / <alpha-value>)',
    300: 'rgb(var(--color-mint-300) / <alpha-value>)',
    400: 'rgb(var(--color-mint-400) / <alpha-value>)',
    500: 'rgb(var(--color-mint-500) / <alpha-value>)',
    600: 'rgb(var(--color-mint-600) / <alpha-value>)',
    700: 'rgb(var(--color-mint-700) / <alpha-value>)',
    800: 'rgb(var(--color-mint-800) / <alpha-value>)',
    900: 'rgb(var(--color-mint-900) / <alpha-value>)',
  },
  sky: {
    25: 'rgb(var(--color-sky-25) / <alpha-value>)',
    50: 'rgb(var(--color-sky-50) / <alpha-value>)',
    75: 'rgb(var(--color-sky-75) / <alpha-value>)',
    100: 'rgb(var(--color-sky-100) / <alpha-value>)',
    200: 'rgb(var(--color-sky-200) / <alpha-value>)',
    300: 'rgb(var(--color-sky-300) / <alpha-value>)',
    400: 'rgb(var(--color-sky-400) / <alpha-value>)',
    500: 'rgb(var(--color-sky-500) / <alpha-value>)',
    600: 'rgb(var(--color-sky-600) / <alpha-value>)',
    700: 'rgb(var(--color-sky-700) / <alpha-value>)',
    800: 'rgb(var(--color-sky-800) / <alpha-value>)',
    900: 'rgb(var(--color-sky-900) / <alpha-value>)',
  },
  indigo: {
    25: 'rgb(var(--color-indigo-25) / <alpha-value>)',
    50: 'rgb(var(--color-indigo-50) / <alpha-value>)',
    75: 'rgb(var(--color-indigo-75) / <alpha-value>)',
    100: 'rgb(var(--color-indigo-100) / <alpha-value>)',
    200: 'rgb(var(--color-indigo-200) / <alpha-value>)',
    300: 'rgb(var(--color-indigo-300) / <alpha-value>)',
    400: 'rgb(var(--color-indigo-400) / <alpha-value>)',
    500: 'rgb(var(--color-indigo-500) / <alpha-value>)',
    600: 'rgb(var(--color-indigo-600) / <alpha-value>)',
    700: 'rgb(var(--color-indigo-700) / <alpha-value>)',
    800: 'rgb(var(--color-indigo-800) / <alpha-value>)',
    900: 'rgb(var(--color-indigo-900) / <alpha-value>)',
  },
  iris: {
    25: 'rgb(var(--color-iris-25) / <alpha-value>)',
    50: 'rgb(var(--color-iris-50) / <alpha-value>)',
    75: 'rgb(var(--color-iris-75) / <alpha-value>)',
    100: 'rgb(var(--color-iris-100) / <alpha-value>)',
    200: 'rgb(var(--color-iris-200) / <alpha-value>)',
    300: 'rgb(var(--color-iris-300) / <alpha-value>)',
    400: 'rgb(var(--color-iris-400) / <alpha-value>)',
    500: 'rgb(var(--color-iris-500) / <alpha-value>)',
    600: 'rgb(var(--color-iris-600) / <alpha-value>)',
    700: 'rgb(var(--color-iris-700) / <alpha-value>)',
    800: 'rgb(var(--color-iris-800) / <alpha-value>)',
    900: 'rgb(var(--color-iris-900) / <alpha-value>)',
  },
  purple: {
    25: 'rgb(var(--color-violet-25) / <alpha-value>)',
    50: 'rgb(var(--color-violet-50) / <alpha-value>)',
    75: 'rgb(var(--color-violet-75) / <alpha-value>)',
    100: 'rgb(var(--color-violet-100) / <alpha-value>)',
    200: 'rgb(var(--color-violet-200) / <alpha-value>)',
    300: 'rgb(var(--color-violet-300) / <alpha-value>)',
    400: 'rgb(var(--color-violet-400) / <alpha-value>)',
    500: 'rgb(var(--color-violet-500) / <alpha-value>)',
    600: 'rgb(var(--color-violet-600) / <alpha-value>)',
    700: 'rgb(var(--color-violet-700) / <alpha-value>)',
    800: 'rgb(var(--color-violet-800) / <alpha-value>)',
    900: 'rgb(var(--color-violet-900) / <alpha-value>)',
  },
  pink: {
    25: 'rgb(var(--color-pink-25) / <alpha-value>)',
    50: 'rgb(var(--color-pink-50) / <alpha-value>)',
    75: 'rgb(var(--color-pink-75) / <alpha-value>)',
    100: 'rgb(var(--color-pink-100) / <alpha-value>)',
    200: 'rgb(var(--color-pink-200) / <alpha-value>)',
    300: 'rgb(var(--color-pink-300) / <alpha-value>)',
    400: 'rgb(var(--color-pink-400) / <alpha-value>)',
    500: 'rgb(var(--color-pink-500) / <alpha-value>)',
    600: 'rgb(var(--color-pink-600) / <alpha-value>)',
    700: 'rgb(var(--color-pink-700) / <alpha-value>)',
    800: 'rgb(var(--color-pink-800) / <alpha-value>)',
    900: 'rgb(var(--color-pink-900) / <alpha-value>)',
  },
  orange: {
    25: 'rgb(var(--color-orange-25) / <alpha-value>)',
    50: 'rgb(var(--color-orange-50) / <alpha-value>)',
    75: 'rgb(var(--color-orange-75) / <alpha-value>)',
    100: 'rgb(var(--color-orange-100) / <alpha-value>)',
    200: 'rgb(var(--color-orange-200) / <alpha-value>)',
    300: 'rgb(var(--color-orange-300) / <alpha-value>)',
    400: 'rgb(var(--color-orange-400) / <alpha-value>)',
    500: 'rgb(var(--color-orange-500) / <alpha-value>)',
    600: 'rgb(var(--color-orange-600) / <alpha-value>)',
    700: 'rgb(var(--color-orange-700) / <alpha-value>)',
    800: 'rgb(var(--color-orange-800) / <alpha-value>)',
    900: 'rgb(var(--color-orange-900) / <alpha-value>)',
  },
};
