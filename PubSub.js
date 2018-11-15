/*
 * @Author: kael
 * @Date: 2018-02-01 17:41:25
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:39:45
 */

module.exports = class PubSub {

  constructor() {
    this.subscribers = {};
  }

  subscribe(type, fn) {
    if (!this.subscribers[type]) {
        this.subscribers[type] = [];
    }
    this.subscribers[type].push(fn);
  }

  unsubscribe(type, fn) {
    if (this.subscribers[type]) {
      for (var i = 0; i < this.subscribers[type].length; i++) {
        if (fn === this.subscribers[type][i]) {
          this.subscribers[type].splice(i, 1)
          return;
        }
      }
    }
  }

  publish(type, ...args) {
    if (this.subscribers[type]) {
      var i = this.subscribers[type].length;
      while (i-- > 0) {
        this.subscribers[type][i](args[0]);
      }
    }
  }

}
