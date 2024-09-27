<template>
  <div class="image-background" :style="{ backgroundImage: `url(${imageUrl})` }">
    <div class="about" v-if="aboutMe">
      <h1>About Me</h1>
      <p>{{ aboutMe }}</p>
      <div class="about-image">
      </div>
    </div>
    <Skills />
  </div>
</template>

<script>
import Skills from "../components/SkillsComp.vue"
export default {
  components: { Skills },
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

<style scoped>
.about {
  padding: 20px;
}

.about p {
  font-size: 18px;
  background-color: rgba(244, 151, 142, 0.238);
  width: 100%;
  max-width: 800px; 
  margin: 0 auto; 
  padding: 20px; 
  margin-top: 40px; 
  margin-bottom: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
}

h1 {
  margin-top: 40px;
  text-align: center;
  margin-bottom: 10px; 
}


@media (max-width: 768px) {
  .about p {
    font-size: 16px; 
    width: 90%; 
    padding: 15px; 
  }

  h1 {
    margin-top: 30px;
    font-size: 24px;
  }
}
</style>
