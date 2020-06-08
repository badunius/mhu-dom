import { mNode, build } from './mNode'
import { ERR } from './messages'

class mhuVM extends mNode {
	constructor(dev) {
		super()
		this.$inst = new Map()

		if (dev) {
			window['Mhu'] = this
		}
	}

	create(component, destination) {
		let root = null
		switch(typeof destination) {
			case 'string':
				root = document.querySelector(destination)
				break
			case 'object':
				root = destination
				break
			default:
				console.error(ERR.TARGET)
				return
		}

		if (!root) {
			console.error()
			return
		}

		const node = build(component, root)
		if (!!node) {
			node.create()
			this.$inst.set(root, node)
			return node
		}
	}
}

export const Mhu = new mhuVM(true)

export * from './mNode'