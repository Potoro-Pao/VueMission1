function getCookie(name) {
  const cookies = document.cookie.split("; "); // 将所有的 cookie 分割成数组
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("="); // 将每个 cookie 分割成名称和值
    if (cookie[0] === name) {
      return cookie[1]; // 如果找到了对应名称的 cookie，返回它的值
    }
  }
  return ""; // 如果没有找到，返回空字符串
}

const token = getCookie("hexVueToken");
if (!token) {
  window.location.href = "login.html"; // 没有 token，重定向到登录页面
}
