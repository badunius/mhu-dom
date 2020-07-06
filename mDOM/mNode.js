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
const ON = Symbol('ON')
const SKIP = Symbol('SKIP')

export class mNode {
	constructor(host) {
		this.$host = host
		this[EL] = null
		this[ON] = new Map()
		this[SKIP] = new Set()
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

		return this.$el
	}

	child(comp = 'div', props = {}) {
		const res = build(comp, this[EL])
		if (!!res) {
			this.$ch.add(res)
			res.create(props)
			res.$emit = (event, payload) => {
				this.$$call(event, payload)
			}
			return res
		}
		return null
	}

	clear() {
		this.$el.clear()
		this.$ch.clear()
		return this.$el
	}

	/**
	 * @returns {Synth}
	 */
	get $el() {
		return new Synth(this[EL])
	}

	$on(event, handler) {
		this[ON].set(event, handler)
	}

	$skip(event) {
		this[SKIP].add(event)
	}

	/***
	 * Incoming events
	 */
	$$call(event, payload) {
		if (this[SKIP].has(event)) {
			this.$emit(event, payload)
		}

		if (this[ON].has(event)) {
			this[ON].get(event)(payload)
		} else {
			this.$emit(event, payload)
		}
	}

	$emit(event, payload) {}
}