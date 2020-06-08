import { Mhu } from 'DOM'

import App from './App'

const inst = Mhu.create(
	App,
	'body'
)

console.log(inst.$el)