type EnumObject<T> = {
    [key: string]: T;
    [index: number]: T;
};

export function generateOptions<T>(enumObj: EnumObject<T>) {
    return Object.keys(enumObj).map((key) => ({
        label: enumObj[key],
        value: enumObj[key]
    }));
}
