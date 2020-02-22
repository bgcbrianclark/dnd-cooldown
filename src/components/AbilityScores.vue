<template lang="html">
  <div class="ability-scores">
    <h2>Ability Scores</h2>
      <table>
        <thead>
          <tr>
            <td></td>
            <td>Score</td>
            <td>Mod</td>
          </tr>
        </thead>
        <ability-single v-for="ability in abilities" :title="ability.title" :score="ability.score"></ability-single>
      </table>

  </div>
</template>

<script>
import AbilitySingle from '../elements/AbilitySingle.vue'

export default {
  components: {
    AbilitySingle
  },
  props: {
    abilities: Array
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" >

</style>
