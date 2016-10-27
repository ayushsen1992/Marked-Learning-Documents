//
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

define(function(){

  var _counter=0;
  function create(elem,id) {
    var el=document.createElement(elem);
    el.id=id || generateId();
    return el;
  }
  function generateId(){
    return ("ID"+_counter++);

  }
  return ({generateId:generateId,
            create:create});
  });
