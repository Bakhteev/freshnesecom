let price = 20;
let discount = 36;

export const itemContent = [
    {   
        discount: 36 ,
        img:'',
        title:'Product Title',
        description:'Space for a small product description ',
        price: 20 - (20 / 100 * 36),
        prevPrice: 20,
    },
    {
        discount: 0,
        img: '',
        title: 'Product Title',
        description: 'Space for a small product description ',
        price: 20 - (20 / 100 * 0),
        prevPrice: 20,
    },
    {
        discount: 36,
        img: '',
        title: 'Product Title',
        description: 'Space for a small product description ',
        price: 20 - (20 / 100 * 36),
        prevPrice: 20,
    },
]


