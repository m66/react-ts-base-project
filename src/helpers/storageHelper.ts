export const getLoginStatus = (): boolean => {
  const userData = getUserFromToken();

  if (userData === null) return false;

  const expTime = userData.exp * 1000;
  const isValid = expTime > new Date().getTime();


  if (!isValid) localStorage.removeItem("x-access-token");

  return isValid;
}

export const getUserFromToken = () => {
  const token = localStorage.getItem("x-access-token");

  if (!token) return null;

  const [, userBase64 = ""] = token.split(".");

  try {
    return JSON.parse(atob(userBase64));
  } catch(e) {
    return null
  }
}