import { getColorByAdd } from './color';

test('should get color for start add', () => {
  const result = getColorByAdd('start');
  expect(result).toBe('#ccccf1');
});

test('should get color for middle add', () => {
  const result = getColorByAdd('middle');
  expect(result).toBe('#a3a3f1');
});

test('should get color for end add', () => {
  const result = getColorByAdd('end');
  expect(result).toBe('#6c6cf3');
});

test('should get color for dry hop add', () => {
  const result = getColorByAdd('dry hop');
  expect(result).toBe('#7d8c9b');
});

test('should get color for other values', () => {
  const result = getColorByAdd('some other value');
  expect(result).toBe('red');
});
