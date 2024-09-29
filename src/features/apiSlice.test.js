import axios from 'axios';
import { fetchData, postData } from './apiSlice';

jest.mock('axios'); // Automatically uses the axios mock from __mocks__

test('fetchData should return mocked GET response', async () => {
  const result = await fetchData();
  expect(result.payload).toEqual({ message: 'Mocked GET response' });
});

test('postData should return mocked POST response', async () => {
  const result = await postData();
  expect(result.payload).toEqual({ message: 'Mocked POST response' });
});
