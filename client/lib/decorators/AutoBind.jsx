autoBind = function(ComposedComponent) {
  return class AutoBindComponent extends ComposedComponent {
    constructor(props) {
      super(props);

      var methodNames = Object.getOwnPropertyNames(ComposedComponent.prototype)
        .filter(prop => typeof this[prop] === 'function');

      this.bind(methodNames);
    }

    bind(methods) {
      methods.forEach(method => {
        this[method] = this[method].bind(this);
      });
    }
  }
}
