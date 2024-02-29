import { ChangeEvent, FormEvent, useState } from 'react';

interface IProps {
    onNewCategory: (newCategory: string) => void;
}

export const AddCategory = ({ onNewCategory }:IProps) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) =>{//Desestructurado de event \ para obtener el valor del input
        setInputValue(target.value);
    }

    const onSubmit = ( event: FormEvent ) => { // evento del formulario para llamar algo por que aqui tenemos toda la info
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return; // prevent empty categories
        
        // setCategories( categories => [ inputValue, ...categories ]);
        setInputValue('');
        onNewCategory( inputValue.trim() );
    }

  return (
    <>
        <form onSubmit={ onSubmit }> // Se le pasa el evento al metodo
            <input  // Se utiliza la funcion de react para manejar los cambios en el input
                type="text" 
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={ onInputChange }
            />
        </form>    
    </>
  )
}
