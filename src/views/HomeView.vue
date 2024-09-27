<template>
  <div>
    <div class="image-background" :style="{ backgroundImage: `url(${imageUrl})` }">
      <div class="text-container">
        <h1>Hello and Welcome to my Portfolio</h1>
        <img src="https://akhonamj.github.io/portfolio_images/20240422_113410.jpg" alt="Akhona Mjikelo" class="profile-image">
        <h3>I'm Akhona Mjikelo, and I am an Aspiring Software Developer</h3>
      </div>
      <div class="logo-container">
        <a href="https://github.com/AkhonaMj" target="_blank" rel="noopener noreferrer"><img src="https://akhonamj.github.io/portfolio_images/icons8-github-64.png" alt="Github" class="logo"></a>
        <a href="https://www.linkedin.com/in/akhona-mjikelo-184689248/" target="_blank" rel="noopener noreferrer"><img src="https://akhonamj.github.io/portfolio_images/icons8-linkedin-64.png" alt="Linkedin" class="logo"></a>
        <a href="https://drive.google.com/file/d/18hRrhVv-EaxmHIXlVlvwIYJRIWNzZqOl/view" target="_blank" rel="noopener noreferrer"><img src="https://akhonamj.github.io/portfolio_images/icons8-cv-64.png" alt="CV" class="logo"></a>
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

<style scoped>
html, body {
  height: 100%;
  margin: 0;
}

h1 {
  font-weight: bold;
  color: black;
  font-size: xxx-large;
}

h3 {
  color: black;
  font-size: x-large;
  text-align: center;
  margin-top: 20px;
  overflow: hidden;
  white-space: nowrap;
  width: 0;
  animation: typing 5s steps(50, end) forwards;
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

.image-background {
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.profile-image {
  width: 300px;
  height: 330px;
  border-radius: 50%;
  margin-top: 20px;
}

.text-container {
  width: 60%;
  text-align: center;
}

.logo-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.logo {
  margin: 0 10px;
}

.logo:hover {
  box-shadow: 0 0 10px 0 rgba(10, 16, 10, 20);
}



@media (max-width: 480px) {
  h3 {
    word-break: break-all;
    overflow-wrap: break-word;
    white-space: normal;
  }


  h1 {
    margin-top: 10px;
    font-size: x-large;
  }

  h3 {
    font-size:x-large;
  }

  .profile-image {
    width: 150px;
    height: 170px;
  }

  .text-container {
    width: 90%;
  }

  .logo {
    width: 40px;
    height: 40px;
  }
}
</style>
