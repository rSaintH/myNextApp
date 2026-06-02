
interface ProductsProps {
    id:number;
    title:string;
    description:string;
    price:number;
    discountPercentage?:number;
    rating:number;
    stock:number;
}

interface ResponseProps {
    products: ProductsProps[]
}


export default async function Products() {
    const response = await fetch('https://dummyjson.com/products');
    const data: ResponseProps = await response.json()



    return(
        <h1>vazio</h1>
    )
}