import React from 'react'

import './ProductsSidebas.css'
import config from '../../config.json'

import useData from '../../hooks/useData.js'
import LinkWithIcon from '../Navbar/LinkWithIcon'

const ProductsSidebar = () => {

    // data: categories => serve para criar uma alias/rename do objecto data

    const {data: categories, error} = useData("/category")
    return (
    <aside className="products_sidebar">
        <h2>Category</h2>
        <div className="category_link">
            {error && <em className="form_error">{error}</em>}
            {categories && categories.map(category =>
                <LinkWithIcon
                    key={category._id}
                    id={category._id}
                    title={category.name}
                    link={`/products?category=${category.name}`} 
                    emoji={`${config.backendURL}/category/${category.image}`}
                    sidebar={true}/>)}
        </div>
    </aside>
    )
}

export default ProductsSidebar