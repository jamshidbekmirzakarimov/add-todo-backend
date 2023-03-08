const elRegisterForm = document.querySelector("js-register-form");
const elRegisterUsername = elRegisterForm.querySelector("js-register-username");
const elRegisterEmail = elRegisterForm.querySelector("js-register-email");
const elRegisterTel = elRegisterForm.querySelector("js-register-tel");
const elRegisterPass = elRegisterForm.querySelector("js-register-password");

const API_PATH = "";
const registerPost = async () => {
  const usernameInputValue = elRegisterUsername.value.trim();
  const emailInputValue = elRegisterEmail.value.trim();
  const telInputValue = elRegisterTel.value.trim();
  const passwordInputValue = elRegisterPass.value.trim();

  try {
    const res = await fetch(API_PATH + "users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        user_name: usernameInputValue,
        email: emailInputValue,
        phone: telInputValue,
        password: passwordInputValue,
      }),
    });
    const data = await res.json();

    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
elRegisterForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  registerPost();
});
