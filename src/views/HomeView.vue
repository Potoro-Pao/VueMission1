<template>
  <HeaderC></HeaderC>
  <div class="container">
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6">
          <h2>Our latest Activity</h2>
          <SwiperC></SwiperC>
        </div>
        <div class="col-md-6">
          <h2>Watch People Shop</h2>
          <MapC style="width: 100%; height: 400px"></MapC>
        </div>
      </div>
      <div class="container mt-5">
        <div class="row bg-gray">
          <div class="col">
            <div class="row justify-content-center py-7">
              <div class="col-md-6 text-center">
                <h3>
                  <strong> Language & World: The Essence of Reading </strong>
                </h3>
                <figure>
                  <blockquote class="blockquote">
                    <p>
                      Die Grenzen meiner Sprache sind die Grenzen meiner Welt
                    </p>
                  </blockquote>
                  <figcaption class="blockquote-footer">
                    Ludwig Wittgenstein in
                    <cite title="Source Title"
                      >Logisch-philosophische Abhandlung</cite
                    >
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mt-5">
        <div class="row mb-5"><h2>Bestselling Books</h2></div>
        <div class="row">
          <div class="col-lg-6 d-flex align-items-center">
            <div class="text-center w-100">
              <h4>The Inheritance Cycle</h4>
              <p style="line-height: 2rem;">
                <strong>The Inheritance Cycle</strong> by Christopher Paolini
                narrates Eragon and Saphira's battle against the tyrant
                Galbatorix. A captivating journey of magic, struggle, and
                alliance unfolds in Alagaësia, enthralling readers with its rich
                storytelling and vivid world.
              </p>
            </div>
          </div>
          <div class="col-lg-6" style="text-align: right">
            <img
              style="object-fit: cover"
              src="/Bookset1.jpg"
              alt="Bestselling Books"
              class="img-fluid"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <!-- 图片在大屏幕上将显示在左侧 -->
            <img
              style="object-fit: cover"
              src="/Bookset3.png"
              alt="Lorem ipsum"
              class="img-fluid"
            />
          </div>
          <div class="col-lg-6 d-flex align-items-center">
            <!-- 文本在大屏幕上将显示在右侧 -->
            <div class="text-center w-100">
              <h4>The Blue Ant trilogy </h4>
              <p class="me-5" style="line-height: 2rem;">
                <strong>The Blue Ant trilogy</strong> is a series of science
                fiction novels by William Gibson. The novels are Pattern
                Recognition (2003), Spook Country (2007), and Zero History
                (2010). The trilogy follows the lives of a group of characters
                who are drawn into a world of corporate espionage, terrorism,
                and cybercrime.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 d-flex align-items-center">
            <div class="text-center w-100">
              <h4>The Old Kingdom Chronicles</h4>
              <p style="line-height: 2rem;">
                <strong>The Old Kingdom Chronicles</strong>
                is a series of fantasy novels by Garth Nix. The series follows
                the adventures of Sabriel, Lirael, and Abhorsen as they fight to
                protect the Old Kingdom from evil forces.
              </p>
            </div>
          </div>
          <div class="col-lg-6" style="text-align: right">
            <img
              style="object-fit: cover"
              src="/Bookset3.jpg"
              alt="Bestselling Books"
              class="img-fluid"
            />
          </div>
        </div>
      </div>

      <div class="container mb-6">
        <div class="row mt-5">
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
    </div>
  </div>
</template>

<script>
import MapC from '../components/MapComponent.vue';
import SwiperC from '../components/SwiperComponent.vue';
import HeaderC from '../components/HeaderComponent.vue';

export default {
  components: {
    MapC,
    SwiperC,
    HeaderC,
  },
};
</script>
