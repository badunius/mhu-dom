import { mNode } from 'DOM'

class Header extends mNode {
	create() {
		this
			.$is('div')
			.cn(['block'])
			.text('Header')
	}
}

export default Header