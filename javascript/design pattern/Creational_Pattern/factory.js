// require(["dom"],function(dom){
//
// console.log(  "indside");
// var e=dom.create("div");
// console.log( e.id);
// function createInput(type) {
//   var e=dom.create("input");
//   e.type=type;
//   return e;
// }
//
// var controls={
//   text:function (options) {
//     var textElement=createInput("text");
//     textElement.value=options.value;
//
//   },
//   checkbox:function (options) {
//     var checkboxElement=createInput("text");
//     checkboxElement.checked=options.checked;
//
//   }
// }
//
// return (
//   {
//     create:function (options) {
//       var type=options.type?options.type.toLowerCase(): undefined ;
//       // if(!type || !controls[type])
//       // {
//       //   return new throw {message:type +" not suppoeted"}
//       // }
//         return controls[type](options);
//     }
//   }
// )
// });




// var dom=(function(){
// var _counter=0;
// function create(elem,id) {
//   var el=document.createElement(elem);
//   el.id=id || generateId();
//   return el;
// }
// function generateId(){
//   return ("ID"+_counter++);
//
// }
// return ({generateId:generateId,
//           create:create});
// }());


var controls=(function(){

console.log(  "indside");
var e=dom.create("div");
console.log( e.id);
function createInput(type) {
  var e=dom.create("input");
  e.type=type;
  return e;
}

var controls={
  text:function (options) {
    //console.log("in text");
    var textElement=createInput("text");
    textElement.value=options.value;
    return textElement;

  },
  checkbox:function (options) {
    var checkboxElement=createInput("checkbox");
    checkboxElement.checked=options.checked;
      return checkboxElement;
  }
}

return (
  {
    create:function (options) {
      var type=options.type?options.type.toLowerCase(): undefined ;
      // if(!type || !controls[type])
      // {
      //   return new throw {message:type +" not suppoeted"}
      // }
        return controls[type](options);
    }
  }
)
}());


// var text=controls.create({type:"text",value:"ayush"});
// var checkBox=controls.create({type:"checkbox",checked:true});
// document.body.appendChild(text);
// document.body.appendChild(checkBox);
