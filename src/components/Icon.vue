<template>
  <component :is="icon" class="ct-w-5 ct-h-5" />
</template>

<script>
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
  setup(props, ctx) {
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
