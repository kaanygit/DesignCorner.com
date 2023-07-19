
export interface ProductData{
    "_id":string;
    "key":number;
    "name":string;
    "imageUrl":string;
    "price":number;
    "discountRate":number;
    "productInformation":string;
    "__v":number;
}

export interface ProductContextData{
    products:ProductData[];
}
