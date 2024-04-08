const TOKEN = "token";

const isLocalStorage = () => {
    return localStorage.getItem(TOKEN)
}

const storeToken = (token, setRememberMe) => {
   if (setRememberMe) {
    localStorage.setItem(TOKEN, JSON.stringify(token));
   } else {
    sessionStorage.setItem(TOKEN, JSON.stringify(token));
   };
};

const getToken = () => {
    let token = isLocalStorage();
    if (token) {
        return token
    } else {
       return sessionStorage.getItem(TOKEN);
    }
};

export { storeToken, getToken };