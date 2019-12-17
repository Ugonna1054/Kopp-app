<template>
    <div> 
       <div class="form-content container">
             <p class="font-weight-bold p1"> Confirm your BVN Details</p>
             <p class="p2">Welcome to Globus Bank. We are so glad you are ready to join us.</p>
             <form @submit.prevent="next_page" class="form">
                    <div class="form-row row1">
                        <div class="col-12">
                        <label for="bvn">Bank Verification Number</label>
                        <div class="input-group">
                            <input class="form-control" id="bvn" type="text">
                            <div class="input-group-append"><span class="input-group-text" style="cursor:pointer">Change</span></div>
                        </div>
                        </div>
                    </div>
                    <div class="form-row row2 mt-lg-0 mt-n2" >
                        <div class="col-lg-4 mb-4 mb-lg-0">
                            <label for="firstname">First Name</label>
                            <input class="form-control" id="firstname" type="text">
                        </div>
                        <div class="col-lg-4 mb-4 mb-lg-0">
                            <label for="middlename">Middle Name</label>
                            <input class="form-control" id="middlname" type="text">
                        </div>
                        <div class="col-lg-4 mb-lg-0">
                            <label for="lastname">Last Name</label>
                            <input class="form-control" id="lastname" type="text">
                        </div>
                    </div>
                    <div class="form-row row3a ml-0">
                        <div class="col-12">
                            <label for="">Gender</label>
                        </div>
                    </div>
                    <div class="form-row row3 ml-0">
                        <div class="custom-control custom-radio ml-1"> 
                            <input type="radio" class="custom-control-input form-check-input" id="male" name="gender" >
                            <label class="custom-control-label" style="cursor:pointer" for="male">Male</label> 
                        </div>
                        <div class="custom-control custom-radio ml-5"> 
                            <input type="radio" class="custom-control-input form-check-input" id="female" name="gender" >
                            <label class="custom-control-label" style="cursor:pointer" for="female">Female</label> 
                        </div>
                    </div>
                    <div class="form-row row4">
                        <div class="col-lg-6 mb-4 mb-lg-0">
                            <label for="number">Phone Number</label>
                            <input type="text" id="number" class="form-control">
                        </div>
                        <div class="col-lg-6">
                            <label for="dob">Date Of Birth</label>
                            <input type="text" id="dob" class="form-control">
                        </div>
                    </div>
                    <div class="form-row row5  mt-lg-0 mt-n3">
                        <div class="col-12">
                            <label for="email">Email Address</label>
                            <div class="input-group">
                                <input class="form-control" id="email" type="email">
                                <div class="input-group-append"><span class="input-group-text">@</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="form-row row5 mt-lg-0 mt-n3">
                        <div class="col-12">
                            <label for="address">Residential Address</label>
                            <textarea class="form-control" id="address" rows="3" type="text"></textarea>
                        </div>
                    </div>
                    <div class="form-row d-flex mb-5 mt-3 justify-content-around">
                        <div></div>
                        <div></div>
                        <button type="submit"  class="btn" style="background:red; color:white">Accept & Submit <i class="fas fa-sm fa-chevron-right"></i></button>
                    </div>
             </form>

        </div>
    </div>
</template>

<script>

export default {
    name : "personal",
    methods : {
        next_page () {
            this.$router.push('/uploads');
        },
    },
    mounted () {
        this.$store.dispatch('updateIsPersonal')
    }
}
</script>

<style scoped>

.form-content {
  /* border:2px solid ; */
  margin-top:5vh;
  padding:0 50px
}

.p1 {
  margin-left:100px;
}

.p1::before {
  content : "";
  position: absolute;
  width:80px;
  height: 3px;
  background:red;
  margin-left:-90px;
  margin-top:12px
}

.p2 {
  margin-left:15px;
  margin-top: -10px;
  font-weight: 600
}

.row1, .row2, .row3, .row4, .row5 {
  /* border:2px solid blue; */
  padding: 20px 70px 20px 20px
}

input {
    background: whitesmoke
}

.row3 {
  margin-top: -35px
}

.row3a {
  padding: 10px 70px 20px 20px
}

@media (max-width:768px) {

    .form-content {
        margin-top:5vh;
        padding:0 10px;
        
    }
}

   
</style>

