//concepts:Constructur creation


var person=function(name,age){
  this.name=name;
  this.age=age;
  this.getInfo=function(){
    return "age of " + this.name +" is "+this.age ;
  }
}
//{},new function(){}

person.prototype.getInfoprop = function () {
  return "age of " + this.name +" is "+this.age ;
};

var ayush=new person("ayush",23);
var ankit=new person("ayush",23);
console.log(ayush.getInfo===ankit.getInfo);
console.log(ayush.getInfoprop===ankit.getInfoprop);


ayush["mother_name"]="nisha";
ayush.country="india";


Object.defineProperty(ayush,"father_name",{

  value:"jagdish",
  writable:false
})
Object.defineProperties(ayush,{
grandFatherName:{
  value:"bansi",
  writable:false
},
getFamilyTree:{
  value:function(){
    return  this. grandFatherName+"-->"+this.father_name+"-->"+this.name;
  }
}

})
console.log(ayush["father_name"]);
console.log(ayush.mother_name);

console.log(ayush.country);
ayush["father_name"]="jagdish sen";
console.log(ayush["father_name"]);
console.log(ayush.getFamilyTree());
