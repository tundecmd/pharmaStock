export interface Products {
    $key: string;
    name: string;
    category: string;
    modeOfDispensation: string;
    productionDate: string;
    expirationDate: string;
    sku: number;
    quantity: number;
    manufacturer: string;
    description: string;
    dosage: string;
}

export interface ProductsCategory{
    $key: string;
    name: string;
}
