<template lang="html">
  <div>
    <h2>Skills</h2>
    <table>
      <thead>
        <tr>
          <td>Skill Name</td>
          <td>Ranks</td>
          <td>Ability Mod</td>
          <td>Total</td>
        </tr>
      </thead>
      <tbody>
        <skill-single
          v-for="skill in computedSkills"
          :skillName="skill.skillName"
          :ranks="skill.ranks"
          :mod="skill.mod"

        ></skill-single>
      </tbody>
    </table>
  </div>
</template>

<script>
import SkillSingle from '../elements/SkillSingle.vue'
export default {
  props: {
    skills: Array,
    abilities: Array
  },
  components: {
    SkillSingle
  },
  data() {
    return {
      computedSkills: []
    }
  },
  created() {
    this.computedSkills = this.skills;

    for(let i=0;i<this.skills.length;i++) {
      let skill = this.skills[i];
      for (let n = 0; n < this.abilities.length; n++) {
        if (this.abilities[n].title == skill.ability) {
          skill.mod = (this.abilities[n].score - 10) / 2;
        }
      }
    }
    console.log(this.skills);
    console.log(this.abilities);
  }
}
</script>

<style lang="scss" scoped>
thead td {
  font-weight: bold;
}
</style>
