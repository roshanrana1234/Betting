const LocalServer = process.env.REACT_APP_BACKEND;
const OnlineServer = process.env.REACT_APP_SERVER_BACKEND;

export const signin = (user) => {
  return fetch(`${LocalServer}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const signout = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    next();
    return fetch(`${LocalServer}/signout`, {
      method: "GET",
    })
      .then((response) => {
        response.json();
      })
      .catch((err) => console.log(err));
  }
};

export const register = (user) => {
  return fetch(`${LocalServer}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// To remain signed in even browser automatically remove user details
export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

// check whether user is signed in or not
export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  }
};
