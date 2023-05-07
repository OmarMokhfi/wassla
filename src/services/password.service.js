import bcrypt from "bcrypt";

export const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10).then(function (hash) {
      resolve(hash);
    });
  });
};

export const comparePassword = (password, hashed) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hashed).then(function (result) {
      resolve(result);
    });
  });
};
