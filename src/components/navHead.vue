<template>
  <div>
    <header class="jumbotron">
      <!-- fixed navbar for small screens -->
      <nav class="navbar fixed-top navbar-light bg-light" style="display:none">
        <div class="d-flex justify-content-between">
          <div></div>
          <div></div>
          <a class="navbar-brand logos" href="#"
            ><img src="../assets/logo.png" class="img" height="30px" alt=""
          /></a>
          <div></div>
          <div></div>
        </div>
      </nav>

      <div class="row">
        <div class="logo d-flex justify-content-around main-nav col-md-3">
          <div></div>
          <img src="../assets/logo.png" class="img" height="30px" alt="" />
          <div></div>
        </div>
        <div class="col-md-2"></div>
        <div class="items justify-content-around col-md-7 d-flex">
          <div :class="{ activeBorder: isPersonal }" class="item1">
            <div class="custom-control custom-radio">
              <input
                type="radio"
                v-model="radio"
                value="personal"
                class="custom-control-input form-check-input"
                id="Check1"
                name="item"
              />
              <label
                @click="goPersonal"
                class="custom-control-label"
                :class="{ active: isPersonal }"
                style="cursor:pointer"
                for="Check1"
                >Personal Information</label
              >
            </div>
          </div>

          <div :class="{ activeBorder: isUploads }" class="item2">
            <div class="custom-control custom-radio">
              <input
                type="radio"
                v-model="radio"
                value="uploads"
                class="custom-control-input"
                id="Check2"
                name="item"
              />
              <label
                @click="goUploads"
                class="custom-control-label"
                :class="{ active: isUploads }"
                style="cursor:pointer"
                for="Check2"
                >Documents Upload</label
              >
            </div>
          </div>

          <div :class="{ activeBorder: isReview }" class="item3">
            <div class="custom-control custom-radio">
              <input
                type="radio"
                v-model="radio"
                value="review"
                class="custom-control-input"
                id="Check3"
                name="item"
              />
              <label
                @click="goReview"
                class="custom-control-label"
                :class="{ active: isReview }"
                style="cursor:pointer"
                for="Check3"
                >Review and Submit</label
              >
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "navHead",
  components: {},
  data() {
    return {};
  },
  computed: {
    currentRoute() {
      return this.$router.currentRoute.name;
    },

    ...mapState({
      radio: state => state.navigation.radio,
      isPersonal: state => state.navigation.isPersonal,
      isReview: state => state.navigation.isReview,
      isUploads: state => state.navigation.isUploads
    })
  },
  methods: {
    goPersonal() {
      this.$store.dispatch("updateIsPersonal");
      this.$router.push("/personal");
    },
    goUploads() {
      this.$store.dispatch("updateIsUploads");
      this.$router.push("/uploads");
    },
    goReview() {
      this.$store.dispatch("updateIsReview");
      this.$router.push("/review");
    }
  },
  mounted() {}
};
</script>

<style scoped>
.jumbotron {
  background: white;
  padding: 0.8em !important;
  overflow-x: hidden;
  overflow-y: hidden;
  box-shadow: 0px 2px 30px silver;
}

label {
  font-size: 15px;
  color: grey;
}

.items,
.logo {
  top: 13px;
}

.item1,
.item2,
.item3 {
  padding-bottom: 13px;
  width: 200px;
}

.active {
  color: midnightblue;
  font-weight: 600;
}

.activeBorder {
  border-bottom: 4px solid midnightblue;
}

.logo::after {
  position: absolute;
  content: "kops";
  font-weight: 600;
  margin-left: 35px;
}

@media (max-width: 768px) {
  .item1,
  .item2,
  .item3 {
    padding-bottom: 13px;
    width: auto;
  }
  .jumbotron {
    background: whitesmoke;
  }
  .items {
    display: none !important;
  }
  .img {
    margin-bottom: 20px !important;
  }
  .navbar {
    display: block !important;
  }
  .logos {
    height: 35px;
  }
  .logos::after {
    position: absolute;
    content: "kops";
    font-weight: 600;
    margin-left: 5px;
  }
  .main-nav {
    display: none !important;
  }
}
</style>
