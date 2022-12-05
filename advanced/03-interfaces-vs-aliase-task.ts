// Create two variants: aliases and interfaces

// Product: price, isNew, isSale, title
// Vehicle: wheels, year, brand
// Car: Type, model + Product, Vehicle

type Product = {
    price: number;
    isNew: boolean;
    isSale: boolean;
    title: string;
}

type Vehicle = {
    wheels: number;
    year: number;
    brand: string;
}


type Car = {
    model: string;
    type: string;
} & Product & Vehicle;

// ------------------------------------------

interface IProduct {
    price: number;
    isNew: boolean;
    isSale: boolean;
    title: string;
}

interface IVehicle {
    wheels: number;
    year: number;
    brand: string;
}

interface ICar extends IProduct, IVehicle {
    model: string;
    type: string | number;
}