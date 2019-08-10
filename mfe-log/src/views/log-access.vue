<template>
  <div class="about">
    <h1>访问日志</h1>
  </div>
</template>
<script>
export default {
  name: 'LogAccess',
  data() {
    return {

    }
  },
  mounted() {
    bus.$on('addUser', (p) => {      
      console.log('listened addUser');
      console.log(p);
    })
  }
}
</script>
