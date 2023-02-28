import s from './category-list.module.scss'
import {CategoryCard} from "@/entities/category";


const CategoryList = () => {
    return (
        <>
            <h1 className={s.title}>Онлайн тестирование</h1>
            <div className={s.list}>
                <CategoryCard category="AB" image="/src/assets/images/category/B.png" count={"0 / 730"}/>
                <CategoryCard category="C" image="/src/assets/images/category/C.png" count={"0 / 90"}/>
                <CategoryCard category="D" image="/src/assets/images/category/D.png" count={"0 / 60"}/>
            </div>
        </>
    )
}

export default CategoryList