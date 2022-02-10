<template>
  <router-link to="/"
    ><img class="py-4" src="../../assets/wohlig_transformations.png"
  /></router-link>
  <form @submit.prevent="submitForm">
    <div class="form-control1">
      <label for="email">E-Mail</label>
      <input
        type="email"
        id="email"
        v-model.trim="email.val"
        @blur="validEmail"
      />
      <div
        v-show="!email.valid"
        class="form-control alert alert-danger"
        role="alert"
      >
        Please enter a valid email address
      </div>
    </div>
    <div class="form-control1">
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        v-model.trim="password.val"
        @blur="validPassword"
      />
      <div
        v-show="!password.valid"
        class="form-control1 alert alert-danger"
        role="alert"
      >
        <p class="alert-heading">
          {{ password.msg }}
        </p>
      </div>
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: "signin",
  data() {
    return {
      email: {
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
      formIsValid: false,
    };
  },
  methods: {
    validEmail() {
      if (this.email.val == "" || this.email.val == null) {
        this.email.valid = false;
        this.formIsValid = false;
      } else {
        let re = /\S+@\S+\.\S+/;

        if (!re.test(this.email.val)) {
          this.email.valid = false;
          this.formIsValid = false;
        } else {
          this.email.valid = true;
          this.formIsValid = true;
        }
      }
    },
    validPassword() {
      if (this.password.val.length < 8) {
        this.password.valid = false;
        this.formIsValid = false;
        this.password.msg = "Password should be minimum 8 characters long";
      } else {
        let regEx =
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if (!regEx.test(this.password.val)) {
          this.password.valid = false;
          this.formIsValid = false;
          this.password.msg =
            "Password must contain one Upper case, Lower case,  Numerical and a Special character.";
        } else {
          this.password.valid = true;
          this.formIsValid = true;
        }
      }
    },
    submitForm() {
      this.validEmail();

      this.validPassword();

      if (this.formIsValid) {

        axios.post('http://localhost:3000/login',{
          email: this.email.val,
          password: this.password.val
        }).then(function(response) {
          console.log(response);
          alert(response.data);
        });
        // alert("Logged In");
        
        this.email.val = "";

        this.password.val = "";
        this.$store.dispatch('login');
        this.$router.push('/videos');
      } else {
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
