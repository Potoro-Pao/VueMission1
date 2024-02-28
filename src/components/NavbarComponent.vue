<template>
<div class="container-fluid d-flex flex-column" style="z-index: 1">
      <nav
        class="navbar navbar-expand-lg"
        style="background-color: #504152; padding: 0.5rem 1rem"
      >
        <router-link
          class="navbar-brand p-2"
          style="color: #f4f4f4; font-size: 24px"
          to="/"
          >Bookstore</router-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item me-4">
              <router-link
                class="nav-link active"
                style="color: #eae0d5; font-size: 18px"
                to="/"
                >Home</router-link
              >
            </li>
            <li class="nav-item me-4">
              <router-link
                class="nav-link"
                style="color: #eae0d5; font-size: 18px"
                to="/products"
                >Products</router-link
              >
            </li>
            <li class="nav-item me-4">
              <router-link
                class="nav-link"
                style="color: #eae0d5; font-size: 18px"
                to="/about"
                >About</router-link
              >
            </li>
          </ul>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="px-5" to="/cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#EAE0D5"
                  class="bi bi-cart-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1
   .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5
    8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607
    1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7
     0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7
     0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
                  ></path>
                </svg>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
      <!-- Content Container
      <div class="py-4">
        <router-view></router-view>
      </div> -->
    </div>
</template>
