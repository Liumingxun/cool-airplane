import type { Container } from 'pixi.js'

export interface Plane extends Container{
  x: number
  y: number
  speed: number
  moveDown: () => void
  moveUp: () => void
  moveLeft: () => void
  moveRight: () => void
}
