import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    
    const category = 'One piece';

    test('debe de mostrar el Loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        
        render(<GifGrid category={category} /> );
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText(category) );
    });

    test('debe de mostrar items cuando se cargan las imágenes mediante el useFetchGifs', () => {
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Dragon Ball',
                url: 'https://localhost/dragonball.jpg'
            },
            {
                id: '123',
                title: 'Naruto',
                url: 'https://localhost/naruto.jpg'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });            

        render(<GifGrid category={category} /> ); 
        expect( screen.getAllByRole('img').length ).toBe(2);

    });

});