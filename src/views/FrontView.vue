<template>
  <div class="container">
    <div class="row">
      <div class="col" style="display: flex; justify-content: center">
        <div>
          <h1>你現在在前台頁面</h1>
        </div>
      </div>
      <nav
        class="navbar navbar-expand-lg"
        style="
          display: flex;
          justify-content: center;
          width: 100%; /* 根據需要調整 */
        "
      >
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/about">About</RouterLink>|
        <RouterLink to="/products">前台產品列表</RouterLink> |
        <RouterLink to="/cart">購物車</RouterLink>|
        <RouterLink to="/login">登入</RouterLink>|
        <RouterLink @click="dashboardClick" to="/admin">後台</RouterLink>|
      </nav>
    </div>
  </div>

  <RouterView></RouterView>
</template>

<script></script>

<script></script>
