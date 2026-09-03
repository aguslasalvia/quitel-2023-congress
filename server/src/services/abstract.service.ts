import { Abstract } from "../models/abstract.model";
import { uploadFile } from "./google-drive.service";

export const createAbstract = (data: any) => {
  const newAbstract = new Abstract(data);
  return newAbstract.save();
};

export const uploadAbstractFiles = async (files: any) => {
  // Check existing files, if exists, save it on Google Drive
  if (files?.registration != null) {
    await uploadFile(
      files.registration,
      process.env.REGISTRATION_FOLDER_ID as string,
    );
    console.log("registration file uploaded");
  }
  if (files?.dinner != null) {
    await uploadFile(files.dinner, process.env.DINNER_FOLDER_ID as string);
    console.log("dinner file uploaded");
  }
  if (files?.accompanying != null) {
    await uploadFile(
      files.accompanying,
      process.env.ACCOMPANYING_FOLDER_ID as string,
    );
    console.log("accompaning file uploaded");
  }
};
