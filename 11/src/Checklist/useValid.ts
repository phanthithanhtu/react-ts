function validate<T>(value: T): boolean {
    return value !== undefined && value !== null && value !== '';
  }
  export function useValid(data: Record<string | number, boolean>): boolean {
    const areAnyChecked = Object.values(data).some((isChecked) => isChecked);
    return areAnyChecked;
  }
