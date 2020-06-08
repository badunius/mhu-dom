const NODE = Symbol('node')

export class Synth {
  /**
   * Creates a wrapper around the node
   * @param {HTMLElement} node - source node
   */
  constructor(node) {
    this[NODE] = node
  }

  /**
   * Adds event listener
   * @param {String} evt - event name
   * @param {function} handler - handler function
   * @returns {Synth}
   */
  on(evt, handler) {
    this[NODE].addEventListener(evt, handler)
    return this
  }

  /**
   * Adds class names
   * @param {String[]} list - list of class names
   * @param {boolean} clean - should we clear classes first
   * @returns {Synth}
   */
  cn(list = [], clean = false) {
    if (clean) {
      this[NODE].classList.clear()
    }

    list
      .filter(c => !!c)
      .forEach(c => this[NODE].classList.add(c)) 
    return this
  }

  /**
   * Sets elements attributes
   * @param {Object} list - list of parameters to be set
   */
  attr(list = {}) {
    const map = new Map(list.entries())
    map.forEach((val, key) => {
      this[NODE][key] = val
    })
    return this
  }

  /**
   * Adds sub-element
   * @param {String} tag - tag name
   * @param {String} NS - namespace (optional)
   */
  add(tag, NS) {
    const res = NS 
      ? document.createElementNS(NS, tag)
      : document.createElement(tag)

    if (res) {
      this[NODE].appendChild(res)
      return new Synth(res)
    }
  }

  /**
   * Sets element's id
   * @param {String|number} id - id
   */
  id(id) { 
    this[NODE].id = id
    return this
  }

  /**
   * Sets element's text content
   * @param {String|number} content - text content
   */
  text(content) {
    this[NODE].textContent = content
    return this
  }

  /**
   * Returns element ref
   * @returns {HTMLElement}
   */
  get node() {
    return this[NODE]
  }
}