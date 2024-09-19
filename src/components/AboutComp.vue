<template>
  <div class="image-background" :style="{ backgroundImage: `url(${imageUrl})` }">
    <div class="about" v-if="aboutMe">
      <h1 class="about">About Me</h1>
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

<style>
.about p{
  font-size: 18px;
  background-color: rgba(244, 151, 142, 0.238);
  width: 39em;
  margin-left: 30em;
  margin-top: 10em;
  padding: 30px;

 


}
</style>
