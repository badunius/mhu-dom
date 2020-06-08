import { mNode } from 'DOM'

class App extends mNode {
	create() {
		this.$is('h3')
		this.$el.text('App')
		this.child('button').$el.text('button')
	}
}

export default App