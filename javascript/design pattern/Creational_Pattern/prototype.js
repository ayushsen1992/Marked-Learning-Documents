var grandParent={
  grandparent_Props:"this is grandparrent properties",
  grandparent_func:function () {
    return "you are using grandParent function" ;
  }
}


//var Parent=Object.create(grandParent,{parent_Props:{value:"this is parent properties"}
              //                  });

var Parent={
  parent_Props:"this is parrent properties",
  parent_func:function () {
    return "you are using Parent function" ;
  }
}



var child=Object.create(Parent,{child_Props:{value:"this is child properties"}
                                });
console.log(child.parent_Props);
console.log(child.child_Props);
console.log(child.grandparent_Props);
console.log(child.hasOwnProperty(parent_Props));
console.log(child.hasOwnProperty(child_Props));
//parent_Props:{value:"this is parents property chnaged by child object"}

// var obj={
//   child_Props:"this is child properties",
//   child_func:function () {
//     return "you are using child function" ;
//   }
// }
