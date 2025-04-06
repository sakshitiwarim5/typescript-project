const x: number = 1; // giving type like this its number 
console.log(x);

//
function runAfter1S(fn: () => void) {
    setTimeout(fn, 1000);
}

runAfter1S(function(){
    console.log("hi there");
})