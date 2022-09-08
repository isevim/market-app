export default function filterAndGetProducts(
    products,
    itemTypeFilter,
    brandFilter,
    tagFilter
) {
    let filteredProductList = [];
    let filteredProductList2 = [];

    let copyOfProductData = null

    if (itemTypeFilter) {
        copyOfProductData = products.filter(element => element.itemType === itemTypeFilter)
    } else {
        copyOfProductData = JSON.parse(JSON.stringify(products))
    }

    if (brandFilter.length > 0) {
        copyOfProductData.filter((element) => {
            brandFilter?.find((brand) => {
                if (element.manufacturer === brand) {
                    filteredProductList.push(element);
                }
            });
        });
    }

    if (tagFilter.length > 0) {
        if (filteredProductList.length > 0) {
            filteredProductList.filter((element) => {
                tagFilter?.find((tag) => {
                    const selectedItem = element.tags.find(itemTag => itemTag === tag)
                    if (selectedItem) {
                        filteredProductList2.push(element);
                    }
                });
            });
            return filteredProductList2;
        } else {
            copyOfProductData.filter((element) => {
                tagFilter?.find((tag) => {
                    const selectedItem = element.tags.find(itemTag => itemTag === tag)
                    if (selectedItem) {
                        filteredProductList2.push(element);
                    }
                });
            });
            return filteredProductList2;
        }
    }
    if (tagFilter.length === 0 && brandFilter.length === 0) {
        return copyOfProductData;
    }
    return filteredProductList;
}