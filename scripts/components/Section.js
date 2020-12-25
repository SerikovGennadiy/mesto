export default class Section {
  constructor({items, renderer}, sectionSelector){
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(sectionSelector);
  }

  clear = () => {
    this._container.innerHTML = '';
  }

  addItem = (view) => {
    this._container.prepend(view);
  }

  renderItems = () => {
    this.clear();

    this._items.forEach((item)=> {
      this._renderer(item);
    });
  }
}
