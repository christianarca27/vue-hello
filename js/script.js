const { createApp } = Vue

  createApp({
    data() {
      return {
        title: 'Hello Vue!',
        imageLink: 'https://blog.keliweb.it/wp-content/uploads/2019/08/webdeveloper.jpg'
      }
    }
  }).mount('#app')