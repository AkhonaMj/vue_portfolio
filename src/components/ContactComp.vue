<template lang="html">
    <div class="image-background" :style="{ backgroundImage: `url(${imageUrl})` }">
      <h1>Get in Touch</h1>
      <div class="contact-container">
          <div class="contact-details">
            <h2 class="cont-head">More options to reach out</h2>
          <img src="https://akhonamj.github.io/portfolio_images/call.png" alt="" class="icon">
          <h5>Call: 0793819862</h5>
          <img src="https://akhonamj.github.io/portfolio_images/email.png" alt="" class="icon">
          <h5>Email: akhona0304mjikelo@gmail.com</h5>
          <img src="https://akhonamj.github.io/portfolio_images/icons8-linkedin-logo-50.png" alt="" class="icon">
          <h5>Linkedin: Akhona Mjikelo</h5>
          <img src="https://akhonamj.github.io/portfolio_images/github%20(1).png" alt="" class="icon">
          <h5>GitHub: AkhonaMj</h5>
          <img src="https://akhonamj.github.io/portfolio_images/icons8-location-50.png" alt="" class="icon">
          <h5>Location: CPT, Khayelitsha</h5>
        </div>
        <div class="form">
          <form action="https://formspree.io/f/moqgyavy" method="POST" novalidate>
            <div class="col-lg-12 mb-3">
              <label for="exampleInputName1" class="form-label">Name</label>
              <input v-model="form.name" name="name" type="text" class="form-control" id="exampleInputName1" required>
              <div v-if="!form.name && submitted" class="error">Name is required.</div>
            </div>
            <div class="col-12 mb-3">
              <label for="exampleInputSurname" class="form-label">Surname</label>
              <input v-model="form.surname" name="surname" type="text" class="form-control" id="exampleInputSurname" required>
              <div v-if="!form.surname && submitted" class="error">Surname is required.</div>
            </div>
            <div class="col-12 mb-3">
              <label for="exampleInputNumber" class="form-label">Contact number</label>
              <input v-model="form.number" name="number" type="text" class="form-control" id="exampleInputNumber" required pattern="[0-9]{10}">
              <div v-if="(!form.number) && submitted" class="error">Contact number must be 10 digits.</div>
            </div>
            <div class="col-12 mb-3">
              <label for="exampleInputEmail" class="form-label">Email</label>
              <input v-model="form.email" name="email" type="email" class="form-control" id="exampleInputEmail" required>
              <div v-if="(!form.email) && submitted" class="error">Email is invalid.</div>
            </div>
            <div class="col-12 mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Message</label>
              <textarea v-model="form.message" name="message" class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
              <div v-if="!form.message && submitted" class="error">Message is required.</div>
            </div>
            <div class="col-12 d-flex justify-content-between">
              <button type="submit" @click="submitted = true" class="btn">Submit</button>
              <button type="reset" @click="resetForm" class="btn">Clear</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        imageUrl: "https://akhonamj.github.io/portfolio_images/plain-beige-myryswi114smviw6.jpg",
        form: {
          name: "",
          surname: "",
          number: "",
          email: "",
          message: ""
        },
        submitted: false
      };
    },
    methods: {
      resetForm() {
        this.form = {
          name: "",
          surname: "",
          number: "",
          email: "",
          message: ""
        };
        this.submitted = false;
      }
    }
  };
  </script>
  
  <style scoped>

.image-background {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1{
    margin-top:70px;
  }
.cont-head{
    margin-bottom: 50px;
}
.icon{
    height:50px;
  
}

.contact-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
}


.contact-details,
.form {
  flex: 1;
  margin: 10px;
}

.contact-details{
    margin-top:40px;
   
}

.form-control {
  border: 1px solid deeppink;
}
.btn{
    background-color: white;
    border:1px solid deeppink;
    margin-top: 30px;
    margin-right:30px;
}
  .error {
    color: red;
    font-size: 0.875em;
  }

  @media (max-width: 768px) {
    .contact-container {
      flex-direction: column;
      align-items: center;
    }
    .form,
    .contact-details {
      width: 100%;
      max-width: 600px;
    
    }
  }
  </style>
  