# mhu-dom
Вам что здесь, mhu-dom намазано, что ли?)

## Mhu
Приложение создаётся методом `Mhu.create()`. Можно создать сразу несколько в разных хостах. Мало ли чего.

### Mhu.create(component, host)
Создаёт компонент внутри указаного хоста. Поскольку Mhu наследуется от mNode, синтаксис схож
- `component` - Строка с имененм тэга, либо функция-конструктор компонента (унаследованного от `mNode`)
- `host` - Либо строка, тогда цель ищется через `document.querySelector`, либо объект, но тогда это должен быть HTMLElement (или нет, хз, что будет)

Пример:
```js
import { Mhu } from 'DOM'

import App from './App'

const inst = Mhu.create(
	App,
	'body'
)
```

или

```js
import { Mhu } from 'DOM'

const inst = Mhu.create(
	'button,
	'body'
)
```

### ДевТул
Нет такого, конечно, пока Mhu создаётся в дев-режиме вне зависимости от режима и засовывает ссылку на себя в окно

То есть, можно поглазеть на VM, набрав в консоли `Mhu`

## Synth
Обёртка для HTMLElement, реализует ряд полезных функций. Такой jQuery на минималках.

Все методы `Synth` возвращают изменённый объект, то есть их можно чейнить.

### new Synth(node: HTMLElement): Synth
Создаёт обёртку вокруг указанного узла

### Synth.on(event: string, handler: function): Synth
Вешает на узел обработчик через `addEventListener`

### Synth.cn(list: string[], clean: boolean = false): Synth
Навешивает на узел классы из списка `list`, предварительно отфильтровывая falsy элементы. То есть, да, можно делать `.cn([this.visible && 'visible'])`. Если флаг `clean` установлен в `true`, предварительно очистит все классы, которые уже навешаны.

### Synth.attr(list: {[attr: string]: value}): Synth
Навешивает на узел аттрибуты.

### Synth.add(tag: string, NS: string): Synth
Создаёт дочерний узел по указанному тэгу. Если указана ещё и NS, то создаст узел через `document.createElementNS(NS, tag)` (для всяких там SVG).

Если удалось создать узел, добавит его потомком к текущему и вернёт `Synth`-обёртку для созданного узла. Единственное исключение.

### Synth.id(id: string): Synth
Устанавливает `id` узла.

### Synth.text(content: string): Synth
Устанавливает `textContent` узла.

### Synth.clear(): Synth
Сносит `innerHTML` узла.

### Synth.node: HTMLElement
Геттер. Возвращает HTMLElement, вокруг которого обёрнут `Synth` (если уж совсем неймётся).

## mNode
Базовый компонет, реализует базовый функционал компонента. Я, вообще, за разумное сочетание композиции и наследования. Что считать разумным, пусть каждый решает для себя сам.

### Жизненный цикл компонента
Хуёв и полон лишений. Основные методы жизненного цикла:

#### create(props)
Компонент создали, навесили на него хост, подсадили в потомки родителю, но ещё не создали ему элемент. Хорошо бы начать его со строк `this.$is(tag)`, чтобы обзавестись собственным узлом в DOM, но это не обязательно... Наверное =/

#### update(props)
Сверху (или внутри {или сбоку}) случилось что-то, что изменило пропсы компонента. Соответственно, был вызван этот метод, чтобы компонент отреагировал на новые пропсы.

#### free() // не реализован
Компонент попросили убиться. Делать ничего не нужно, но время для последнего слова есть. Можно отменить подписки, например.

## возвращаясь к mNode
Концепция компонентов предсполагает, что каждый из них самостоятелен, самодостаточен и сам подтирает свою жопу. Никакой халявы, никакой реконсиляции. А теперь, ебитес.

А теперь давайте о том, что они умеют по базе.

### mNode.$is(tag: string): Synth
Создаёт узлу `HTMLElement`. Важно, если у родителя не было создано узла, всё грохнется. Потомками виртуальных компонентов могут быть только виртуальные компоненты. Считайте это "семейным проклятьем" (не знаю, зачем оно вам надо).

### mNode.$ch: Set&lt;mNode&gt;
Список всех узлов потомков. Мало ли, пригодится.

### mNode.$el: Synth
Возвращает `Synth` для узла этого компонета. То есть, в `create` можно заявить, что этот узел `this.$is('button')` и тут же через `.$el` навесить ему `.on('click', this.onClick.bind(this))` или другое что-то.

### mNode.$on(event: string, handler: function)
Вешает обработчик на сигнал от дочернего узла.

ВАЖНО! Не путать с `this.$el.on` - события элемента ловиться не будут, будут ловиться только эмиты дочек.

ВАЖНО! Если узел не принимает событие дочки, то оно уйдёт родителю узла.

### mNode.$skip(event: string)
Явно указывает, что событие нас не интересовает, поэтому оно сразу будет уходить родителю. То есть, если повесить событие на `$on` и на `$skip`, то `$skip` будет иметь больший приоритет.

### mNode.$emit(event: string, payload: any)
Отправить родителю событие, которое он должен поймать, или не поймать, или пропустить.

### mNode.child(comp: string|function = 'div', props = {}): mNode
Создаёт дочерний узел. Если вообще ничего не указывать, то получится `mNode` с узлом типа `div`. Но можно указать любой другой тег. Или передать функцию-конструктор компонента. И пропсы ему передать можно, начальные.

### mNode.clear(): Synth
Сносит весь внутренний ХТМЛ узла и всех потомков(`$ch`), возвращает девственно чистый узел.

### mNode.$$call(event: string, payload: any)
Пожалуйста, не нужно трогать и/или переопределять этот метод. Он отвечает за маршрутизацию событий. Если вы его перекрыли, не нойте как побитые сучки, вас предупреждали.

## Router
Да, однажды здесь будет охуенный (нет) history-роутер.
