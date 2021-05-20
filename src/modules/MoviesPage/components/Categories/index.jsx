import Grid from "../../../../components/Grid";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(async () => {
        const response = await getCategories();
        setCategories(response);
    }, []);

    const getCategories = async () => {
        const categoryResponse = await axios.get('https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1/categories');
        return categoryResponse.data;
    }

    return (
        <div className="categories">
            <Grid row className="categories__items">
                <ul>
                    {categories.map(category => {
                        return <a><li className="category" key={category.id}>{category.name}</li></a>
                    })}
                </ul>
            </Grid>
        </div>
    )
}

export default Categories;