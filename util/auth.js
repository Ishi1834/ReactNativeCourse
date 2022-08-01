import axios from "axios";

const API_KEY = "AIzaSyAWnnoEwnFgQSe0dyEQnjvO1GS7s7Ng_SE";

async function authenticate(mode, email, password) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
  return response;
}

export async function createUser(email, password) {
  const response = await authenticate("signUp", email, password);
  return response;
}

export async function loginUser(email, password) {
  const response = await authenticate("signInWithPassword", email, password);
  return response;
}
