function User(name, homeState,training) {
  this.name = name;
  this.homeState = homeState;
    this.training = training;
  this.sayHello = function() {
    console.log(`Hello everybody, my name is ${this.name} whom you've been
mailing at ${this.email}!`);
  };
}
 
let lauren = new User('lauren', 'lauren@gmail.com');
lauren.sayHello(); //=> Hello everybody, my name is lauren whom you've been mailing at lauren@gmail.com!