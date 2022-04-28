import type { DefineComponent } from 'vue'
import { createRenderer } from 'vue'
import { Container, Sprite, Text, Texture } from 'pixi.js'

const renderer = createRenderer<Container, Container>({
  patchProp(el: Container, key: string, prevValue: any, nextValue: any) {
    switch (key) {
      case 'texture':
        (el as Sprite).texture = Texture.from(nextValue)
        break
      case 'x':
        el.x = nextValue
        break
      case 'y':
        el.y = nextValue
        break
    }
  },
  cloneNode(node: Container): Container {
    const con = new Container()
    node.children.forEach(child => con.addChild(child))
    return con
  },
  createComment(text: string) {
    return new Text(text)
  },
  createText(text: string): Container {
    return new Text(text)
  },
  insert(el: Container, parent: Container): void {
    if (el && parent)
      parent.addChild(el)
  },
  nextSibling(): Container | null {
    return null
  },
  parentNode(node: Container): Container | null {
    return node.parent
  },
  querySelector(): Container | null {
    return null
  },
  remove(): void {
  },
  setElementText(): void {
  },
  setScopeId(): void {
  },
  setText(): void {
  },
  createElement(type) {
    let elem
    switch (type) {
      case 'GContainer':
        elem = new Container()
        break
      case 'GSprite':
        elem = new Sprite()
        break
      default:
        throw new Error(`not exist type ${type}`)
    }
    return elem
  },
})

export function createApp(rootComponent: DefineComponent) {
  return renderer.createApp(rootComponent)
}
