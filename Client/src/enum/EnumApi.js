import CottageIcon from "@mui/icons-material/Cottage";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import FeedIcon from "@mui/icons-material/Feed";
import FeedbackIcon from "@mui/icons-material/Feedback";
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import TableRowsIcon from '@mui/icons-material/TableRows';

export const queryDefault = {
  sectionSlug: "",
  pageSizeDefault: 10,
  pageSizeDefaultNewsBlogs: 3,
  pageNumberDefault: 1,
  sortOrderASC: "ASC",
  sortOrderDESC: "DESC",
};

export const slugName = {
  logo: "navbar",
  banner: "banner",
  innovations: "innovations",
  footer: "footer",
  news: "news",
  blogs: "blogs",
  navbar: "navbar",
  section: "section",
};

export const language = {
  english: "en",
  japanese: "ja",
};

export const delaySlide = {
  delay3s: 3000,
  delay5s: 5000,
};

export const numberLength = {
  zero: 0,
  small: 1,
  medium: 5,
  large: 3,
  huge: 15,
  max: 100,
};

export const sectionName = {
  Service: "Services",
  Domain: "Domains",
  Client: "Clients",
  Customer: "Customers",
  Recognized: "As Recognized By",
  New: "News",
  Blog: "Blogs",
  Model: "Models",
  LastestJobs: "Careers",
};

export const allowedExtensions = ['.jpg', '.jpeg', '.png'];

export const allowedSectionsName = ['Domains', "Clients"]

export const sidebarLinks = [
  { path: "/admin", title: "Home Page", icon: <CottageIcon /> },
  { path: "/admin/logo", title: "Logo", icon: <CropSquareIcon /> },
  { path: "/admin/banner", title: "Banner", icon: <ViewCarouselIcon /> },
  { path: "/admin/section", title: "Section", icon: <TableRowsIcon /> },
  { path: "/admin/news", title: "News", icon: <NewspaperIcon /> },
  { path: "/admin/blogs", title: "Blogs", icon: <FeedIcon /> },
  { path: "/admin/request", title: "Requests", icon: <FeedbackIcon /> },
];

export const titleLinks = {
  Services: {
    link: "/services/",
  },
  Domains: {
    link: "/domains/",
  },
  Innovations: {
    link: "/innovations/",
  },
  Models: {
    link: "/services/models/",
  },
  Clients: {
    link: "/customers/",
  },
  "As Recognized By": {
    link: "",
  },
  Careers: {
    link: "/careers/",
  },
  Customers: {
    link: "/customers/#testimonials",
  },
  News: {
    link: "/news/",
  },
  Blogs: {
    link: "/blogs/",
  },
  contactUs: "/contact-us/",
};

export const sliderNumber = {
  oneSlideNumber: 1,
  defaultSlideNumber: 3,
  ourClientSlideNumber: 4,
  recognizedSlideNumber: 5,
};

export const sliderResponsive = {
  DefaultBreakpoints: {
    0: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    980: {
      slidesPerView: 3,
    },
  },
  DomainBreakpoints: {
    0: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    980: {
      slidesPerView: 3,
    },
  },
  ClientsBreakpoints: {
    0: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    980: {
      slidesPerView: 4,
    },
  },
  RecognizedBreakpoints: {
    0: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    980: {
      slidesPerView: 5,
    },
  },
  OneItemBreakpoints: {
    0: {
      slidesPerView: 1,
    },
  },
  ThreeItemBreakpoints: {
    0: {
      slidesPerView: 3,

    },
  },
};

export const boxSliderClassNameConfig = {
  Services: {
    boxBody: "box-home-body-service",
  },
  Models: {
    boxBody: "box-home-body-model",
  },
  Domains: {
    boxBody: "box-home-body-domain",
    boxdesc: "hidden",
    titleStyle: "domain-title",
  },
  Clients: {
    boxBody: "box-home-body-outclient",
    boxContainer: "container-outclient",
    boxdesc: "hidden",
    titleStyle: "outclient-title",
  },
  "As Recognized By": {
    boxBody: "home-recognized-box",
    boxContainer: "container-recognized",
    titleStyle: "recognized-title",
    boxdesc: "hidden",
  },
  Customers: {
    boxBody: "box-body-customer",
  },
  News: {
    boxBody: "box-body-news-blog",
  },
  Blogs: {
    boxBody: "box-body-news-blog",
  },
};

export const error = {
  tooShort: "Too short",
};

export const formData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export const btnValue = {
  variant: "outlined",
  sizeM: "medium",
  colorErr: "error",
  colorSuccess: "success",
  typeSubmit: "submit",
  colorAdd: "primary",
};

export const deleteForm = {
  title: "Do you want to delete?",
  text: "This cannot reverse!",
  icon: "error",
  confirmBtnColor: "#3085d6",
  cancelBtnColor: "#d33",
  confirmBtnDelete: "DELETE",
  resultTitle: "DELETED",
  resultIcon: "success",
};

export const changeForm = {
  title: "Do you want to change?",
  text: "This will be changed!",
  icon: "success",
  confirmBtnColor: "#3085d6",
  cancelBtnColor: "#d33",
  confirmBtnDelete: "Save",
  resultTitle: "Success",
  resultIcon: "success",
};

export const saveSuccess = {
  title: "Save Success",
  icon: "success",
};

export const errorEdit = {
  title: "Error Edit",
  icon: "error",
};

export const styleDrawer = {
  drawerWidth: 240,
  color: "inherit",
  ariaLabel: "open drawer",
  edge: "start",

  styleDrawerHeader: {
    minHeight: 48,
    ml: "auto",
    justifyContent: "center",
    gap: 18,
  },
  styleListItem: {
    display: "block",
  },
  dNone: "none",
  dBlock: "block",
  styleListItemButton: {
    minHeight: 48,
    px: 2.5,
  },
};

export const widthTable = {
  ss: 100,
  xs: 150,
  s: 200,
  m: 300,
  l: 400,
  xl: 500,
  xxl: 800
};

export const linkSocial = {
  twitter: "https://twitter.com/titancorpvn",
  skype: "titancorpvn"
}

export const SwalEnum = {
  titleSuccess: "Save Success",
  iconSuccess: "success",
  titleError: "Error",
  iconError: "error",
  alertErrorImg: "Can't post the image of desciption",
  alertErrorGet: "Can't get the request",
  alertErrorPost: "Can't post the request",
  alertErrorDelete: "Can't delete",
  alertErrorPut: "Can't put the request",
}

export const inputLength = {
  maxLength20: {
    limit: 20,
    text: "Tel number has text limit 20 characters"
 },
  maxLength50: {
    limit: 50,
    text: "Each item has text limit 50 characters"
 },
  maxLength100: {
    limit: 100,
    text: "Title has text limit 100 characters"
 },
  maxLength200: {
    limit: 200,
    text: "Address has text limit 200 characters"
 },
 textFacebook: "Hyperlink Facebook can't be emty",
 textTwitter: "Hyperlink Twitter can't be emty",
 textLinkedin: "Hyperlink Linkedin can't be emty",
 textYoutube: "Hyperlink Youtube can't be emty",
 textCopyright: "Copyright can't be emty",
}