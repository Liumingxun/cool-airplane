import { describe, expect, it } from 'vitest'
import type { Plane } from '../types'
import { setupPlane } from '../src/game/plane'

const options = { y: 0, x: 0, speed: 1 }
describe('Plane', () => {
  describe('Plane Move', () => {
    it('moveDown', () => {
      const plane2: Plane = setupPlane({}, options)
      plane2.moveDown()
      expect(plane2.y).toBe(1)
    })

    it('moveUp', () => {
      const plane2: Plane = setupPlane({}, options)
      plane2.moveUp()
      expect(plane2.y).toBe(-1)
    })

    it('moveLeft', () => {
      const plane2: Plane = setupPlane({}, options)
      plane2.moveLeft()
      expect(plane2.x).toBe(-1)
    })

    it('moveRight', () => {
      const plane2: Plane = setupPlane({}, options)
      plane2.moveRight()
      expect(plane2.x).toBe(1)
    })
  })
})
