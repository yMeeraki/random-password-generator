const generatePasswordBtn = document.getElementById("generate-password-btn");
generatePasswordBtn.addEventListener("click", function () {
  const password = document.getElementsByClassName("password");
  const chars =
    "0123456789abchefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let password1 = "";
  let password2 = "";

  for (let i = 0; i <= 12; i++) {
    const randomNumber1 = Math.floor(Math.random() * chars.length);
    password1 += chars[randomNumber1];

    const randomNumber2 = Math.floor(Math.random() * chars.length);
    password2 += chars[randomNumber2];
  }
  password[0].textContent = password1;
  password[1].textContent = password2;
});
