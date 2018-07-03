
export const isPc = (arg1, arg2) => ({ theme }) => (
  theme.device === "pc" ?
    arg1 :
    arg2
)


export const isPrim = (arg1, arg2) => ({ theme, primary }) => (
  primary ?
    theme[arg1] :
    theme[arg2]
)

export const getTheme = (key) => ({ theme }) => theme[key]

