import { BusinessModel } from '../models/business.model';

export const getBusiness = async (): Promise<any> => {
  try {
    const business = await BusinessModel.find().exec();
    console.log(business);
    return business;
  } catch (error) {
    console.error('Failed to get business:', error);
    throw error;
  }
}

export const addBusiness = async (businessId: Number, businessName: String, businessAddress: String, businessServices: String): Promise<string> => {
  await BusinessModel.insertMany({ id: businessId, name: businessName, address: businessAddress, services: businessServices });
  return 'Data Received!';
};


export const updateBusiness = async (businessId: Number, businessName: String, businessAddress: String, businessServices: String): Promise<string> => {
  await BusinessModel.updateOne({ id: businessId }, { name: businessName, address: businessAddress, services: businessServices });
  return 'Data Updated!';
};
