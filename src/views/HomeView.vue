<template>
  <div>
    <div class="image-background" :style="{ backgroundImage: `url(${imageUrl})` }">
      <div class="mini-background">
        <h1>Hello and Welcome to my Portfolio</h1>
        <h3>I'm Akhona Mjikelo, and I am an Aspiring Software Developer</h3>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  data(){
    return{
      imageUrl:"https://akhonamj.github.io/portfolio_images/plain-beige-myryswi114smviw6.jpg"
    }
  }
}
</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
}

h1{
  font-weight: bold;
  color: black;
  font-size: X larger;
}

h3{
  color: black;
  font-size: larger;
  text-align: center;
  margin-top: 100px;
  overflow: hidden;
  white-space: nowrap;
  width: 0;
  animation: typing 5s steps(59, end) forwards;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
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

.mini-background{
  background-color: #c97b84; 
  width: 770px;
  height: 250px;
  border-radius: 40px;
  margin-left: 30px; 
}
</style>
