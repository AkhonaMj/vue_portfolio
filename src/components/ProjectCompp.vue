<template>
    <div class="image-background" :style="{ backgroundImage: `url(${imageUrl})` }">
      <div class="container text-center">
        <h1>My Work</h1>
        <div class="row">
          <div v-for="(project, index) in projects" :key="index" class="col-lg-4 col-md-6 mb-4">
            <div class="card-project">
              <img :src="project.image" alt="Project image" class="project-image">
              <div class="card-body">
                <h5 class="card-title">{{ project.name }}</h5>
                <div class="button-group">
                  <button>
                    <a :href="project.github" target="_blank" rel="noopener noreferrer" class="card-link">GitHub</a>
                  </button>
                  <button v-if="project.hosted">
                    <a :href="project.hosted" target="_blank" rel="noopener noreferrer" class="card-link">Hosted</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      projects() {
        return this.$store.state.projects;
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
  
  <style scoped>
  .image-background {
    width: 100%;
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
    font-size: 2rem;
    font-weight: bold;
    color: #000;
    margin-bottom: 20px;
  }
  
  .card-project {
    background-color: rgba(244, 151, 142, 0.238);
    width: 100%;
    max-width: 300px; 
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    border-radius: 30px;
    overflow: hidden;
  }
  
  .card-project:hover {
    box-shadow: 0 0 10px rgba(10, 16, 10, 0.2);
    background-color: #f0a6ca;
  }
  
  .project-image {
    width: 100%;
    height: 200px; 
    border-radius: 30px 30px 0 0;
    object-fit: cover; 
  }
  
  .card-body {
    padding: 0px; 
  }
  
  .button-group {
    display: flex;
    justify-content: center;
  }
  
  button {
    width: 100px;
    margin: 10px;
    border: 2px solid deeppink;
    border-radius: 12px;
    background-color: transparent;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #e22bd6;
    border-color: #000;
  }
  
  a {
    color: #000;
    text-decoration: none;
  }
  
  .container {
    padding-top: 100px; 
  }
  
  @media (max-width: 992px) {
    .card-project {
      max-width: 100%; 
    }

    .container{
        padding-top:1400px;
        margin-top:10px;
    }

  }
  </style>
  