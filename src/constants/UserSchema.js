import * as yup from 'yup';

const SUPPORTED_FORMATS = ['image/png','image/jpg','image/jpeg'];

export const YupSchema = yup.object().shape({
    email: yup
        .string()
        .email('Lütfen Geçerli bir e-posta adresi giriniz')
        .required('E-posta alanı zorunludur.'),
  
    password: yup
        .string()
        .typeError('Geçerli Karakterleri kullanın.')
        .min(8, 'Şifre en az 8 karakter uzunluğunda olmalıdır.')
        .max(20, 'Şifre uzunluğu 20 karakterden fazla olmamalıdır.')
        .required('Şifre alanı zorunludur.'),

});