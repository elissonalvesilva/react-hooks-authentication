async function authLogin() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: {
          name: 'Elisson',
          emaul: 'nossilesiva@gmail.com',
        },
        token: '49d309hQn4LUcVoMP1BEYmnxQsJ3Xl5AZKBKEdYDk9y9uHMdMA',
      });
    }, 1000);
  });
}

export default authLogin;