import jwt from "jsonwebtoken";

export const generateToken = (data) => {
  return new Promise((resolve, reject) => {
    let token = jwt.sign(data, process.env.NEXTAUTH_SECRET);
    resolve(token);
  });
};

export const decodeToken = (token) => {
  return new Promise((resolve, reject) => {
    let decoded = jwt.verify(token, process.env.NEXTAUTH_SECRET);
    resolve(decoded);
  });
};
