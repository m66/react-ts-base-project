export const getAllProductsGQL = `
    query GetAllProducts($isAll: Boolean) {
        getProducts(isAll: $isAll) {
            data {
                id
                name
            }
            count
        }
    }
`;
