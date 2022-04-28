<script setup>
import { reactive } from 'vue'
import { onKeyDown } from '@vueuse/core'
import { setupPlane } from '../game/plane'
import planeImg from '~a/plane.png'

const plane = setupPlane(reactive({}), { x: 50, y: 80 })

onKeyDown(['w', 'W', 'ArrowUp'], () => {
  plane.moveUp()
})
onKeyDown(['a', 'A', 'ArrowLeft'], () => {
  plane.moveLeft()
})
onKeyDown(['d', 'D', 'ArrowRight'], () => {
  plane.moveRight()
})
onKeyDown(['s', 'S', 'ArrowDown'], () => {
  plane.moveDown()
})

</script>

<template>
  <GContainer :x="plane.x" :y="plane.y">
    <GSprite :texture="planeImg" />
  </GContainer>
</template>

<style scoped>

</style>
