import React from 'react'

const Pagination = ({ store, setShowMore, showMore }) => {
  const [active, setActive] = React.useState(0)
  const HandleClick = () => {
    setShowMore(showMore + 9)
  }
  const AddActive = (index) => {
    setActive(index)
  }
  const HandlePage = (index) => {
    setShowMore(store.items.slice([9], [18]))
    AddActive(index)
    console.log(store.items.slice([9], [18]))
  }
  const pagesNUmber = [1, 2, 3, 4]
  return (
    <div className="catalog__padination pagination flex padding45">
      <ul className="pagination__list flex">
        <span className="pagination__span">Page:</span>
        {pagesNUmber.map((item, index) => {
          return (
            <li
              onClick={() => HandlePage(index)}
              className={`pagination__item ${active === index ? 'active' : ''}`}
            >
              {item}
            </li>
          )
        })}
      </ul>
      <button
        disabled={store.items.length <= showMore}
        onClick={() => HandleClick()}
        className={`pagination__btn ${
          store.items.length <= showMore ? 'disabled' : ''
        }`}
      >
        Show more products
      </button>
      <div>
        <span className="pagination__number">{store.items.length}</span>
        <span className="pagination__span pagination__span--right">
          Products
        </span>
      </div>
    </div>
  )
}

export default Pagination
