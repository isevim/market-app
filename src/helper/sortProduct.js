import SORTING_DATA from "../common/Enum";

export default function sortProduct(
    productData,
    sortingFilter
) {

    if (sortingFilter === SORTING_DATA.INCREASE) {
        const sortedProduct = productData
            .sort((a, b) => a.price - b.price);
        return sortedProduct;

    } else if (sortingFilter === SORTING_DATA.DECREASE) {
        const sortedProduct = productData
            .sort((a, b) => a.price - b.price)
            .reverse();
        return sortedProduct;

    } else if (sortingFilter === SORTING_DATA.ASC) {
        const sortedProduct = productData
            .sort((a, b) => a.added - b.added);
        return sortedProduct;

    } else if (sortingFilter === SORTING_DATA.DESC) {
        const sortedProduct = productData
            .sort((a, b) => a.added - b.added)
            .reverse();
        return sortedProduct;
    }
}