import { mNode } from 'DOM'

class Container extends mNode {
	create() {
		this
			.$is('div')
			.cn(['container'])
	}
}

export default Container