<template>
  <div class="skills">
    <section class="bsb-timeline-2 py-5 py-xl-8">
      <div class="image-background" :style="{ backgroundImage: `url(${imageUrl})` }">
        <div class="container custom-padding-top">
          <div class="row justify-content-start">
            <div class="skills-column">
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
            <div class="skills-column">
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
 
}
.bsb-timeline-2 {
  padding-top: 8rem;
  padding-bottom: 8rem;
}
.card {
  background-color: rgba(244, 151, 142, 0.238);
  padding: 10px;
}
.card:hover {
  box-shadow: 0 0 10px 0 rgba(10, 16, 10, 20);
  background-color: #f0a6ca;
}
.custom-padding-top {
  padding-top: 2rem !important;
}
.skills-column {
  width: 45%;
  margin: 20px;
}
h1 {
  padding-bottom: 30px;
  font-weight: bold;
}
@media (max-width: 768px) {
  .skills-column {
    width: 100%;
    margin: 10px 0;
  }
  .skill-image {
    width: 50px;
    height: 50px;
  }
  h1 {
    font-size: 1.5rem;
  }
}
@media (max-width: 480px) {
  .skill-image {
    width: 40px;
    height: 40px;
  }
  h1 {
    font-size: 1.25rem;
  }
  .card {
    padding: 5px;
  }
  .card-title {
    font-size: 1rem;
  }
  .card-text {
    font-size: 0.875rem;
  }
}
</style>
