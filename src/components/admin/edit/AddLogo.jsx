import React, { useState, useRef, useCallback } from "react";
import { Button, Box } from "@mui/material";
import { postImage, uploadToCloudinary } from "../../../api/ItemApi";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import data from "../../../imgURL.json";
import { saveSuccess } from "../../../enum/EnumApi"

import "./AddLogo.css";

const AddLogo = ({ setIsPopupVisible }) => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const imageRef = useRef(null);
  const { editImageFrame } = data;

  const handleClose = () => {
    setIsPopupVisible(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("ImageFile", imageRef.current.files[0]);
    formData.append("IsLogo", "true");

    try {
      const data = await postImage(formData);

      if (data) {
        setIsPopupVisible(false);
        await Swal.fire({
          title: saveSuccess.title,
          icon: saveSuccess.icon,
        });
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      } else {
        await Swal.fire({
          title: "Error Edit Logo",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "An error occurred while saving.",
        icon: "error",
      });
    }
  };

  const handleImageChange = useCallback(async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);

    try {
      const url = await uploadToCloudinary(formData);
      setPreviewUrl(URL.createObjectURL(file));
    } catch (error) {
      alert("Error uploading image:", error);
    }
  }, []);

  return (
    <Box className="add-Logo">
      <div className="btn-cancel" onClick={handleClose}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <h1>Add Logo</h1>
      <form method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
        <div className="edit-form">
          <div className="gallery">
            <label htmlFor="uploadGallery" className="gallery-label">
              <img
                src={previewUrl || editImageFrame}
                alt="Gallery"
                className="img-gallery"
              />
              <input
                id="uploadGallery"
                type="file"
                name="ImageFile"
                ref={imageRef}
                onChange={handleImageChange}
                accept=".png, .jpg, .jpeg"
                hidden
              />
            </label>
          </div>
        </div>
        <div className="btn">
          <Button
            variant="contained"
            size="medium"
            color="success"
            type="submit"
          >
            Add
          </Button>
        </div>
      </form>
    </Box>
  );
};

export default AddLogo;
