import {useState} from "react";
import {AddCategory} from "./components/AddCategory.jsx";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['disney', 'naruto'])

    const onAddCategory = () => {
        const newCategory = 'One Piece'
        setCategories([...categories, newCategory])
    }

    return (<>
        {/*titulo*/}
        <h1>Gifly</h1>

        {/*busqueda*/}
        <AddCategory/>

        <button onClick={onAddCategory}>Agregar a la lista</button>

        {/*listado de gif*/}
        <ol>
            {categories.map(category => (
                <li key={category}>
                    {category}
                </li>
            ))}
        </ol>

        {/*gif item*/}
    </>)
}