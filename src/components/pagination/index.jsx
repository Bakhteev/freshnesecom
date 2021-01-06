import React, {useState} from 'react'


const Pagination = ({store}) => {
    const [active, setActive] = useState(0)
    return (
        <div className="catalog__padination pagination flex padding45">
            <ul className="pagination__list flex">
                <span className="pagination__span">Page:</span>
                <li className="pagination__item">1</li>
                <li className="pagination__item">2</li>
                <li className="pagination__item">3</li>
                <li className="pagination__item">4</li>
            </ul>
            <button className="pagination__btn">Show more products</button>
            <div>
                <span className="pagination__number">{store.items.length}</span>
                <span className="pagination__span pagination__span--right">Products</span>
            </div>
        </div>
    )
}

export default Pagination
