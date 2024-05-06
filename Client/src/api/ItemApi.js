import { delete_api, get_api, post_api, upload_image, put_api } from "./method";
import { convertObjToQueryString, queryString } from "../common/functions";

/**
 * Retrieves items based on the provided category payload.
 *
 * @param {Object} payload The payload containing parameters for the request.
 * @return {Promise} A promise resolving to the response from the API.
 */
export function getItemByCategory(payload) {
  return get_api(process.env.REACT_APP_API_ITEM_URL + `?${convertObjToQueryString(payload)}`);
}

/**
 * Retrieves all sections for a given language.
 *
 * @param {string} language The language for which to retrieve sections.
 * @return {Promise} A promise resolving to the response from the API.
 */
export function getAllSection(payload) {
  return get_api(process.env.REACT_APP_API_SECTION_URL + `?${convertObjToQueryString(payload)}`);
}

/**
 * Retrieves a request form for a given language.
 *
 * @param {string} language The language for which to retrieve the request form.
 * @return {Promise} A promise resolving to the response from the API.
 */
export function getRequestForm(payload) {
  return get_api(process.env.REACT_APP_API_REQUEST_URL + `?${convertObjToQueryString(payload)}`);
}

/**
 * Posts a request form using the provided form data.
 *
 * @param {FormData} formData The form data containing the request details.
 * @return {Promise} A promise resolving to the response from the API.
 */
export function postRequestForm(formData){
  return post_api(process.env.REACT_APP_API_POST_REQUEST_URL, formData)
}

/**
 * Retrieves the footer content for a given language.
 *
 * @param {string} language The language for which to retrieve the footer content.
 * @return {Promise} A promise resolving to the response from the API.
 */
export function getFooter(payload) {
    return get_api(process.env.REACT_APP_API_FOOTER_URL + `?${convertObjToQueryString(payload)}`);
}

/**
 * Retrieves items based on the section slug, page size, and page number.
 *
 * @param {Object} payload The payload containing parameters for the request.
 * @return {Promise} A promise resolving to the response from the API.
 */
export function getItemBySectionSlug(payload) {
  return get_api(process.env.REACT_APP_API_PAGED_ITEM_URL + `?${convertObjToQueryString(payload)}`);
}

/**
 * Retrieves items based on the section slug, urlSlug.
 *
 * @param {Object} payload The payload containing parameters for the request.
 * @return {Promise} A promise resolving to the response from the API.
 */
export function getItemByDetailItem(payload) {
  return get_api(process.env.REACT_APP_API_DETAIL_ITEM_URL + `${queryString(payload)}`);
}

/**
 * Retrieves an item by its ID.
 *
 * @param {string} id The ID of the item to retrieve.
 * @return {Promise} A promise resolving to the response from the API.
 */
export function getItemById(id) {
  return get_api(process.env.REACT_APP_API_ITEM_ID_URL + `${id}`);
}

/**
 * Retrieves an item by its Slug.
 *
 * @param {string} slug The Slug of the item to retrieve.
 * @return {Promise} A promise resolving to the response from the API.
 */
export function getItemBySlug(payload) {
  return get_api(process.env.REACT_APP_API_ITEM_SLUG + `?${convertObjToQueryString(payload)}`);
}

/**
 * Deletes an item by its ID.
 *
 * @param {string} id The ID of the item to delete.
 * @return {Promise} A promise resolving to the response from the API.
 */
export function deleteItemById(id) {
  return delete_api(process.env.REACT_APP_API_ITEM_URL + `${id}`);
}

/**
 * Calls the API to delete a contact by its ID.
 *
 * @param {string} id The ID of the contact to be deleted.
 * @return {Promise} A promise resolving to the response from the API.
 */
export function deleteContactById(id) {
  return delete_api(process.env.REACT_APP_API_POST_REQUEST_URL + `/${id}`);
}

/**
 * Creates or updates news using the provided form data.
 *
 * @param {FormData} formData The form data containing the news details.
 * @return {Promise} A promise resolving to the response from the API.
 */
export function editNews(formData){
  return post_api(process.env.REACT_APP_API_CREATE_NEWS_URL, formData)
}

/**
 * Creates or updates a blog using the provided form data.
 *
 * @param {FormData} formData The form data containing the blog details.
 * @return {Promise} A promise resolving to the response from the API.
 */
export function editBlog(formData){
  return post_api(process.env.REACT_APP_API_CREATE_BLOG_URL, formData)
}

/**
 * Calls the API to retrieve contacts based on the provided payload.
 *
 * @param {Object} payload The payload containing parameters for the request.
 * @return {Promise} A promise resolving to the response from the API.
 */
export function getContact(payload){
  return get_api(process.env.REACT_APP_API_POST_REQUEST_URL + `?${convertObjToQueryString(payload)}`)
}

/**
 * Uploads a file to Cloudinary using the provided form data.
 *
 * @param {FormData} formData The form data containing the file to upload.
 * @return {Promise} A promise resolving to the response from Cloudinary.
 */
export function uploadToCloudinary(formData){
    return post_api(process.env.REACT_APP_CLOUDINARY_NAME, formData)
};

/**
 * Uploads an image file to Cloudinary.
 *
 * @param {File} file The image file to upload.
 * @return {Promise} A promise resolving to the response from Cloudinary.
 */
export function uploadImageEditor(file){
  return upload_image(process.env.REACT_APP_CLOUDINARY_NAME, file)
};

/**
 * Fetches the logo from the specified API.
 *
 * @returns {Promise<any|null>} - The logo data if successful, null if there's an error.
 */
export function getLogo(){
  return get_api(process.env.REACT_APP_API_GET_LOGO)
}

/**
 * Posts an image to the specified API.
 *
 * @param {FormData} formData - The form data containing the image to post.
 * @returns {Promise<any|null>} - The result from the API if successful, null if there's an error.
 */
export function postImage(formData){
  return post_api(process.env.REACT_APP_API_POST_IMAGE, formData)
};


/**
 * Deletes an image with the specified ID from the API.
 *
 * @param {string} id - The ID of the image to delete.
 * @returns {Promise<any|null>} - The result from the API if successful, null if there's an error.
 */
export function deleteImage(id) {
  return delete_api(process.env.REACT_APP_API_POST_IMAGE + `/${id}`);
}

/**
 * Changes the logo with the specified ID.
 *
 * @param {string} id - The ID of the logo to change.
 * @returns {Promise<any|null>} - The result from the API if successful, null if there's an error.
 */
export function changeLogo(id) {
  return put_api(process.env.REACT_APP_API_CHANGE_LOGO + `${id}`);
}

/**
 * Create or Edit banner data by sending a POST request to the specified API URL.
 *
 * @param {Object} formData - The data to be sent for editing the banner.
 * @returns {Promise} - A Promise that resolves to the response data from the API.
 */
export function editBanner(formData){
  return post_api(process.env.REACT_APP_API_CREATE_BANNER_URL, formData)
}

/**
 * Create or Edit section data by sending a POST request to the specified API URL.
 *
 * @param {Object} formData - The data to be sent for editing the section.
 * @returns {Promise} - A Promise that resolves to the response data from the API.
 */
export function editSection(formData){
  return post_api(process.env.REACT_APP_API_CREATE_SECTION_URL, formData)
}

/**
 * Deletes an section by its ID.
 *
 * @param {string} id The ID of the section to delete.
 * @return {Promise} A promise resolving to the response from the API.
 */
export function deleteSectionById(id) {
  return delete_api(process.env.REACT_APP_API_SECTION_URL + `/${id}`);
}

/**
 * Retrieves an section by its ID.
 *
 * @param {string} id The ID of the section to retrieve.
 * @return {Promise} A promise resolving to the response from the API.
 */
export function getSectionById(id) {
  return get_api(process.env.REACT_APP_API_SECTION_ID+ `${id}`);
}

/**
 * Changes status button true or false to display or hide on HomePage
 */
export function changeBtnStatus(){
  return put_api(process.env.REACT_APP_API_CHANGE_BUTTONSTATUS)
}

/**
 * Update Footer by formData
 */
export function updateFooter(formData){
  return post_api(process.env.REACT_APP_API_CHANGE_FOOTER, formData)
}

/**
 * Update Footer by formData
 */
export function editSectionItems(formData){
  return post_api(process.env.REACT_APP_API_CHANGE_SECTION_ITEMS, formData)
}