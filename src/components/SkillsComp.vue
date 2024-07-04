<template>
<div class="skills">
  <section class="bsb-timeline-2 py-5 py-xl-8">
  <div class="image-background" :style="{ backgroundImage: `url(${imageUrl})` }">
    <div class="container custom-padding-top">
      <div class="row justify-content-start">
        <div class="w">
          <h1>Technical Skills</h1>
          <ul class="timeline">
            <li class="timeline-item" v-for="(skill, index) in skills.hardSkills" :key="index">
              <span class="timeline-icon">
                <img :src="skill.image" alt="Skill image" class="skill-image">
              </span>
              <div class="timeline-body">
                <div class="timeline-content">
                  <div class="card border-0">
                    <div class="card-body p-0">
                      <h2 class="card-title mb-3">{{ skill.name }}</h2>
                      <p class="card-text m-0">{{ skill.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="w">
          <h1>Soft Skills</h1>

            <ul class="timeline">
              <li class="timeline-item" v-for="(skill, index) in skills.softSkills" :key="index">
                <span class="timeline-icon">
                  <img :src="skill.image" alt="Skill image" class="skill-image">
                </span>
                <div class="timeline-body">
                  <div class="timeline-content">
                    <div class="card border-0">
                      <div class="card-body p-0">
                        <h2 class="card-title mb-3">{{ skill.name }}</h2>
                        <p class="card-text m-0">{{ skill.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
      </div>
    </div>
  </div>
</section>
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
    skills() {
      return this.$store.state.skills;
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
html, body {
  height: 100%;
  margin: 0;

}
.skill-image {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
  
.image-background {
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.bsb-timeline-2 {
  padding-top: 8rem; 
  padding-bottom: 18rem; 
}

.card{
  background-color: rgba(244, 151, 142, 0.238); 
}

.custom-padding-top {
  padding-top: 2rem !important;
}
.w{
  width: 40%;
  margin-right: 40px;
  margin-left: 40px;

}
h1{
  padding-bottom: 30px;
  font-weight: bold;
}
 @media (max-width: 768px) {
    .skills {
      font-size: medium;
      padding-top: 100px;
      margin-top: 100px;
      display: flex;
    }
    .card{
      margin-left: 80px;
      margin-right: 80px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px,2fr));
    }

  } 

</style>