export interface Product {
    name: string;
    price: number;
}

export const arrayOfProducts: Product[] = [
    {
        name: 'Shirt', 
        price: 19, 
    },
    {
        name: 'Hat',
        price: 5,
    },
    {
        name: 'Kazoo',
        price: 300,
    }
];
export function calcAverageProductPrice(productsArray: Product[]): any {
    let averageArray: Product = {
        name: '',
        price: 0
    } 
    let sum = 0;
    productsArray.forEach((product) => {
        if (this.price > 0) { 
            sum += product.price;
            return sum/this.averageArray.length;
        } else {
            return 0;
        }
    }) 
}
    
