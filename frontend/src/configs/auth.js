// eslint-disable-next-line import/no-anonymous-default-export
export default {
  meEndpoint: "/user/me",
  loginEndpoint: "/user/login",
  registerEndpoint: "/user/register",
  storageTokenKeyName: "FYP-accesstoken",
  onTokenExpiration: "refreshToken", // logout | refreshToken
};
