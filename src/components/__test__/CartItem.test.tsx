// src/components/__tests__/MyComponent.test.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CartItem } from '../CartItem';
import { CartProvider } from '@/context/CartContext';

import { Game } from '@/utils/endpoint';

it('renders component', () => {
    // Provide a mock Game object as the item prop
    const mockItem: Game = {
        id: "1",
        name: 'Test Game',
        price: 10,
        genre: 'Action',
        image: '/test-image.jpg',
        description: 'This is a test game.',
        isNew: true,

    };
    render(<CartProvider>
        <CartItem item={mockItem} /></CartProvider>);
    expect(screen.getByText(/test game/i)).toBeInTheDocument();
});

