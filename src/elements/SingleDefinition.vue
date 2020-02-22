<template lang="html">
  <div class="definition">
    <h3>{{ title }}</h3>
    <p>{{ simpleDescription }}</p>
    <p v-show="showDescription" class="full-description">{{ description }}</p>
    <button @click="showDescription = !showDescription">Toggle Full Descripton</button>

  </div>
</template>

<script>
export default {
  props: ['title','simpleDescription','description'],
  data() {
    return {
      showDescription: false
    }
  }
}
</script>

<style lang="css" scoped>
</style>
