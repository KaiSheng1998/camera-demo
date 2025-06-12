class EventEmmiter {
  constructor() {
    this.events = {};
  }

  on(event, fn) {
    this.events[event] || (this.events[event] = []);
    this.events[event].push(fn);
  }

  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach(fn => fn(...args));
    }
  }

  emitCallback(event, callback, ...args) {
    if (this.events[event]) {
      this.events[event].forEach(fn => fn(...args));
    }
    callback && callback();
  }

  remove(event, fn) {
    if (fn) {
      const fns = this.events[event];
      if (Array.isArray(fns)) {
        fns.forEach((f, index) => {
          if (f === fn) {
            fns.splice(index, 1);
          }
        });
      }
    } else {
      this.events[event] = null;
    }
  }
}

export default new EventEmmiter();
