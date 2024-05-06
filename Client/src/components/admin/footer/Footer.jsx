import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getItemById, updateFooter } from "../../../api/ItemApi";
import Swal from "sweetalert2";
import InputBox from "../input/Input";
import SideBar from "../sideBar/SideBar";
import { Box } from "@mui/material";
import { splitIcon } from "../../../common/functions";
import "../../../pages/admin/dashBoard/DashBoard.css"
import { SwalEnum, inputLength, linkSocial } from "../../../enum/EnumApi";
import { toast, Toaster } from "react-hot-toast";
import './Footer.css'
const AdFooter = () => {
  const initialState = {
    id: "",
    title: "",
    japaneseTitle : "",
    address: "",
    telNumber: "",
    description: "",
    japaneseDescription: "",
    infoGmail: "",
    infoGmail2: "",
    subItems: [
      {
        facebook: "",
        twitter: "",
        linkedin: "",
        youtube: "",
      },
    ],
  };
  let { id } = useParams();
  const [footer, setFooter] = useState(initialState);
  const navigate = useNavigate();

  useEffect(() => {
    getItemById(id).then((data) => {
      if (data) {
        setFooter(data);
      } else setFooter([]);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let form = new FormData(e.target);
    let formData = {};
    for (let [key, value] of form.entries()) {
      formData[key] = value;
    }

    let {
      title,
      japaneseTitle,
      address,
      telNumber,
      infoGmail,
      infoGmail2,
      description,
      japaneseDescription,
      facebook,
      twitter,
      linkedin,
      youtube,
    } = formData;

    updateFooter(formData).then((data) => {
      if (title && japaneseTitle) {
        if (title.length > inputLength.maxLength100.limit) {
          return toast.error(inputLength.maxLength100.text);
        }
        if (japaneseTitle.length > inputLength.maxLength100.limit) {
          return toast.error(inputLength.maxLength100.text);
        }
      }

      if (footer.address) {
        if (!address.length || address.length > inputLength.maxLength200.limit) {
          return toast.error(inputLength.maxLength200.text);
        }
        if (!telNumber.length || telNumber.length > inputLength.maxLength20.limit) {
          return toast.error(inputLength.maxLength20.text);
        }
      }

      if (footer.infoGmail) {
        if (!infoGmail.length || infoGmail.length > inputLength.maxLength50.limit) {
          return toast.error(inputLength.maxLength50.text);
        }
        if (!infoGmail2.length || infoGmail2.length > inputLength.maxLength50.limit) {
          return toast.error(inputLength.maxLength50.text);
        }
      }

      if (footer.subItems.length) {
        if (!facebook.length) {
          return toast.error(inputLength.textFacebook);
        }
        if (!twitter.length) {
          return toast.error(inputLength.textTwitter);
        }
        if (!linkedin.length) {
          return toast.error(inputLength.textLinkedin);
        }
        if (!youtube.length) {
          return toast.error(inputLength.textYoutube);
        }
      }

      if (footer.description) {
        if (!description.length) {
          return toast.error(inputLength.textCopyright);
        }
        if (!japaneseDescription.length) {
          return toast.error(inputLength.textCopyright);
        }
      }

      setFooter(footer);
      Swal.fire({
        title: SwalEnum.titleSuccess,
        icon: SwalEnum.iconSuccess,
      });

      navigate("/admin");
    });
  };

  const handleBack = () => {
    navigate("/admin");
  };
  return (
    <>
      <Box sx={{ padding: 10, display: "flex" }}>
        <SideBar name={`Change "${footer.title}"`} />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Toaster />
          <form
            method="post"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
            className="footer-edit-form"
          >
            <input
              hidden
              name="Id"
              title="Id"
              value={footer.id}
              onChange={(e) => setFooter({ ...footer, id: e.target.value })}
            />
            {footer.title !== "Copyright" ? (
              <>
                <h2>English Title</h2>
                <InputBox
                  type="text"
                  name="title"
                  placeholer="English Title"
                  value={footer.title}
                  onChange={(e) =>
                    setFooter({ ...footer, title: e.target.value })
                  }
                />
                <h2>Japanese Title</h2>
                <InputBox
                  type="text"
                  name="title"
                  placeholer="Japanese Title"
                  value={footer.japaneseTitle}
                  onChange={(e) =>
                    setFooter({ ...footer, japaneseTitle: e.target.value })
                  }
                />
              </>
            ) : (
              ""
            )}
            {footer.address ? (
              <div>
                <h3>Address</h3>
                <InputBox
                  name="address"
                  icon="solid fa-location-dot"
                  placeholer="Address"
                  value={footer.address}
                  onChange={(e) =>
                    setFooter({ ...footer, address: e.target.value })
                  }
                />
                <h3>Tele Number</h3>
                <InputBox
                  type="tel"
                  name="telNumber"
                  icon="solid fa-phone"
                  placeholer="Tele Number"
                  value={footer.telNumber}
                  onChange={(e) =>
                    setFooter({ ...footer, telNumber: e.target.value })
                  }
                />
              </div>
            ) : footer.description ? (
              <>
              <h3>Copyright English</h3>
                <InputBox
                  name="Description"
                  value={footer.description}
                  onChange={(e) =>
                    setFooter({ ...footer, description: e.target.value })
                  }
                />
              <h3>Copyright Japanese</h3>
                <InputBox
                  name="JapaneseDescription"
                  value={footer.japaneseDescription}
                  onChange={(e) =>
                    setFooter({ ...footer, japaneseDescription: e.target.value })
                  }
                />
              </>
            ) : footer.infoGmail ? (
              <>
              <h3>Info</h3>
                <InputBox
                  name="infoGmail"
                  icon="solid fa-envelope"
                  value={footer.infoGmail}
                  onChange={(e) =>
                    setFooter({ ...footer, infoGmail: e.target.value })
                  }
                />
                <InputBox
                  name="infoGmail2"
                  icon={
                    footer.infoGmail2 === linkSocial.skype
                      ? "brands fa-skype"
                      : "solid fa-envelope"
                  }
                  value={footer.infoGmail2}
                  onChange={(e) =>
                    setFooter({ ...footer, infoGmail2: e.target.value })
                  }
                />
              </>
            ) : footer.subItems ? (
              footer.subItems.map((subItem) => (
                <>
              <h3>Social Media</h3>
                  <InputBox
                    name="facebook"
                    icon={
                      subItem.facebook
                        ? `brands fa-${splitIcon(subItem.facebook)}`
                        : ""
                    }
                    value={subItem.facebook || ""}
                    onChange={(e) =>
                      setFooter({ ...footer, facebook: e.target.value })
                    }
                  />
                  <InputBox
                    name="twitter"
                    icon={
                      subItem.twitter
                        ? `brands fa-${splitIcon(subItem.twitter)}`
                        : ""
                    }
                    value={subItem.twitter || ""}
                    onChange={(e) =>
                      setFooter({ ...footer, twitter: e.target.value })
                    }
                  />
                  <InputBox
                    name="linkedin"
                    icon={
                      subItem.linkedin
                        ? `brands fa-${splitIcon(subItem.linkedin)}`
                        : ""
                    }
                    value={subItem.linkedin || ""}
                    onChange={(e) =>
                      setFooter({ ...footer, linkedin: e.target.value })
                    }
                  />
                  <InputBox
                    name="youtube"
                    icon={
                      subItem.youtube
                        ? `brands fa-${splitIcon(subItem.youtube)}`
                        : ""
                    }
                    value={subItem.youtube || ""}
                    onChange={(e) =>
                      setFooter({ ...footer, youtube: e.target.value })
                    }
                  />
                </>
              ))
            ) : null}
          <div className="cms-back-update">
            <button onClick={handleBack} className="cms-back-btn">
              Cancel
            </button>
            <button type="submit" className="cms-update-btn">
              Update
            </button>
          </div>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default AdFooter;
