<template lang="html">
  <tr>
    <td>{{ skillName }}</td>
    <td>{{ ranks }}</td>
    <td>{{ mod }}</td>
    <td>{{ ranks + mod }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    skillName: String,
    ranks: Number,
    mod: Number
  }
}
</script>

<style lang="css" scoped>
</style>
