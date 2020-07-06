import { mNode } from 'DOM'

import { Container } from './Container.js'

class App extends mNode {
	create() {
		this
			.$is('div')
		const cont = this
			.child(Container)

		cont
			.child('button')
			
	}
}

export default App