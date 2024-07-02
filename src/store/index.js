import { createStore } from 'vuex'

export default createStore({
  state: {
    aboutMe:null,
    projects:null,
    education:null,
    skills:null,
    workExp:null,
    testimonials:null,

  },
  getters: {
  },
  mutations: {
    setAboutMe(state, payload){
      state.aboutMe = payload;
      console.log(state.aboutMe);

    },
    setProjects(state, payload){
      state.projects = payload;
    },
    setEducation(state, payload){
      state.education = payload;
    },
    setSkills(state, payload){
      state.skills = payload;
    },
    setWorkExp(state, payload){
      state.workExp = payload;
    },
    setTestimonials(state, payload){
      state.testimonials = payload;
    } 

  },

  actions: {
    async getApiData({commit}){
      try{
        let api = await fetch('https://akhonamj.github.io/first_api/data/data.json')
        let convertedData = await api.json()
        console.log('API data:', convertedData);
        commit('setAboutMe', convertedData.aboutMe)
        commit('setProjects', convertedData.projects)
        commit('setEducation', convertedData.education)
        commit('setSkills', convertedData.skills)
        commit('setWorkExp', convertedData.workExp)
        commit('setTestimonials', convertedData.testimonials)
      }catch(error){
        console.error(error);
      }
    }
  },
  modules: {
  }
})
