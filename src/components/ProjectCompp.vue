<template>
    <div class="image-background" :style="{ backgroundImage: `url(${imageUrl})` }">
      <div class="card-project" v-for="(project, index) in projects" :key="index">
        <img :src="project.image" alt="Project image" class="project-image">
        <div class="card-body">
          <h5 class="card-title">{{ project.name }}</h5>
          <p class="card-text">{{ project.description }}</p>
          <div class="card-body">
            <button><a :href="project.github"  target="_blank" rel="noopener noreferrer" class="card-link">GitHub</a></button>
            <button><a :href="project.vercel"  target="_blank" rel="noopener noreferrer" class="card-link" v-if="project.vercel">Vercel</a></button>
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
  
  <style>
  .image-background {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .card-project {
    margin: 0.5rem;
    background-color: rgba(244, 151, 142, 0.238);
    grid-template-columns: repeat(auto-fill, minmax(250px,2fr));

  }
  
  .project-image {
    width: 287px;
    height: 287px;
  }
  button{
    width: 70px;
    margin: 20px;
    border: solid 2px  deeppink;
    border-radius: 12px;

  }
  button:hover{
    background-color: rgb(226, 43, 214);
    border: solid 2px  deeppink;
  }
  a{
    color: black;
    text-decoration: none;
  }

  </style>
  