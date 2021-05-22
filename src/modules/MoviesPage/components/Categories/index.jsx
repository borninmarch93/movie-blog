import Grid from "../../../../components/Grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

const Categories = ({ onSelect }) => {
    const [categories, setCategories] = useState([]);
    const [selected, setSelected] = useState(0);

    useEffect(async () => {
        const response = await getCategories();
        setCategories(response);
    }, []);

    const getCategories = async () => {
        const categoryResponse = await axios.get('https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1/categories');
        return categoryResponse.data;
    }

    const clickCategoryHandler = (id) => {
        onSelect(id);
        setSelected(id);
    }

    const getCategoryClass = (id) => {
        return classNames(
            'category',
            selected === id && 'active'
        )
    }



    return (
        <div className="categories">
            <Grid row className="categories__items">
                <ul>
                    <Link onClick={() => clickCategoryHandler(0)}><li className={getCategoryClass(0)}>ALL</li></Link>
                    {categories.map(category => {
                        return <Link key={category.id} onClick={() => clickCategoryHandler(category.id)}>
                            <li className={getCategoryClass(category.id)} key={category.id}>{category.name}</li>
                        </Link>
                    })}
                </ul>
            </Grid>
        </div>
    )
}

export default Categories;