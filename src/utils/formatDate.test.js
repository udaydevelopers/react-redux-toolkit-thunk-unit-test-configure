import { formatDate } from './formatDate';

jest.mock('./formatDate'); // Jest will automatically use the mock from __mocks__

test('formatDate should return mocked date', () => {
  const result = formatDate('2024-09-30');
  expect(result).toBe('01/01/2024');
});
