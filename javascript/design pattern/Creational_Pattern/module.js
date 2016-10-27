var Person={
 name:"Ayush",
 age:23,
ageAfterNYears:function (n){
  return (n+this.age);
}
};


Person.age="fhjkshf";
console.log(Person.age);
console.log(Person.ageAfterNYears(10))








// var Person=(function(){
// var name="Ayush";
// var age=23;
// function ageAfterNYears(n){
//   return (n+age);
// }
//   return ({calculateAge:ageAfterNYears,
//             })
// }());


console.log(Person.Age);
//console.log(Person.calculateAge(10));
