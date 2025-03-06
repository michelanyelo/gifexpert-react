import {useState} from "react";

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const inputValueFormatted = inputValue.trim();
        if (inputValueFormatted.length <= 1) return;
        onNewCategory(inputValueFormatted);
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar..."
                onChange={onInputChange}
                value={inputValue}
            />
        </form>
    )
}