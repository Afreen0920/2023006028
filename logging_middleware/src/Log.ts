import axios from "axios";
import { ACCESS_TOKEN } from "./auth";

export async function Log(
  stack: string,
  level: string,
  pkg: string,
  message: string
) {
  try {
    const response = await axios.post(
      "http://20.244.56.144/evaluation-service/logs",
      {
        stack,
        level,
        package: pkg,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Logging failed:", error);
  }
}