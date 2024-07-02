<template>
  <section class="bsb-timeline-2 py-5 py-xl-8">
    <div class="image-background" :style="{ backgroundImage: `url(${imageUrl})` }">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-10 col-md-8 col-xl-6">
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
                        <p class="card-text m-0">{{ skill.year }}</p>
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

<style>
.skill-image {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
