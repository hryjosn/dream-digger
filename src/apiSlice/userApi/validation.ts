import { object, string } from 'yup'

export const loginSchema = object({
    email: string().email('email格式錯誤！').required('請輸入信箱！'),
    password: string().required('請輸入密碼！')
})