import { mNode } from 'DOM'

class Element extends mNode {
	create(props) {
		this.id = props

		this
			.$is('div')
			.cn(['block', 'row'])
			.text('Item ' + props)
		
		this
			.child('button')
			.$el
			.on('click', this.onRemove.bind(this))
			.text('del')
	}

	onRemove() {
		this.$emit('del', this.id)
	}
}

export default Element