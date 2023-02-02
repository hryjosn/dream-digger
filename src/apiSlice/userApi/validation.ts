import { object, string } from 'yup'

export const loginSchema = object({
    email: string().email('email格式錯誤！').required('請輸入信箱！'),
    password: string().required('請輸入密碼！')
})

export const valueSchema = object({
    name: string().
        required('請填入完整資料'),
    email: string().
        required('請填入完整資料').
        email('email格式錯誤'),
    password: string().
        required('請填入完整資料').
        min(8).
        max(16),
})
