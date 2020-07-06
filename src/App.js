import { mNode } from 'DOM'

import Container from './Container'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'

class App extends mNode {
	create() {
		this.list = []

		this.$is('div').cn(['container'])
		this.child(Header)
		this.content = this.child(Content, {list: this.list})
		this.child(Footer)

		this.$on('add', this.onAdd.bind(this))
		this.$on('del', this.onDel.bind(this))
	}

	onAdd(payload) {
		this.list.push(payload)
		this.reRender()
	}

	onDel(id) {
		console.log('del', id)
		this.list = this.list.filter(el => el !== id)
		this.reRender()
	}

	reRender() {
		this.content.update(this.list)
	}
}

export default App