import {useState} from "react";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['disney', 'naruto'])

    return (<>
        {/*titulo*/}
        <h1>Gifly</h1>

        {/*busqueda*/}

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