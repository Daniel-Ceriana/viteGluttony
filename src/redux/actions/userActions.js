import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";

//const api_url = "http://localhost:4000/api/auth";
const api_url = "https://gluttony-backend.vercel.app/";


const signIn = createAsyncThunk("signIn", async (parametro) => {
  const { userData, aux } = parametro;
  // mostrar mensaje del back
  try {
    const user = await axios.post(`${api_url}/signin`, { userData: userData });
    console.log(user);
    if (user.data.success) {
      localStorage.setItem("token", user.data.response.token);
      console.log(user.data.response.dataUser, aux);
      return { user: user.data.response.dataUser, cart: aux };
    }
  } catch (error) {
    console.log(error);
    return {
      payload: [],
    };
  }
});
const signUp = createAsyncThunk("signUp", async (user) => {
  // mostrar mensaje del back
  const userData = {
    fullName: user.fullName,
    email: user.email,
    password: user.password,
    from: user.from,
    aplication: "Gluttony",
  };
  try {
    const res = await axios.post(`${api_url}/signup`, {
      userData,
    });
    console.log(res.data.message);
  } catch (error) {
    console.log(error);
  }
});

const signOut = createAction("signOut", async () => {
  // mostrar mensaje del back
  // await axios.post(`${api_url}/signout`);
  localStorage.removeItem("token");
  return [];
});

const verifyToken = createAsyncThunk("verifyToken", async (token) => {
  // mostrar mensaje del back

  try {
    const users = await axios.get(`${api_url}/verifyToken`, {
      headers: { Authorization: "Bearer " + token },
    });
    if (users.data.success) {
      return users.data.response;
    } else {
      localStorage.removeItem("token");
    }
  } catch (error) {
    // agregar mensaje tipo toast

    if (error.response.status === 401) {
      localStorage.removeItem("token");
    }
  }
});
export { signIn, signUp, signOut, verifyToken };
