import { get_api } from "./method";

export function getItemByCategory(categorySlug = "", pageSize = 11, pageNumber = 1, sortOrder = "ASC") {
    let url = new URL(process.env.REACT_APP_API_URL + `/items`);
    categorySlug !== '' && url.searchParams.append('CategorySlug', categorySlug);
    sortOrder !== '' && url.searchParams.append('SortOrder', sortOrder);
    url.searchParams.append('PageSize', pageSize);
    url.searchParams.append('PageNumber', pageNumber);
    return get_api(url.href);
}
