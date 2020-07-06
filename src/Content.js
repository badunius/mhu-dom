import { mNode } from 'DOM'

import Element from './Element'

class Header extends mNode {
	create(props) {
		this
			.$is('div')
			.cn(['content', 'block'])
			.text('Content')

		this.$skip('del')
	}

	update(props) {
		console.log('Content update', props)
		this.clear()
		props.forEach(el => {
			this.child(Element, el)
		})
	}
}

export default Header