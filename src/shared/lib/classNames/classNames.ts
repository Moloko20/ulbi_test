type Mods = Record<string, string | boolean>

export function classNames(
    cls: string,
    mods: Mods,
    additional: string[]
): string {
    return [
        cls,
        ...additional,
        Object.entries(mods)
            .filter(([, value]) => Boolean(value))
            .map(([cls]) => cls),
    ].join(' ')
}

classNames('remove-btn', { hover: true, selectebel: true, red: false }, ['pdg'])
