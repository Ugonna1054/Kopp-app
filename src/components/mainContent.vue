<template>
  <div class="mainContent container-fluid">
    <div class="row">
      <section class="section1 image container-fluid col-md-5">
        <!-- <img src="../assets/city.jpg" class="img-fluid" alt=""> -->
        <div class="row d-flex justify-content-end text-wrapper">
          <div class="col-md-1"></div>
          <div class="col-md-11">
            <p class="text-white enjoy">
              Enjoy all the conveniences of banking at your fingertips
            </p>
            <p class="text-white banking">
              Our banking services now comes to you. Call our advisors and they
              will bring you all our solutions
            </p>
          </div>
        </div>
      </section>
      <section class="section2 container col-md-7">
        <router-view />
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "mainContent"
};
</script>

<style scoped>
.mainContent {
  margin-top: -5vh;
  /* border:2px solid blue; */
  padding-left: 0px;
}

.image {
  background: url("../assets/city.jpg") center;
  background-size: cover;
  height: auto;
  width: 150vw !important;
  background-repeat: no-repeat;
}

.section1 {
  padding: 0px;
}

.enjoy {
  border-bottom: 3px solid white;
  font-size: 30px;
  font-weight: 900;
  left: 16px;
  padding: 0px 0px 20px 0px;
  position: relative;
}

.banking {
  font-weight: 500;
  left: 16px;
  padding: 0px 0px 20px 0px;
  position: relative;
}

.text-wrapper {
  padding: 10px 0px 20px 20px;
  width: auto;
  margin: 300px 0px 0px 0px;
}
</style>
