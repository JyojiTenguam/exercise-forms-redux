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
  return state;
};

export default rootReducer;