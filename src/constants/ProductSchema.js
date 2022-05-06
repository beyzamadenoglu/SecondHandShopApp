import * as yup from 'yup';

const SUPPORTED_FORMATS = ['image/png','image/jpg','image/jpeg'];

export const YupSchema = yup.object().shape({
    file: yup
    .mixed('Resim kullan')
    .required('Resim alanı zorunludur.')
    .test('FILE_SIZE', 'Dosya boyutu maksimum 400kB değerinde olmalıdır.',
        (value) => !value || (value && value.size <= 400 * 400)
    )
    .test('FILE_FORMAT', 'Dosya türü desteklenmemektedir. Desteklenen dosya türleri: png, jpg, jpeg',
        (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
    ),

});