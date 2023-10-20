import fetchData from '../http';
import getLevel from '../app';

jest.mock('../http');
beforeEach(() => {
  jest.resetAllMocks();
});

test.each([
  [{ status: 'ok', level: 1 }, 1, 'Ваш текущий уровень: 1'],
  [{ status: '' }, 2, 'Информация об уровне временно недоступна'],
])('Checking the getLevel function with response %o', (response, id, exp) => {
  fetchData.mockReturnValue(response);
  const result = getLevel(id);
  expect(result).toBe(exp);
});
