export interface ICategory {
    id: number;
    name: string;
    description: string;
    image: string;
    products: number[]; // Array of product IDs associated with this category
}
