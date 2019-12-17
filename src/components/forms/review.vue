<template>
  <div class="main-content container">
      <section class="section1 mb-5">
          <p class="d-none review font-weight-bold h4 mb-4">Review your Information</p>
          <p class="font-weight-bold">Personal Information</p>
         <div class="container border py-3">
             <div class="row d-flex justify-content-around mb-3">
                 <span></span>
                 <span></span>
                 <span></span>
                 <span></span>
                  <span></span>
                 <span> <button  class="btn edit"> <i class="fas fa-sm fa-pencil-alt"></i> Edit</button></span>
             </div>
            <div class="row mb-3 text ">
                <span class="col-3">BVN</span>
                <span class="col-2"></span>
                <span class="col-5">22210997808</span>
                <span class="col-2"></span>
            </div>
            <div class="row text mb-3">
                <span class="col-3">Name</span>
                <span class="col-2"></span>
                <span class="col-5">Chika Iduma</span>
                <span class="col-2"></span>
            </div>
            <div class="row text mb-3">
                <span class="col-3">Gender</span>
                <span class="col-2"></span>
                <span class="col-5">Male</span>
                <span class="col-2"></span>
            </div>
            <div class="row text mb-3">
                <span class="col-4 col-md-3">Date of Birth</span>
                <span class="col-1 col-md-2"></span>
                <span class="col-7 col-md-5">14th March, 1989</span>
                <span class="col-0 col-md-2"></span>
            </div>
            <div class="row text mb-3">
                <span class="col-4 col-md-3">Phone Number</span>
                <span class="col-1 col-md-2"></span>
                <span class="col-7 col-md-5">+2349585938485</span>
                <span class="col-0 col-md-2"></span>
            </div>
            <div class="row text mb-3">
                <span class="col-4 col-md-3">Email Address</span>
                <span class="col-1 col-md-2"></span>
                <span class="col-7 col-md-5">chikason@gmail.com</span>
                <span class="col-0 col-md-2"></span>
            </div>
           <div class="row text mb-3">
                <span class="col-4">Residential Address</span>
                <span class="col-1"></span>
                <span class="col-5">6, Adeyemo ALakija street</span>
                <span class="col-2"></span>
            </div>
         </div>
      </section>

      <section class="section2">
        <p class="font-weight-bold">Document Upload</p>
        <div class="container border py-3">
            <div class="row d-flex justify-content-around mb-3">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span> <button  class="btn edit"> <i class="fas fa-sm fa-pencil-alt"></i> Edit</button></span>
            </div>
            <div class="upload row">
                <div class="col-lg-5 mb-3 mb-lg-0" style="padding:0px">
                    <div class="form-row row1 ml-0">
                        <div class="custom-control custom-radio ml-1"> 
                        <input type="radio" v-model="uploads" value="passport" class="custom-control-input form-check-input" id="passport" name="item1" >
                        <label class="custom-control-label" style="cursor:pointer" for="passport"> <span class="ml-3">Passport Photograph</span> </label> 
                        </div>
                    </div>
                    <div class="form-row row2 ml-0">
                        <div class="custom-control custom-radio ml-1"> 
                        <input type="radio" v-model="uploads"  value="utility" class="custom-control-input form-check-input" id="utility" name="item1" >
                        <label class="custom-control-label" style="cursor:pointer" for="utility"> <span class="ml-3">Utility Bill</span> </label> 
                        </div>
                    </div>
                    <div class="form-row row3 ml-0">
                        <div class="custom-control custom-radio ml-1"> 
                        <input type="radio" v-model="uploads"  value="id" class="custom-control-input form-check-input" id="id" name="item1" >
                        <label class="custom-control-label" style="cursor:pointer" for="id"> <span class="ml-3">Valid ID</span> </label> 
                        </div>
                    </div>
                    <div class="form-row row4 ml-0">
                        <div class="custom-control custom-radio ml-1"> 
                        <input type="radio" v-model="uploads"  value="signature" class="custom-control-input form-check-input" id="signature" name="item1" >
                        <label class="custom-control-label" style="cursor:pointer" for="signature"> <span class="ml-3">Signature</span> </label> 
                        </div>
                    </div>
                </div>
            </div>    
        </div>
      </section>

      <section class="section3">
        <div>
            <b-modal :footer-border-variant="'whitesmoke'" footer-bg-variant="light" :header-border-variant="'whitesmoke'" v-model="modalShow">
                <template v-slot:modal-header class="d-flex justify-content-between" > 
                    <div></div>
                    <div></div>
                    <div class="logo"> 
                        <img  src="../../assets/logo.png" height="30px" alt="">
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </template>
                <template class="modal-body">
                    <p class="welcome-text">Welcome to Kops</p>
                    <p class="span-text">Your account number has been generated successfully.</p>
                    <p class="text-center mb-3 h3">1020384895</p>
                    <div class="d-flex justify-content-between">
                         <div></div>
                         <div></div>
                         <button class="btn btn-outline-danger">View our product offerings</button>
                         <div></div>
                         <div></div>
                    </div>
                </template>
                <template class="container-fluid" v-slot:modal-footer>
                     <div class="row" >
                         <p class="col-7 footer-text">Continue banking on our mobile platforms</p>
                         <div class="d-flex store-logo-wrapper col-5 justify-content-between">
                             <a href=""><img class="img-fluid" src="../../assets/google-badge.svg" alt=""></a>
                             <p></p>  
                             <p></p>  
                             <a href=""><img class="img-fluid" src="../../assets/apple-badge.svg" alt=""></a>
                         </div>
                     </div>
                </template>
            </b-modal>
        
        </div>
      </section>

      <section class="section4 d-flex justify-content-between mt-5 mb-4">
          <div @click="prev_page" class="btn btn-outline-danger px-4">
             <i class="fas fa-sm fa-chevron-left"></i> Back
          </div>
          <div> </div>

          <div></div>
           <div @click="submitForm" class="btn text-white" style="background:red">
             Proceed <i class="fas fa-sm fa-chevron-right"></i>
           </div>
      </section>
  </div>
</template>

<script>
export default {
    name:"review",
    data () {
        return {
            uploads : "passport",
            modalShow:false,
            footerBgVariant:'warning'
        }
    },
    methods : {
        submitForm () {
          this.modalShow = !this.modalShow
        },
        prev_page () {
            this.$router.go(-1)
        },
       
    },
    mounted () {
         this.$store.dispatch('updateIsReview')
    }
}
</script>

<style scoped>
.main-content {
  /* border:2px solid black; */
  margin-top:5vh;
  padding:0 50px;
  
}

.edit {
    background: lightblue;
    padding: 5px 25px 5px 25px
}

.text{
    font-weight:500
}

.row1, .row2, .row3, .row4, .row5 {
  padding: 5px 0px 5px 5px;
  /* margin-left: 0vw */
}

.logo::after {
  position: absolute;
  content: "kops";
  font-weight: 600;
  margin-left: 5px;
}

.logo {
    text-align: center!important
}


.store-logo-wrapper {
    padding: 0px 0px 0px 0px !important;
}

.welcome-text {
    text-align: center;
    font-size: 20px;
    font-weight: 700
}

.span-text {
    text-align: center;
    font-size: 15px;
    font-weight: 500
}

.footer-text {
    font-size: 13px;
    font-weight: 500;
    padding: 5px 0px 5px 0px !important
}

.footer-div {
    background: red !important
}

@media (max-width:768px) {
    .review {
        display: block !important;
    }
}

</style>