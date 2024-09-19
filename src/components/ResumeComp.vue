<template>
    <div class="image-background" :style="{ backgroundImage: `url(${imageUrl})` }">
      <div class="container">
        <h1>Education and Work Experience</h1>
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body-ed">
                <h2>Education</h2>
                <div class="hori-timeline" dir="ltr">
                  <ul class="list-inline events">
                    <li class="list-inline-item event-list" v-for="education in education" :key="education.year">
                      <div class="px-4">
                        <h4>{{ education.year }}</h4>
                        <h5>{{ education.Institution }}</h5>
                        <h6>{{ education.description }}</h6>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body-work">
                <h2>Work Experience</h2>
                <div class="hori-timeline" dir="ltr">
                  <ul class="list-inline events">
                    <li class="list-inline-item event-list" v-for="workExp in workExp" :key="workExp.year">
                      <div class="px-4">
                        <h4>{{ workExp.year }}</h4>
                        <h5>{{ workExp.placeOfWork }}</h5>
                        <h6>{{ workExp.description }}</h6>
                      </div>
                    </li>
                  </ul>
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
      };
    },
    computed: {
      education() {
        return this.$store.state.education;
      },
      workExp() {
        return this.$store.state.workExp;
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
  };
  </script>
  
  <style scoped>
  h1, h2 {
    text-align: center;
    margin-top: 400px;
  }
  
  .image-background {
    padding: 20px 0;
    background-size: cover;
    min-height: 100vh;
  }
  
  .hori-timeline .events {
    border-top: 3px solid deeppink;
  }
  
  .hori-timeline .events .event-list {
    display: block;
    position: relative;
    text-align: center;
  }
  
  .hori-timeline .events .event-list:before {
    content: "";
    position: absolute;
    height: 36px;
    border-right: 2px dashed deeppink;
    top: 0;
  }
  
  .card {
    background-color: rgba(244, 151, 142, 0.238);
    border: none;
    width: 100%;
    max-width: 100%;
    font-size: medium;
    margin-top: 20px;
    text-align: center;

  }
  
  .card-body-ed {
    margin-bottom: 0px;
  }
  
  .card-body-work {
    padding-top: 20px;
  }
  
  .container {
    padding-top: 40px;
  }
  
  @media (min-width: 1140px) {
    .hori-timeline .events .event-list {
      display: inline-block;
      width: 24%;
      padding-top: 45px;
    }
  
    .card-body-work {
      padding-top: 30px;
    }
  }
  </style>
  