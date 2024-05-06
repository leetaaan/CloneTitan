import { language } from "../enum/EnumApi";

const initialState = {
  currentLanguage: language.english,
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      return {
        ...state,
        currentLanguage: action.payload,
      };
    default:
      return state;
  }
};

export default languageReducer;
