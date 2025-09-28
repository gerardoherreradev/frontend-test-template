import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Filter } from '../Filter';
import { Game } from '@/utils/endpoint';
import { useRouter, useSearchParams } from 'next/navigation';

// Mock useRouter and useSearchParams
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}));

const mockGames: Game[] = [
  { id: '1', name: 'Game A', price: 10, genre: 'Action', image: '/a.jpg', description: 'desc A', isNew: true },
  { id: '2', name: 'Game B', price: 20, genre: 'Adventure', image: '/b.jpg', description: 'desc B', isNew: false },
  { id: '3', name: 'Game C', price: 30, genre: 'Action', image: '/c.jpg', description: 'desc C', isNew: true },
];

describe('Filter', () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the heading "Top Sellers"', () => {
    render(<Filter games={mockGames} />);
    expect(screen.getByRole('heading', { name: /top sellers/i })).toBeInTheDocument();
  });

  it('renders a select dropdown with "All" and available genres when there are multiple genres', () => {
    render(<Filter games={mockGames} />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'All' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Action' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Adventure' })).toBeInTheDocument();
  });

  
});
