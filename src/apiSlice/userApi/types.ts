export type UserAccountType = {
    email: string,
    password: string,
}
export type responseType = {
    msg: string,
    token: string,
}

export type SingUpDataType = {
    name: string,
    email: string,
    password: string,
}

export type getUserByToken = {
    token: string,
}

export type userData = {
    name: string,
    email: string,
    nickname: string,
    gender: string,
    birthday: string,
    country: string,
    url_name: string,
    facebook_url: string,
    picture_url: string,
    allow_notifications: true,
    instagram_url: string,
    youtube_url: string,
    website_url: string,
    self_introduction: string
}