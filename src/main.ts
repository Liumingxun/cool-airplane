import type { DefineComponent } from 'vue'
import { game } from './game'
import { createApp } from './renderer'
import app from './App.vue'

document.body.append(game.view)
createApp(<DefineComponent>app).mount(game.stage)
