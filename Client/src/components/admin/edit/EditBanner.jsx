import { useState, useEffect, useRef, useCallback } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import "./Edit.css";
import {
  getItemById,
  editBanner,
  uploadToCloudinary,
  uploadImageEditor,
} from "../../../api/ItemApi";
import Swal from "sweetalert2";
import { btnValue, numberLength, allowedExtensions, saveSuccess, errorEdit } from "../../../enum/EnumApi";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import JoditReact from "jodit-react";

const EditBanner = ({ id, setRows, setIsPopupVisible, currentLanguage }) => {
  const initialState = {
      id: numberLength.zero,
      boldTitle: "",
      title: "",
      urlSlug: "",
      description: "",
      imageUrl: "",
      Locale: "",
    },
    [banner, setBanner] = useState(initialState);
  const imageRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const data = require("../../../imgURL.json");
  const editImageFrame = data.editImageFrame;
  const { t: translate } = useTranslation();

  const editor = useRef("");

  useEffect(() => {
    if (id === 0) {
      resetState();
    }
    if (id > 0) {
      getItem();
      async function getItem() {
        const data = await getItemById(id);
        if (data === null) {
          resetState();
        } else setBanner(data);
      }
    }
  }, [id]);

  const resetState = () => {
    setBanner(initialState);
    setPreviewUrl(null);
  };

  const handleClose = () => {
    setIsPopupVisible(false);
  };

  //Onclick submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    formData.set("Description", editor.current.value || banner.description);
    editBanner(formData).then((data) => {
      if (data) {
        Swal.fire({
          title: saveSuccess.title,
          icon: saveSuccess.icon,
        });
        setRows(banner);
        setIsPopupVisible(false);
      } else {
        Swal.fire({
          title: errorEdit.title,
          icon: errorEdit.icon,
        });
      }
    });
  };

  const handleImageChange = useCallback(
    (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = async () => {
        if (reader.result) {
          const filename = reader.result;
          const formData = new FormData();
          formData.append("file", filename);
          formData.append(
            "upload_preset",
            process.env.REACT_APP_CLOUDINARY_PRESET
          );
          const url = await uploadToCloudinary(formData);
          setBanner({ ...banner, imageUrl: url });
          setPreviewUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    },
    [initialState]
  );

  const editorConfig = {
    readonly: false,
    toolbar: true,
    spellcheck: false,
    language: "en",
    toolbarButtonSize: "medium",
    toolbarAdaptive: false,
    showCharsCounter: false,
    showWordsCounter: false,
    showXPathInStatusbar: false,
    askBeforePasteHTML: true,
    askBeforePasteFromWord: true,
    width: 800,
    height: 500,
    defaultActionOnPaste: "insert_clear_html",
    placeholder: "Write something awesome...",
    beautyHTML: true,
    controls: {
      image: {
        exec: async (editor) => {
          await imageUpload(editor);
        },
      },
    },
  };
  const imageUpload = async (editor) => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async function () {
      const imageFile = input.files[0];

      if (!imageFile) {
        return;
      }
      console.log(allowedExtensions);
      if (!imageFile.name.match(new RegExp(`\.(${allowedExtensions.join('|')})$$`))) {
        return;
      }

      const imageInfo = await uploadImageEditor(imageFile);

      insertImage(editor, imageInfo);
    };
  };

  const insertImage = (editor, image) => {
    const imgNode = editor.create.fromHTML(
      `<img src="${image.secure_url}" alt="${image.original_filename}" />`
    );
    editor.selection.insertNode(imgNode);
  };

  return (
    <>
      <Box sx={{ padding: 5 }}>
        <div className="btn-cancel">
          <i onClick={handleClose} className="fa-solid fa-xmark"></i>
        </div>
        <form
          method="post"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <div className="edit-form">
            <input
              hidden
              name="Id"
              title="Id"
              value={banner.id}
              onChange={(e) => setBanner({ ...banner, id: e.target.value })}
            ></input>
            <input
              hidden
              name="Locale"
              title="Locale"
              value={currentLanguage}
              onChange={(e) => setBanner({ ...banner, Locale: e.target.value })}
            ></input>
            <div className="gallery">
              <label htmlFor="uploadGallery">
                <img
                  src={previewUrl || banner.imageUrl || editImageFrame}
                  className="img-glalery z-20"
                />
                <input
                  id="uploadGallery"
                  type="file"
                  name="BackgroundImage"
                  title="BackgroundImage"
                  ref={imageRef}
                  onChange={handleImageChange}
                  accept=".png, .jpg, .jpeg"
                  className="setGallery"
                  hidden
                />
              </label>
            </div>
            <div className="bold-title">
              <p className="text-title">Bold Title</p>
              <input
                placeholder={translate("editAdmin.BoldTitle")}
                className="input-title"
                type="text"
                name="BoldTitle"
                title="BoldTitle"
                value={banner.boldTitle || ""}
                onChange={(e) => setBanner({ ...banner, boldTitle: e.target.value })}
              />
            </div>
            <div className="title">
              <p className="text-title">Title</p>
              <input
                placeholder={translate("editAdmin.Title")}
                className="input-title"
                type="text"
                name="Title"
                title="Title"
                value={banner.title || ""}
                onChange={(e) => setBanner({ ...banner, title: e.target.value })}
              />
            </div>
            <div className="title">
              <p className="text-title">Slug</p>
              <input
                placeholder={translate("editAdmin.Slug")}
                className="input-title"
                type="text"
                name="UrlSlug"
                title="UrlSlug"
                value={banner.urlSlug || ""}
                onChange={(e) => setBanner({ ...banner, urlSlug: e.target.value })}
              />
            </div>
            <div className="desc-edit">
              <p className="text-desc">Description</p>
              <JoditReact
                ref={editor}
                name="Description"
                type="text"
                value={banner.description}
                config={editorConfig}
              />
            </div>
          </div>

          <div className="btn-apply">
            <Button
              variant={btnValue.variant}
              size={btnValue.sizeM}
              color={btnValue.colorSuccess}
              endIcon={<AddIcon />}
              type={btnValue.typeSubmit}
            >
              {id === 0 ? "Add" : "Save"}
            </Button>
          </div>
        </form>
      </Box>
    </>
  );
};

export default EditBanner;