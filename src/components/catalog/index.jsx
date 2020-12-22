import React from 'react'
import CatalogHeader from '../catalogHeader'
import CatalogSidebar from '../catalogSidebar'
// import ProductCardList from '../catalogProducts/productCardList'
// import {catalogArr} from './const'
// import ProductCardGrid from '../catalogProducts/productCardGrid'
import Pagination from '../pagination'
import { useDispatch, useSelector, connect } from 'react-redux';
import axios from 'axios'
import setProducts from '../../redux/actions/product'
import CatalogRroductCard from '../catalogProducts/catalogRroductCard'


const Catalog = () => {
    const store = useSelector(({ product, filters }) => {
        return {
            items: product.items,
        };
    });
    const dispatch = useDispatch()
    React.useEffect(() => {
        axios.get(`http://localhost:3000/database.json`).then(({ data }) => { dispatch(setProducts(data.products)) })
    }, [])

    console.log(store.items)
    return (
        <section className="catalog">
            <div className="container">
                <CatalogHeader />
                <div className="catalog__row row">
                    <div className="col-3">
                        <CatalogSidebar />
                    </div>
                    <div className="col-9 catalog__item row">
                        {store.items && store.items.map((item, index) => (index < 9 ? <CatalogRroductCard {...item} /> : ''))}
                    </div>
                </div>
                <Pagination />
            </div>
        </section>
    )
}

export default connect()(Catalog)
