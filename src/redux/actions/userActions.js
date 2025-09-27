import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";

//const api_url = "http://localhost:4000/api/auth";
const api_url = "https://gluttony-backend.vercel.app/api/auth";


const signIn = createAsyncThunk(
  "signIn",
  async (parametro, { rejectWithValue }) => {
    const { userData, aux } = parametro;
    try {
      const user = await axios.post(`${api_url}/signin`, { userData });
      if (user.data.success) {
        localStorage.setItem("token", user.data.response.token);
        return { user: user.data.response.dataUser, cart: aux };
      } else {
        console.log(user.data.message);
        return rejectWithValue(user.data.message);
      }
    } catch (error) {
      return rejectWithValue(error.response.data || "Error al iniciar sesión");
    }
  }
);
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

const signOut = createAction("signOut", () => {
  localStorage.removeItem("token");
  return { payload: undefined }; // o null si preferís
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

