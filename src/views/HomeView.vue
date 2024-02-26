<template>
  <!-- <SwiperC></SwiperC> -->
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-4 mt-md-4">
        <img src="https://plus.unsplash.com/premium_photo-1676422355165-d809008b8342?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
          <!-- <SwiperC></SwiperC> -->
      </div>
      <div class="col-md-4 mt-md-4">
        <h2>See People Shop</h2>
        <MapC></MapC>
      </div>
      <div class="container">
        <div class="row mt-5">
          <h2>Best Selling Books</h2>
          <div class="col-md-4 mt-md-4">
            <div class="card border-0 mb-4">
              <img
                src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
                class="card-img-top rounded-0"
                alt="..."
              />
              <div class="card-body text-center">
                <h4>Lorem ipsum</h4>
                <div class="d-flex justify-content-between">
                  <p class="card-text text-muted mb-0">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod.
                  </p>
                </div>
                <button class="btn btn-outline-info">Add to basket</button>
              </div>
            </div>
          </div>
          <div class="col-md-4 mt-md-4">
            <div class="card border-0 mb-4">
              <img
                src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
                class="card-img-top rounded-0"
                alt="..."
              />
              <div class="card-body text-center">
                <h4>Lorem ipsum</h4>
                <div class="d-flex justify-content-between">
                  <p class="card-text text-muted mb-0">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mt-md-4">
            <div class="card border-0 mb-4">
              <img
                src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
                class="card-img-top rounded-0"
                alt="..."
              />
              <div class="card-body text-center">
                <h4>Lorem ipsum</h4>
                <div class="d-flex justify-content-between">
                  <p class="card-text text-muted mb-0">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row bg-gray">
          <div class="col">
            <div class="row justify-content-center py-7">
              <div class="col-md-6 text-center">
                <h3> <strong> Language & World: The Essence of Reading </strong></h3>
                <figure>
                  <blockquote class="blockquote">
                    <p>
                      Die Grenzen meiner Sprache sind die Grenzen meiner Welt
                    </p>
                  </blockquote>
                  <figcaption class="blockquote-footer">
                    Ludwig Wittgenstein in
                    <cite title="Source Title">Logisch-philosophische Abhandlung</cite>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MapC from '../components/MapComponent.vue';
// import SwiperC from '../components/SwiperComponent.vue';

export default {
  components: {
    MapC,
    // SwiperC,
  },
};
</script>
