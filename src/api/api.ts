import { formPost, get, put, post } from './restAPI';
import axios from 'axios';
import { UserAccountType } from './types';

const request = axios.create({
    baseURL: process.env.API_URL,
});

const API_URL = process.env.API_URL;

export const callLoginService = async (postData: UserAccountType) => post('/login', postData);