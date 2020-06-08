import { Synth } from './Synth'

export const build = (comp, parent) => {
	let node
	switch(typeof comp) {
		case 'string':
			node = new mNode(parent)
			node.$is(comp)
			break
		case 'function':
			node = new comp(parent)
			break
		default:
			console.error('failed to create node', comp)
			return
	}
	return node
}

const EL = Symbol('EL')

export class mNode {
	constructor(host) {
		this.$host = host
		this[EL] = null
		this.$ch = new Set()
	}

	create(props) {}

	update(props) {}

	$is(tag) {
		const node = document.createElement(tag)

		if (!!node) {
			if (!!this[EL]) {
				this[EL].remove()
			}
			this[EL] = node
			this.$host.appendChild(node)
		} else {
			console.error('failed to create an element "%s"', tag)
		}
	}

	child(comp = 'div', props = {}) {
		const res = build(comp, this[EL])
		if (!!res) {
			this.$ch.add(res)
			res.create(props)
			return res
		}
		return null
	}

	/**
	 * @returns {Synth}
	 */
	get $el() {
		return new Synth(this[EL])
	}
}