/* eslint-disable @typescript-eslint/no-unused-vars */
type ClassValue = string | { [key: string]: boolean };

export const cls = (...classes: ClassValue[]) => {
  return classes

    .map((cls) => {
      if (typeof cls === 'string') {
        return cls;
      }

      return Object.entries(cls)

        .filter(([_, value]) => value)

        .map(([key, _]) => key)

        .join(' ');
    })

    .filter(Boolean)

    .join(' ');
};
