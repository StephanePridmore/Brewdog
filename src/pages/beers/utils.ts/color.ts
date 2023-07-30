export function getColorByAdd(add: string): string {
  switch (add) {
    case 'start':
      return '#ccccf1';
    case 'middle':
      return '#a3a3f1';
    case 'end':
      return '#6c6cf3';
    case 'dry hop':
      return '#7d8c9b';
    default:
      return 'red';
  }
}
