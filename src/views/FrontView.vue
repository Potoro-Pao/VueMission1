<template>
  <div class="position-relative" style="min-height: 100vh">
    <div
      class="position-fixed"
      style="
        opacity: 0.1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
        background-size: cover;
        background-position: center;
        z-index: -1;
      "
    ></div>
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
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1
   .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5
    8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607
    1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7
     0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7
     0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"></path>
                </svg>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
      <!-- Content Container -->
      <div class="py-4">
        <router-view></router-view>
      </div>
    </div>
  </div>
 <MapC></MapC>
  <!--footer!-->
  <div class="bg-dark py-3">
    <div class="container">
      <div
        class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4"
      >
        <a class="text-white h4" href="./index.html">LOGO</a>
        <ul class="d-flex list-unstyled mb-0 h4">
          <li>
            <a href="#" class="text-white mx-3"
              ><i class="fab fa-facebook"></i
            ></a>
          </li>
          <li>
            <a href="#" class="text-white mx-3"
              ><i class="fab fa-instagram"></i
            ></a>
          </li>
          <li>
            <a href="#" class="text-white ms-3"><i class="fab fa-line"></i></a>
          </li>
        </ul>
      </div>
      <div
        class="d-flex
        flex-column flex-md-row
        justify-content-between
        align-items-md-end align-items-start text-white"
      >
        <div class="mb-md-0 mb-1">
          <p class="mb-0">02-3456-7890</p>
          <p class="mb-0">service@mail.com</p>
        </div>
        <p class="mb-0">© 2020 LOGO All Rights Reserved.</p>
      </div>
    </div>
  </div>
</template>

<script>
import MapC from '../components/MapComponent.vue';

export default {
  components: {
    MapC,
  },

};

</script>
