class Person {
  #height = 180;

  constructor(name, age) {
    this.name = name;
    this.age = age;

    this._salary = 0;
  }

  /**
   * @param {number} value
   */
  set salary(value) {
    if (value < 0) {
      this._salary = 0;
    } else {
      this._salary = value;
    }
  }

  get salary() {
    return `${this._salary}$`;
  }

  static getTime() {
    console.log(this.getDate());
    return Date.now();
  }

  static getDate() {
    return Date.now();
  }

  sayHi() {
    console.log(`Hello, my name is ${this.name}!`);
  }

  getHeight() {
    console.log(this.#height);
  }
}

class Employee extends Person {
  constructor(name, age, salary) {
    super(name, age);
    this._salary = salary;
  }
}

const somePerson = new Person('John', 22);
console.log(somePerson.name);
somePerson.getHeight();
somePerson.sayHi();
somePerson.salary = -2500;
console.log(somePerson.salary);

somePerson._salary = 3000;
console.log(somePerson._salary);
console.log(somePerson.salary);

console.log(Person.getTime());

const someEmployee = new Employee('John', 22, 1500);
console.log(someEmployee.salary);
someEmployee.getHeight();