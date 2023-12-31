import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;
        // categories.push(newCategory);
        setCategories([...categories, newCategory]);

        // setCategories(cat => [cat, categoria]);

    }

    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={onAddCategory}

            />
            {categories.map(category => (
                <GifGrid key={category} category={category} />
            ))
            }
        </>
    )
}
