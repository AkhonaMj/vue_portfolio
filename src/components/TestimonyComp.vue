<template>
 <div class="image-background" :style="{ backgroundImage: `url(${imageUrl})` }">
    <h1>What others say about me</h1>
    <div class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(testimonial, index) in testimonials" :key="index" :class="['carousel-item', { 'active': index === 0 }]">
          <div class="testimonial-container">
            <img :src="testimonial.imageUrl" class="img-carousel" alt="Testimonial image">
            <div class="testimonial-caption">
              <h2>{{ testimonial.name }}</h2>
              <h5>{{ testimonial.relationship }}</h5>
              <p>{{ testimonial.testimony }}</p>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target=".carousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target=".carousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
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
    testimonials() {
        return this.$store.state.testimonials;
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
.testimonial-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
    
.img-carousel {
    width: 250px;
    height:350px;
    margin-right: 20px;
    border-radius:30px;

}
    
.testimonial-caption {
    text-align: left;
}
.carousel{
    background-color: rgba(244, 151, 142, 0.51); 
    width:755px;
    border-radius:30px;
    color:black;
}
@media (max-width: 992px) {
  .img-carousel {
    height: auto; /* Adjusted height for smaller screens */
  }
}

@media (max-width: 768px) {
  .carousel {
    max-width: 600px; /* Adjusted max-width for smaller screens */
  }
}
</style>