import { render, screen, fireEvent } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';


describe('Pruebas en <AddCategory />', () => { 

    test('debe de cambiar el valor de la caja de texto', () => { 

        render(<AddCategory onNewCategory={ () => {} }/>);
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: 'One piece' } } );

        expect( input.value ).toBe('One piece');
      
    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => { 

        const inputValue = 'One piece';
        const onNewCategory = jest.fn(); //Es una simulación de la función
        

        render(<AddCategory onNewCategory={ onNewCategory } />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( input.value ).toBe('');
        expect( onNewCategory ).toHaveBeenCalled();       
        expect( onNewCategory ).toHaveBeenCalledTimes(1);     
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );     

    });

    test('no debe de llamar onNewCategory si el input esta vació', () => { 

        const onNewCategory = jest.fn(); //Es una simulación de la función
        render(<AddCategory onNewCategory={ onNewCategory } />);

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategory ).not.toHaveBeenCalled();     
        expect( onNewCategory ).toHaveBeenCalledTimes(0);     

    });


});