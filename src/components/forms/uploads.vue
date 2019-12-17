<template>
  <div>
      <div class="form-content container">
        <p class="font-weight-bold p1"> Upload Documents</p>
        <p class="p2">Upload the folowing documents to get the most out of banking with us.</p>
        <p class="p3">You can upload a few or choose to <i style="color:navy; cursor:pointer" class="font-weight-bold">skip and upload later</i>.</p>
        <p class="p4 px-4 mt-5 mb-5"> <i class="fas text-danger fa-exclamation"></i> Supported upload format: JPEG, PNG & PDF. Maximum file size allowed is 2MB</p>
        <form action="" @submit.prevent="next_page">
            <div class="upload row">
                <div class="col-lg-5 mb-3 mb-lg-0" style="padding:0px">
                    <div class="form-row row1 ml-0">
                        <div class="custom-control custom-radio ml-1"> 
                        <input type="radio" v-model="uploads" value="passport" class="custom-control-input form-check-input" id="passport" name="item1" >
                        <label :class="{active:isPassport}" class="custom-control-label" style="cursor:pointer" for="passport"> <span class="ml-3">Passport Photograph</span> </label> 
                        </div>
                    </div>
                    <div class="form-row row2 border border-left-0  border-bottom-0 ml-0">
                        <div class="custom-control custom-radio ml-1"> 
                        <input type="radio" v-model="uploads"  value="utility" class="custom-control-input form-check-input" id="utility" name="item1" >
                        <label  :class="{active:isUtility}" class="custom-control-label" style="cursor:pointer" for="utility"> <span class="ml-3">Utility Bill</span> </label> 
                        </div>
                    </div>
                    <div class="form-row row3 border border-left-0 border-bottom-0  ml-0">
                        <div class="custom-control custom-radio ml-1"> 
                        <input type="radio" v-model="uploads"  value="id" class="custom-control-input form-check-input" id="id" name="item1" >
                        <label :class="{active:isId}" class="custom-control-label" style="cursor:pointer" for="id"> <span class="ml-3">Valid ID</span> </label> 
                        </div>
                    </div>
                    <div class="form-row row4 border border-left-0 border-bottom-0  ml-0">
                        <div class="custom-control custom-radio ml-1"> 
                        <input type="radio" v-model="uploads"  value="signature" class="custom-control-input form-check-input" id="signature" name="item1" >
                        <label :class="{active:isSignature}" class="custom-control-label" style="cursor:pointer" for="signature"> <span class="ml-3">Signature</span> </label> 
                        </div>
                    </div>
                </div>
                <div class="col-lg-7 container">
                    <div class="container text-center">
                    <div class="mt-4"> <i class="fas fa-3x fa-cloud-upload-alt" style="color:grey"></i> </div>
                    <p>Drag and drop an image file here</p>
                    <p class="text-center">OR</p>
                    <label for="file" class="btn btn-outline-primary mb-5 btn-file">
                        Browse <input class="d-none" type="file" name="" id="file">
                    </label>
                    </div>
                </div>
                </div>
                <div class="mt-5 container d-flex justify-content-between mb-5">
                    <div @click="next_page" class="btn btn-outline-danger px-4">Skip</div>
                    <div></div>
                    <div></div>
                    <button type="submit" class="btn text-white" style="background:red">Proceed <i class="fas fa-sm fa-chevron-right"></i> </button>
                </div>
        </form>
      </div>
  </div>
</template>

<script>

export default {
    name:"uploads",
    components : {
        
    },
    data () {
        return {
            isPassport : false,
            isUtility : false,
            isId : false,
            isSignature : false,
            uploads : ""
        }
    },
    methods : {
        next_page () {
            this.$router.push('/review')
        },
        prev_page () {
            this.$router.go(-1)
        },
    },
    watch : {
        uploads (value) {
            if (value == 'passport') {
                this.isPassport = true;
                this.isUtility = false;
                this.isSignature = false;
                this.isId = false
                return;
            }
             if (value == 'utility') {
                this.isPassport = false;
                this.isUtility = true;
                this.isSignature = false;
                this.isId = false
                return;
            }
             if (value == 'id') {
                this.isPassport = false;
                this.isUtility = false;
                this.isSignature = false;
                this.isId = true
            }
             if (value == 'signature') {
                this.isPassport = false;
                this.isUtility = false;
                this.isSignature = true;
                this.isId = false
            }
        }
    },
    mounted () {
        this.$store.dispatch('updateIsUploads')
    }
}
</script>

<style scoped>

.form-content {
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

.p2, .p3, .p4 {
  margin-left:15px;
  margin-top: -10px;
  font-weight: 600
}

.p4 {
    background:pink;
    padding: 5px
}

.upload {
    border:2px solid silver;
    margin-left:15px;
    margin-top: -10px;
    padding-bottom: 0px;
    height: auto;
}

.row1 {
     padding: 20px 0px 20px 5px;
}
.row2, .row3, .row4, .row5 {
  border-color:silver !important;
  padding: 20px 0px 20px 5px;
  /* margin-left: 0vw */
}

.active {
    color: navy;
    font-weight: 600
}

@media (max-width:991px) {
    .row2, .row3, .row4 { 
     padding: 20px 0px 20px 5px;
     border-top: 2px solid silver !important;
     width:auto;
     position: relative;
    }

    .row4 {
        border-bottom: 2px solid silver !important;
    }

    .upload {
    border:5px solid silver;
    margin-left:15px;
    margin-top: -10px;
    padding-bottom: 0px;
    height: auto;
}

}

@media (max-width: 760px) {
   .form-content {
        margin-top:5vh;
        padding:0 50px;
        width:100vw
    }
}





</style>