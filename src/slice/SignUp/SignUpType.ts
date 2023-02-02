export type SignUpType = {
    params: {
        name: string,
        email: string,
        password: string,  
    },
    verifyPassword: string,
    setErrorMsg: string,
}