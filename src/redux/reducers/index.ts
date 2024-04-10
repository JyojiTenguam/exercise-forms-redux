import { AnyAction } from "redux";

const INITIAL_STATE = {
  personalData: {
    name: '',
    email: '',
    cpf: '',
    address: '',
    city: '',
    uf: '',
  },
  professionalData: {
    resume: '',
    role: '',
    description: '',
  },
};

const rootReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case 'UPDATE_PERSONAL_DATA':
      return {
        ...state,
        personalData: action.payload,
      };
    case 'UPDATE_PROFESSIONAL_DATA':
      return {
        ...state,
        professionalData: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;