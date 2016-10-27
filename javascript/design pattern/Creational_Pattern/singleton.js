//console.log("Application started");

var dom=(function(){
  //console.log("inside singleton");
var _counter=0;
var _instance;



function create(elem,id) {
  var el=document.createElement(elem);
  el.id=id || generateId();
  return el;
}
function generateId(){
  return ("ID"+_counter++);

}


function createInstance() {
  return{
          generateId:generateId,
          create:create
  }

}
return ({//generateId:generateId,
        //create:create
        getInstance:function () {
          return _instance||(_instance=createInstance());
        }
      });
}());
