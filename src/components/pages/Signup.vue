<template>
<router-link to="/"><img class = "py-4" src = "../../assets/wohlig_transformations.png"></router-link>
  <form @submit.prevent="submitForm">
    <div class="form-control1">
      <label for="fName">First Name</label>
      <input
        type="text"
        id="fName"
        v-model.trim="fName.val"
        @blur="validfName"
      />
      <div
        v-show="!fName.valid"
        class="form-control alert alert-danger"
        role="alert"
      >
        Please Fill Your First Name
      </div>
    </div>
    <div class="form-control1">
      <label for="lName">Last Name</label>
      <input
        type="text"
        id="lName"
        v-model.trim="lName.val"
        @blur="validlName"
      />
      <div
        v-show="!lName.valid"
        class="form-control alert alert-danger"
        role="alert"
      >
        Please Fill Your Last Name
      </div>
    </div>
    <div class="form-control1">
      <label for="email">E-Mail</label>
      <input type="email" id="email" v-model.trim="email.val" @blur="validEmail" />
      <div
        v-show="!email.valid"
        class="form-control alert alert-danger"
        role="alert"
      >
        Please enter a valid email address
      </div>
    </div>
    <div class="form-control1">
      <label for="phone">Phone No.</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        v-model.trim="phone.val"
        @blur="validPhone"
      />
      <div
        v-show="!phone.valid"
        class="form-control alert alert-danger"
        role="alert"
      >
        Please Enter a valid phone number
      </div>
    </div>
    <div class="form-control1">
      <label for="password">Password</label>
      <input type="password" id="password" v-model.trim="password.val"  @blur="validPassword"/>
      <div
        v-show="!password.valid"
        class="form-control1 alert alert-danger"
        role="alert"
       
      >
<p class="alert-heading">
      {{password.msg}}
        </p>
      </div>
    </div>
    <div class="form-control1">
      <label for="password2">Confirm Password</label>
      <input type="password" id="password2" v-model.trim="password2.val" @blur = "validPassword2" />
      <div
        v-show="!password2.valid"
        class="form-control alert alert-danger"
        role="alert"
      >
        Password does not match.
      </div>
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>



</template>


<script>
import axios from 'axios';

export default {
  name: "signup",
  data() {
    return {
      fName: {
        required: true,
        val: "",
        valid: true,
      },
      lName: {
        required: true,
        val: "",
        valid: true,
      },
      email: {
        required: true,
        val: "",
        valid: true,
      },
      phone: {
        required: true,
        val: "",
        valid: true,
      },
      password: {
        required: true,
        val: "",
        valid: true,
        msg: "",
      },
      password2: {
        required: true,
        val: "",
        valid: true,
      },
      formIsValid: false,
      mode: "login",
      isLoading: false,
      formMsg:"",
    };
  },

  methods: {
    validfName() {
      if (this.fName.val == "" || this.fName.val.length < 3 ) {
        this.fName.valid = false;
        this.formIsValid = false;
      } else {
        this.fName.val = this.fName.val.toUpperCase();
        this.fName.valid = true;
        this.formIsValid = true;
      }
    },
    validlName() {
      if (this.lName.val == "" || this.lName.val.length < 3) {
        this.lName.valid = false;
        this.formIsValid = false;
      } else {
        this.lName.val = this.lName.val.toUpperCase();
        this.lName.valid = true;
        this.formIsValid = true;
      }
    },
    validEmail(){
      if (this.email.val== "" || this.email.val == null){
        this.email.valid = false;
        this.formIsValid = false;
      }
      else{
        let re = /\S+@\S+\.\S+/;
        
        if( !re.test(this.email.val)){
          this.email.valid = false;
          this.formIsValid = false;
        }
        else{
          this.email.valid = true;
          this.formIsValid = true;
        }
      }
    },
    validPhone(){
      if(this.phone.val.length != 10){
        this.phone.valid = false;
        this.formIsValid = false;
      }
      else{
        let re = /^\d+$/ ;
        if(!re.test(this.phone.val)) {
          this.phone.valid = false;
          this.formIsValid = false;
      }
      else{
        this.phone.valid = true;
        this.formIsValid = true;
      }
      }
    },
    validPassword(){
      if (this.password.val.length < 8 ) {
        this.password.valid = false;
        this.formIsValid = false;
        this.password.msg = "Password should be minimum 8 characters long"
      } 
      else{
        let regEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/ ;
        if(!regEx.test(this.password.val)) {
          this.password.valid = false;
          this.formIsValid = false;
          this.password.msg = "Password must contain one Upper case, Lower case,  Numerical and a Special character."
    }
    else{
      this.password.valid = true;
      this.formIsValid = true;
    }
    
    }
    },
    validPassword2(){
      if(this.password.val != this.password2.val){
        this.password2.valid = false;
        this.formIsValid = false;
      }
      else{
        this.password2.valid = true;
        this.formIsValid = true;
      }
    },
    submitForm(){
    this.validfName();
    this.validlName();
    this.validEmail();
    this.validPhone();
    this.validPassword();
    this.validPassword2();
    if (this.formIsValid){

      axios.post("http://localhost:3000/signup",{
        fname: this.fName.val,
        lname: this.lName.val,
        email: this.email.val,
        phone_no: this.phone.val,
        password: this.password.val
      }).then(function(response) {
        console.log(response);
        alert(response.data);
      });

    //  alert("Account Created Successfully");
    this.fName.val = "";
    this.lName.val = "";
    this.email.val = "";
    this.phone.val = "";
    this.password.val ="";
    this.password2.val ="";
       
    } 
    else{
      alert("Please fill the form");
     
    }
  },
  },
  
};
</script>


<style scoped>

.form-control1 {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin: 0.5rem;
}

input,
textarea {
  width: 60%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>