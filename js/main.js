const { createApp } = Vue

createApp({
  data() {
    return {
      content: 'Elden Ring',
      imgSrc: 'https://p325k7wa.twic.pics/high/elden-ring/elden-ring/00-page-setup/Elden-Ring-KF01.jpg?twic=v1/resize=700/step=10/quality=80'
    }
  }
}).mount('#app')