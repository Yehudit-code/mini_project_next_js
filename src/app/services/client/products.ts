export const fetchProducts = async () => {
    const response = await fetch('/api/products');
    if (!response.ok) {
        throw new Error('Failed to fetch products from SERVICE');
    }
    return response.json();
};
