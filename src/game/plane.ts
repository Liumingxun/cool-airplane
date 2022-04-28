import type { Plane } from '../../types'

const defaultOptions = {
  x: 0,
  y: 0,
  speed: 5,
}

export function setupPlane(plane: Record<string, any>, options?: Record<string, number>): Plane {
  Object.assign(plane, defaultOptions, options)

  plane.moveUp = function() {
    plane.y -= plane.speed
  }
  plane.moveRight = function() {
    plane.x += plane.speed
  }
  plane.moveDown = function() {
    plane.y += plane.speed
  }
  plane.moveLeft = function() {
    plane.x -= plane.speed
  }

  return <Plane>plane
}
