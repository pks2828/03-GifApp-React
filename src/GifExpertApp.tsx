import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";



export const GifExpertApp: React.FC = () => {

    const [ categories, setCategories] = useState([ 'Dragon ball' ]);

    const onAddCategory = ( newCategory:string ):void => { 

        if (categories.includes(newCategory) ) return;//Si existe no hacer nada


        // console.log( newCategory  )
        setCategories([ newCategory, ...categories ]);//Si no existe insertar
        // setCategories( cat => [ ...cat, 'Valorant' ] )
    }


    return (
        <>
            {/* Titulo*/}
            <h1>GifExpertApp</h1>

            {/* Input*/}
            <AddCategory 
                onNewCategory = { (value) => onAddCategory(value) }
            />

            {
                categories.map( (category) => (
                    <GifGrid 
                        key={category}
                        category={category}/>
                ))            
            }

        </>
    )
}
