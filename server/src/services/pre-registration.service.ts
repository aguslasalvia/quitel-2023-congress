import { preRegister } from "../models/pre-registration.model";

export const findPreRegistrationByEmail = (email: string) => {
  return preRegister.findOne({ email });
};

export const createPreRegistration = (data: any) => {
  const newPreRegistration = new preRegister(data);
  return newPreRegistration.save();
};
