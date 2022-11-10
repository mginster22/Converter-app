import axios from "axios";
import { CONSTANTS } from "../constants";
const { BASE_URL } = CONSTANTS;


const currencyApi = axios.create({
  baseURL: BASE_URL,
});
export const getAllCurrencies = () => currencyApi.get("");
