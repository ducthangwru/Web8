// function aRose() {
//   console.log("A Rose");
// }
//
// var aFunction = aRose;
//
// typeof(aFunction);
// aFunction();
//
// function multiplyBy3(num){
//   return num * 3;
// }
//
// function multiplyBy6(num){
//   return num * 6;
// }
//
// function transformNumberWith(num, transformer) {
//   console.log(transformer(num));
// }
//
// transformNumberWith(3, multiplyBy3);
// transformNumberWith(6, multiplyBy6);

function print(i, time){
  setTimeout(function functionName() {
    console.log(i);
  }, (time - i) * 1000)
}

function countDown(time) {
  for (var i = time; i >= 0; i--) {
      //print(i, time);
      var print = function a(k) {
        setTimeout(function functionName(k) {
          console.log(k);
        }, (time - k) * 1000)
      } (i);
  }
}

countDown(5);

function createWebsiteCounter() {
  var numberOfVisitor = 0;
}
