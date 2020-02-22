<template lang="html">
  <div class="">
    <h2>{{ title }}</h2>
    <single-definition v-for="definition in definitions"
      :title="definition.title"
      :simpleDescription="definition.simpleDescription"
      :description="definition.description"
    ></single-definition>
  </div>
</template>

<script>
import SingleDefinition from '../elements/SingleDefinition.vue'
export default {
  props: {
    title: String,
    definitions: Array
  },
  components: {
    SingleDefinition
  }
}
</script>

<style lang="css" scoped>
</style>
