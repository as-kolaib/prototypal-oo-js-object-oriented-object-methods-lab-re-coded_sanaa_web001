function BoardMember(name, homeState,training) {
  this.name = name;
  this.homeState = homeState;
    this.training = training;
  this.BoardMember  = function() {
   return 'No, I must disagree';
  };
   this.approve   = function() {
   return 'You can do that!';
  };
    this.BoardMember  = function() {
   return 'No, I must disagree';
  };
   this.approve   = function() {
   return 'You can do that!';
  };
  
}
 
let lauren = new User('lauren', 'lauren@gmail.com');
lauren.sayHello(); //=> Hello everybody, my name is lauren whom you've been mailing at lauren@gmail.com!