import axios from "axios";
// @ts-ignore
import { endpoints } from "../../../config/endpoints.ts";
const API_URL = process.env.REACT_APP_API_URL;
console.log("url from services: ", API_URL);

interface codeBreaker {
  secreto: string;
  intento: string;
}

export const playCodeBreaker = async (codeBreaker: codeBreaker) => {
  try {
    return await axios.post(
      `${API_URL}${endpoints.game.codeBreaker}`,
      {
        secreto: codeBreaker.secreto,
        intento: codeBreaker.intento,
      }
    );
  } catch (err) {
    console.log(err);
  }
};

