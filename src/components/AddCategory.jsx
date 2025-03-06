import {useState} from "react";

export const AddCategory = () => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue)
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar..."
                onChange={onInputChange}
            />
        </form>
    )
}