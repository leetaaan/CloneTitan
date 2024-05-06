import axios from "axios";
import { SwalEnum } from "../enum/EnumApi";

export async function get_api(your_api) {
  try {
    const response = await axios.get(your_api);
    const data = response.data;
    if (data.isSuccess) return data.result;
    else return null;
  } catch (error) {
    alert(SwalEnum.alertErrorGet, error.message);
  }
}

export async function delete_api(your_api) {
  try {
    const response = await axios.delete(your_api);
    const data = response.data;
    if (data.isSuccess) return data.result;
    else return null;
  } catch (error) {
    alert(SwalEnum.alertErrorDelete, error.message);
  }
}

export async function post_api(your_api, formData){
  try {
    const response = await axios({
      method: "post",
      url: your_api,
      data: formData,
      headers: {
        accept: "multipart/form-data",
        "Content-Type": "multipart/form-data",
      },
    });
    const data = response.data;
    if (data.isSuccess) {
      return data.result;
    } else return null;
  } catch (error) {
  }
}

/**
 * Performs a PUT request to a specific API.
 *
 * @param {string} your_api - The URL of the API you want to send a PUT request to.
 * @returns {Promise<any|null>} - The result from the API if successful, null if there's an error.
 */
export async function put_api(your_api) {
  try {
    const response = await axios({
      method: "put",
      url: your_api,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const data = response.data;
    if (data.isSuccess) {
      return data.result;
    } else {
      return null;
    }
  } catch (error) {
    alert(SwalEnum.alertErrorPut, error.message);
    return null;
  }
}

export async function upload_image(your_api, file){
  let result = null;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);

await fetch(your_api, {
  method: "POST",
  body: formData,
})
  .then((response) => response.json())
  .then((data) => {
    result = data;
  })
  .catch((error) => {
    alert.error(SwalEnum.alertErrorImg, error);
  });

  return result;
};