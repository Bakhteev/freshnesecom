// import axios from 'axios'

// export const fetchProducts = (sortBy, rating) => (dispatch) => {
//   axios
//     .get(
//       `/pizzas?${rating !== null ? `category=${rating}` : ''}&_sort=${sortBy.type}&_order=${
//         sortBy.order
//       }`,
//     )
//     .then(({ data }) => {
//       dispatch(fetchProducts(data));
//     });
// };