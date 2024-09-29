const mockAxios = {
    get: jest.fn(() => Promise.resolve({ data: { message: 'Mocked GET response' } })),
    post: jest.fn(() => Promise.resolve({ data: { message: 'Mocked POST response' } })),
  };
  
  export default mockAxios;
  