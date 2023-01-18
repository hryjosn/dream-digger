export type SignUpType<T> = {
    params: {
        name: T,
        email: T,
        password: T,  
    },
    verifyPassword: T,
    setErrorMsg: T,
}