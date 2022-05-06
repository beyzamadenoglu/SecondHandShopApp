import * as yup from 'yup';

const FORMATS = ['image/png','image/jpg','image/jpeg'];

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

    file: yup
    .mixed()
    .nullable()
    .required('Resim alanı zorunludur.')
    .test('FILE_SIZE', 'Dosya boyutu maksimum 400kB değerinde olmalıdır.',
        (value) => !value || (value && value.size <= 400 * 400)
    )
    .test('FILE_FORMAT', 'Dosya türü desteklenmemektedir. Desteklenen dosya türleri: png, jpg, jpeg',
        (value) => !value || (value && FORMATS.includes(value?.type))
    ),


});