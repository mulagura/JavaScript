function randomPassword(pwdLength) {
  let password = '';
  const passwordSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890`~!@#$%^&*()_-+=,.<>?/;:[{]}\|";
  for(let i = 0; i < pwdLength; i++) {
    const randomSetIndex = Math.floor(Math.random() * passwordSet.length);
    // console.log(randomSetIndex)
    password = password + passwordSet[randomSetIndex];
  }
  return password;
}

console.log(randomPassword(5));
