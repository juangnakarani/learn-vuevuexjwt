<template>
  <div class="jumbotron">
    <div class="container">
      <div class="starter-template">
       <h2>{{ msg }}</h2>
      </div>
    </div>
    <!-- Example row of columns -->
    <div class="row">
    </div>
  </div>
</template>

<script>
import router from '@/router/index.js'
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Admin Page'
    }
  },
  created: function () {
    // `this` points to the vm instance
    console.log('a is: ' + this.msg)
    router.push({ path: '/403' })

 
  }
}
</script>