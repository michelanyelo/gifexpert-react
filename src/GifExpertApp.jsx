import {useState} from "react";
import {AddCategory} from "./components/AddCategory.jsx";
import {GifGrid} from "./components/GifGrid.jsx";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['one piece anime'])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <div style={{display: 'flex', gap: 10}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 35" className="sc-1f039a7e-2 bMXkCi"
                     style={{width: 28}}>
                    <g fillRule="evenodd" clipRule="evenodd">
                        <path fill="#00ff99" d="M0 3h4v29H0z"></path>
                        <path fill="#9933ff" d="M24 11h4v21h-4z"></path>
                        <path fill="#00ccff" d="M0 31h28v4H0z"></path>
                        <path fill="#fff35c" d="M0 0h16v4H0z"></path>
                        <path fill="#ff6666" d="M24 8V4h-4V0h-4v12h12V8"></path>
                        <path className="shadow" d="M24 16v-4h4M16 0v4h-4"></path>
                    </g>
                </svg>
                <h1 style={{textTransform: 'uppercase'}}>Giphly</h1>
            </div>

            <AddCategory
                onNewCategory={value => onAddCategory(value)}
            />

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}