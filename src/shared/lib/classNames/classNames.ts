type Mods = Record<string, string | boolean>

export function classNames(className: string, mods?: Mods, additional?: string[] ):string {
  return [
    className,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([cls, value]) => Boolean(value))
      .map(([cls]) => cls)
  ].join(' ')
}