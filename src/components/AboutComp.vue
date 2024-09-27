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
.about p{
  font-size: 18px;
  background-color: rgba(244, 151, 142, 0.238);
  width: 50em;
  margin-left: 10em;
  margin-top: 100px;
  padding: 30px;
  margin-bottom: 30px;
  justify-content: center;
}
h1{
  margin-top: 60px;
  text-align: center;
  margin-bottom: -3px;

}

</style>
