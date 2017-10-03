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
export default {
  name: 'hello',
  data() {
    return {
      msg: '403 Forbidden Access'
    }
  }
}
</script>