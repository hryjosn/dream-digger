import axios from "axios";
import { post } from './restApi';
const request = axios.create({
    baseURL: process.env.API_URL,
});

const API_URL = process.env.API_URL;

export const callSignUp = 