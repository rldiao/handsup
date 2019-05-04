import decode from "jwt-decode";
import Axios from "axios";

const AuthService = {
  login,
  signup,
  loggedIn,
  isTokenExpired,
  setToken,
  getToken,
  logout,
  getProfile
};

async function login(email, password) {
  return Axios.post("/user/login", {
    user: {
      email,
      password
    }
  })
    .then(res => {
      setToken(res.data.user.token); // Setting the token in localStorage
      return Promise.resolve(res);
    })
    .catch(res => {
      return Promise.reject(res);
    });
}

async function signup(name, email, password) {
  return Axios.post("/user/signup", {
    user: {
      name,
      email,
      password
    }
  })
    .then(res => {
      return Promise.resolve(res);
    })
    .catch(res => {
      return Promise.reject(res);
    });
}

function loggedIn() {
  const token = getToken();
  return !!token && !isTokenExpired(token);
}

function isTokenExpired(token) {
  try {
    const { exp } = decode(token);
    if (exp < Date.now() / 1000) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
}

function setToken(idToken) {
  localStorage.setItem("id_token", idToken);
}

function getToken() {
  return localStorage.getItem("id_token");
}

function logout() {
  localStorage.removeItem("id_token");
}

function getProfile() {
  return decode(getToken());
}

export default AuthService;
