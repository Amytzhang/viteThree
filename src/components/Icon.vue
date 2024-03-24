<template>
  <component :is="icon" class="ct-w-5 ct-h-5" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import * as heroIcons from '@heroicons/vue/outline'
export default defineComponent({
  name: 'icon',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup(props) {
    let name = ''

    props.name.split('-').forEach((v) => {
      name += v[0].toUpperCase() + v.substr(1)
    })

    const icon = heroIcons[name + 'Icon']

    return {
      icon
    }
  }
})
</script>
