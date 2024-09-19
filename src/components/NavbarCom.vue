<template lang="">
    <div>
      <nav class="navbar navbar-expand-lg fixed-top navbarScroll custom-navbar">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Akhona</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link> 
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link">About</router-link> 
              </li>
              <li class="nav-item">
                <router-link to="/projects" class="nav-link">Projects</router-link> 
              </li>
              <li class="nav-item">
                <router-link to="/resume" class="nav-link">Education and Experience</router-link> 
              </li>
              <li class="nav-item">
                <router-link to="/contact" class="nav-link">Get in Touch</router-link> 
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    
  
  }
  </script>
  
  <style scoped>
  .custom-navbar {
    background-color: #f0a6ca; 
  }
  
  .nav-item {
    margin-left: 25px; 
  }
  
  .nav-link {
    text-decoration: none !important; 
    font-size: 20px; 
    color: black; 
    font-weight:bold;
  }
  
  .nav-link:hover {
    color: #ff006e;
  }
  </style>
  