<template>
    <div class="image-background" :style="{ backgroundImage: `url(${imageUrl})` }">
      <div class="about" v-if="aboutMe">
        <h1>About Me</h1>
        <p>{{ aboutMe }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        imageUrl: "https://akhonamj.github.io/portfolio_images/plain-beige-myryswi114smviw6.jpg"
      }
    },
    computed: {
      aboutMe() {
        return this.$store.state.aboutMe;
      }
    },
    methods: {
      getApiData() {
        this.$store.dispatch('getApiData');
      }
    },
    mounted() {
      this.getApiData();
    }
  }
  </script>
  
  <style>
  html, body {
    height: 100%;
    margin: 0;
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
  
  h1 {
    color: black;
  }
  
  .about {
    background-color: rgba(244, 151, 142, 0.51); 
    width: 90%;
    max-width: 870px;
    height: auto;
    border-radius: 20px;
    padding: 14px;
    font-size: large; 
    color: black;
    text-align: center;
  }
  
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    .about {
      font-size: medium;
      padding-top: 100px;
      margin-top: 100px;
    }
    p {
      width: 100%;
      max-width: 100%;
      font-size: medium;
    }
  }
  </style>
  