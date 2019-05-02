import decode from "jwt-decode";

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
  return _fetch("/user/login", {
    method: "POST",
    body: JSON.stringify({
      user: {
        email,
        password
      }
    })
  })
    .then(res => {
      setToken(res.user.token); // Setting the token in localStorage
      return Promise.resolve(res);
    })
    .catch(res => {
      return Promise.reject(res);
    });
}

async function signup(name, email, password) {
  return _fetch("/user/signup", {
    method: "POST",
    body: JSON.stringify({
      user: {
        name,
        email,
        password
      }
    }),
    headers: { "Content-Type": "application/json" }
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

// function getUserObject() {
//   return
// }

async function _fetch(url, options) {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };

  if (loggedIn()) {
    headers["Authorization"] = getToken();
  }

  return fetch(url, {
    headers,
    ...options
  })
    .then(_checkStatus)
    .then(response => response.json());
}

function _checkStatus(response) {
  // raises an error in case response status is not a success
  if (response.status >= 200 && response.status < 300) {
    // Success status lies between 200 to 300
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export default AuthService;
