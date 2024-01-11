const loginBtn = document.querySelector("#loginBtn");
const url = "https://ec-course-api.hexschool.io/v2";
const path = "potoro";
const productAPI = `${url}/api/${path}/products/all`;
const adminLoginAPI = `${url}/admin/signin`;
loginBtn.addEventListener("click", () => {
  const userValue = document.querySelector("#username");
  const passwordValue = document.querySelector("#password");
  const user = {
    username: userValue.value,
    password: passwordValue.value,
  };
  axios
    .post(adminLoginAPI, user)
    .then((res) => {
      const { token, expired } = res.data;
      document.cookie = `hexVueToken=${token}; expires=${new Date(expired)}`;
      axios.defaults.headers.common["Authorization"] = token;
      alert("恭喜你成功登入了");
      window.location.href = "index.html";
    })
    .catch((err) => {
      alert("登入失敗!");
    });
});
