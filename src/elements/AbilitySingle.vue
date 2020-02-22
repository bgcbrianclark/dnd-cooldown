<template lang="html">
  <tr>
    <td>{{ title }}:</td>
    <td>{{ score }}</td>
    <td>{{ mod }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    title: String,
    score: Number
  },
  data() {
    return {
      mod: Math.floor((this.score - 10) / 2)
    }
  }
}
</script>

<style lang="scss" scoped>
td { text-align: right; }
</style>
