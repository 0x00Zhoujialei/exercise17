/*
 * @Author: kael
 * @Date: 2018-02-01 17:41:25
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:38:36
 */

class ObserverList {
  constructor() {
    this.observerList = [];
  }
  add(observer) {
    this.observerList.push(observer);
  }
  remove(observer) {
    for (var i = 0; i < this.count(); i++) {
      if (observer === this.observerList[i]) {
        this.observerList.splice(i, 1);
      }
    }
  }
  get(index) {
    console.log(this.observerList)
    if (index >= 0 && index < this.count()) {
      return this.observerList[index];
    }
  }
  count() {
    return this.observerList.length;
  }
}

class Subject {
  constructor() {
    this.observers = new ObserverList();
  }
  addObserver(observer) {
    this.observers.add(observer);
  }
  removeObserver(observer) {
    this.observers.remove(observer)
  }
  notify(...args) {
    var count = this.observers.count();
    debugger;
    for (var i = 0; i < count; i++) {
      this.observers.get(i).update(args[0]);
    }
  }
}

module.exports = { Subject };
