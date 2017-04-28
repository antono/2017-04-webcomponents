class TodoItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  
  static get observedAttributes() { return ['done', 'title']; }
  
  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'done') {
      this.updateSlot();
    }
    this.render();
  }
  
  get done() {
    return this.getAttribute('done');
  }
  
  set done(val) {
    this.setAttribute('done', val);
  }
  
  get title() {
    return this.getAttribute('title');
  }
  
  set title(val) {
    this.setAttribute('title', val);
  }
  
  updateSlot() {
    if (this.done === 'true') {
      this.setAttribute('slot', 'done')
    } else {
      this.setAttribute('slot', 'todo')
    }
  }
  
  render() {
    const template = `
      <style>
        .done-true { text-decoration: line-through; }
      </style>
      <div class='done-${this.done}'>
        ${this.title}
      </div>
    `;
    
    this.shadow.innerHTML = template;
  }
}

customElements.define('todo-item', TodoItem);
