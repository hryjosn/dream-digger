import axios from 'axios';
import Router from 'next/router';

const API_URL = process.env.API_URL;

export const formPost = async (url: string, data: object, debug = false, timeout = 6000) => {
    const token = localStorage.getItem('token');
    return axios({
        method: 'POST',
        baseURL: API_URL,
        url: url,
        data: data, // post Data
        timeout: timeout, // timeout
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `${token}`,
        },
    })
        .then(response => {
            // const hasToken = !!response.headers.authorization;
            // if (hasToken && process.browser) {
            //     // console.log('have token')
            //     // console.log(response.headers.authorization)
            //     refreshToken(response.headers.authorization);
            // }
            if (response && debug) {
                console.log(`------------------res:${url}------------------`);
                console.log(response.data);
            }
            if (response.status !== 200) {
                alert(response.data.msg);
            }
            return response;
        })
        .catch(e => {
            catchError(e);
            throw e;
        });
};
export const post = async (url: string, data: object, debug = false, timeout = 6000) => {
    const token = localStorage.getItem('token');
    return axios({
        method: 'POST',
        baseURL: API_URL,
        url: url,
        data: data, // post Data
        timeout: timeout, // timeout
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            Accept: 'application/json;',
            'Access-Control-Allow-Origin': '*',
            Authorization: `${token}`,
        },
    })
        .then(response => {
            // const hasToken = !!response.headers.authorization;
            // if (hasToken && process.browser) {
            //     // console.log('have token')
            //     // console.log(response.headers.authorization)
            //     refreshToken(response.headers.authorization);
            // }
            if (response && debug) {
                console.log(`------------------res:${url}------------------`);
                console.log(response.data);
            }
            if (response.status !== 200) {
                alert(response.data.msg);
            }
            return response;
        })
        .catch(e => {
            catchError(e);

            throw e;
        });
};
export const get = async (endPoint: string, params: object, debug = false, timeout = 6000) => {
    const token = localStorage.getItem('token');

    return axios
        .get(API_URL + endPoint, {
            params,
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                Accept: 'application/json;',
                Authorization: `${token}`,
            },
        })
        .then(response => {
            if (response && debug) {
                console.log(
                    `------------------res:${endPoint}------------------`,
                );
                console.log(response.data);
            }
            if (response.status !== 200) {
                return response;
            }
            return response.data;
        })
        .catch(e => {
            catchError(e);
            throw e;
        });
};
const catchError = (e: any) => {
    if (e?.response?.status === 401) {
        const localStorageKeys = Object.keys(localStorage);
        if (localStorageKeys.length > 0) {
            localStorage.clear();
        }
        Router.push('/');
    }
};
export const put = async (url: string, data: object, debug = false, timeout = 6000) => {
    const token = localStorage.getItem('token');

    return axios({
        method: 'PUT',
        baseURL: API_URL,
        url: url,
        data: data, // put Data
        timeout: timeout, // timeout
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            Accept: 'application/json;',
            Authorization: `${token}`,
        },
    })
        .then(response => {
            if (response && debug) {
                console.log(`------------------res:${url}------------------`);
            }
            if (response.status !== 200) {
                return response;
            }
            return response;
        })
        .catch(e => {
            catchError(e);
            throw e;
        });
};