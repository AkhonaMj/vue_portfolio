<template lang="html">
    <div class="image-background" :style="{ backgroundImage: `url(${imageUrl})` }">
      <h1>Get in Touch</h1>
      <div class="contact-container">
        <div class="contact-details">
          <h5>Call: 0793819862</h5>
          <h5>Email: akhona0304mjikelo@gmail.com</h5>
          <h5>Linkedin: Akhona Mjikelo</h5>
          <h5>GitHub: AKhonaMj</h5>
        </div>
  
        <div class="form">
          <form action="https://formspree.io/f/moqgyavy" method="POST">
            <div class="col-lg-12">
              <label for="exampleInputName1" class="form-label">Name</label>
              <input name="name" type="text" class="form-control" id="exampleInpuName1">
            </div>
            <div class="col-12">
              <label for="exampleInputSurname" class="form-label">Surname</label>
              <input name="surname" type="text" class="form-control" id="exampleInputSurname">
            </div>
            <div class="col-12">
              <label for="exampleInputNumber" class="form-label">Contact number</label>
              <input name="number" type="text" class="form-control" id="exampleInputNumber">
            </div>
            <div class="col-12">
              <label for="exampleInputEmail" class="form-label">email</label>
              <input name="email" type="email" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="col-12">
              <label for="exampleInputPassword1" class="form-label" rows="3">Message</label>
              <textarea name="message" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" class="justify-content-center">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  
<script>
  export default {
    data() {
      return {
        imageUrl: "https://akhonamj.github.io/portfolio_images/plain-beige-myryswi114smviw6.jpg"
      };
    }
  }
</script>
  
<style>
.image-background {
  display: flex;
  flex-direction: column;
  align-items: center;
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
    margin-top:90px;
}

.form-control {
  border: 1px solid deeppink;
}
</style>
