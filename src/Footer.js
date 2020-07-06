import { mNode } from 'DOM'

class Header extends mNode {
	create() {
		this
			.$is('div')
			.cn(['block', 'row'])
		
		const add = this
			.child('button')
			.$el
			.text('add')
			.on('click', this.onAdd.bind(this))
		const del = this
			.child('button')
			.$el
			.text('del')
	}

	onAdd(evt) {
		this.$emit('add', Math.random())
	}
}

export default Header