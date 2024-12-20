import * as Yup from 'yup';

interface IformData {
    name: string, 
    email: string,
    description: string
}

const contactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  description: Yup.string()
    .min(10, 'Description must be at least 10 characters')
    .required('Description is required'),
});

export const validateForm = async (formData: IformData) => {
  try {
    await contactFormSchema.validate(formData, { abortEarly: false });
    return null; // No errors
  } catch (error: any) {
    return error.inner.reduce((acc: any, curr: any) => {
      acc[curr.path] = curr.message;
      return acc;
    }, {});
  }
};
