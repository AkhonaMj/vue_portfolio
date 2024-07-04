<template>
    <div class="image-background" :style="{ backgroundImage: `url(${imageUrl})` }">
      <div class="container text-center">
        <h1>My Work</h1>
        <div class="row">
          <div v-for="(project, index) in projects" :key="index" class="col-md-4 mb-4">
            <div class="card-project">
              <img :src="project.image" alt="Project image" class="project-image">
              <div class="card-body">
                <h5 class="card-title">{{ project.name }}</h5>
                <div class="card-body">
                  <button>
                    <a :href="project.github" target="_blank" rel="noopener noreferrer" class="card-link">GitHub</a>
                  </button>
                  <button v-if="project.vercel">
                    <a :href="project.vercel" target="_blank" rel="noopener noreferrer" class="card-link">Vercel</a>
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
  
  <style>

.image-background {
  display: flex;
  justify-content: center;
}
h5{
    font-size: 1.5rem;
    font-weight: 540;
    color: rgb(0, 0, 0);
}

.card-project {
  background-color: rgba(244, 151, 142, 0.238);
  width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px; 
  border-radius: 30px;
  overflow: hidden; 
  grid-template-columns: repeat(auto-fill, minmax(250px,1fr));

}
.card-project:hover{
    box-shadow: 0 0 10px 0 rgba(10, 16, 10, 20);
    background-color: rgba(32, 30, 30, 0.579);
    color: beige;

}

.project-image {
  width: 260px; 
  height: 260px;
  border-radius: 30px 30px 0 0; 
}

.card-body {
  padding: 0px; 
}

button {
  width: 70px;
  margin: 10px;
  border: solid 2px deeppink;
  border-radius: 12px;
}

button:hover {
  background-color: rgb(226, 43, 214);
  border: solid 2px black;
}

a {
  color: black;
  text-decoration: none;
}

.container {
  padding-top: 300px; 
 
}

  </style>
  