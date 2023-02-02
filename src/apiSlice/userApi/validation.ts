import * as Yup from 'yup';

export const valueSchema = Yup.object({
    name: Yup.string().
        required('請填入完整資料'),
    email: Yup.string().
        required('請填入完整資料').
        email('email格式錯誤'),
    password: Yup.string().
        required('請填入完整資料').
        min(8).
        max(16),
})
