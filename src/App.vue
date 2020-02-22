<template lang="html">
  <div class="">
    <ability-scores
      :abilities="abilities"
    ></ability-scores>
    <definition
      title="Feats"
      :definitions="feats"
    ></definition>
    <definition
      title="Passives"
      :definitions="passives"
    ></definition>
    <skills
      :skills="skills"
      :abilities="abilities"
    ></skills>
  </div>
</template>

<script>
import AbilityScores from './components/AbilityScores.vue'
import Definition from './components/Definition.vue'
import Skills from './components/Skills.vue'

export default {
  components: {
    AbilityScores,
    Definition,
    Skills
  },
  data() {
    return {
      abilities: [
        {
          title: 'STR',
          score: 12
        },
        {
          title: 'DEX',
          score: 16
        },
        {
          title: 'CON',
          score: 13
        },
        {
          title: 'INT',
          score: 15
        },
        {
          title: 'WIS',
          score: 9
        },
        {
          title: 'CHA',
          score: 10
        }
      ],
      feats: [
        {
          title: 'Banner of Doom (Combat)',
          simpleDescription: 'The mere sight of your fiendish banner is enough to send ripples of fear through your enemies.',
          description: 'Prerequisites: Base attack bonus +8, banner class feature, tiefling. Benefit: As long your banner is clearly visible, all enemies within 60 feet take a –2 penalty on saving throws against fear. This penalty does not stack with other effects that provide enemies with penalties on saving throws against fear.'
        },
        {
          title: 'Barroom Brawler (Combat)',
          simpleDescription: 'You have learned how to mimic the combat tricks and forms of others.',
          description: 'Prerequisite(s): Base attack bonus +4. Benefit: Once per day as a move action, you can gain the benefit of a combat feat that you do not possess for 1 minute. You must otherwise meet the feat’s requirements. Special: If you have the martial flexibility class feature, this feat instead grants you one additional use per day of that ability.'
        }
      ],
      passives: [
        {
          title: 'Turret Archer',
          simpleDescription: 'Stand Still = Shoot Better',
          description: 'For each round without moving, the archer adds an additional +1 to his attack bonus.'
        }
      ],
      skills: [
        {
          skillName: 'Acrobatics',
          ranks: 1,
          ability: "DEX"
        },
        {
          skillName: 'Jump',
          ranks: 1,
          ability: "STR"
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>

</style>
