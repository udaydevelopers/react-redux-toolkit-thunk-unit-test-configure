import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import ApiComponent from './ApiComponent';
import { configureStore } from '@reduxjs/toolkit';
import apiReducer, { fetchData, postData } from '../features/apiSlice';
import axios from 'axios';

// Mock axios
jest.mock('axios');

const renderWithRedux = (component) => {
  const store = configureStore({ reducer: { api: apiReducer } });
  return { store, ...render(<Provider store={store}>{component}</Provider>) };
};

describe('ApiComponent', () => {
  it('should render posts on successful fetch', async () => {
    const mockData = [{ id: 1, title: 'Test Post' }];
    axios.get.mockResolvedValueOnce({ data: mockData });

    renderWithRedux(<ApiComponent />);
    
    // Check for loading state
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    // Wait for posts to render
    const postItem = await screen.findByText('Test Post');
    expect(postItem).toBeInTheDocument();
  });

  it('should handle new post submission', async () => {
    const mockPost = { id: 101, title: 'New Test Post', body: 'Post body' };
    axios.post.mockResolvedValueOnce({ data: mockPost });

    renderWithRedux(<ApiComponent />);
    
    // Simulate input change and form submission
    fireEvent.change(screen.getByPlaceholderText(/title/i), {
      target: { value: 'New Test Post' },
    });
    fireEvent.change(screen.getByPlaceholderText(/body/i), {
      target: { value: 'Post body' },
    });
    fireEvent.click(screen.getByText(/submit/i));

    // Wait for new post to render
    const newPostTitle = await screen.findByText('New Test Post');
    expect(newPostTitle).toBeInTheDocument();
  });
});
