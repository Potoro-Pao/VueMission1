<template>
  <h1>這是前台</h1>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/about">About</RouterLink>|
    <RouterLink to="/products">產品</RouterLink> |
    <RouterLink to="/cart">購物車</RouterLink>|
    <RouterLink to="/login">登入</RouterLink>|
    <RouterLink to="/admin">後台</RouterLink>|
  </nav>

  <RouterView></RouterView>
</template>
