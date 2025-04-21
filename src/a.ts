const x: number = 1; // giving type like this its number 
console.log(x);

//
function runAfter1S(fn: () => void) {
    setTimeout(fn, 1000);
}

runAfter1S(function(){
    console.log("hi there");
})

// 
const greet = (name: string) => 'Hello, ${name}!'; 

// Zod is for runtime type checks (99%)

// Zod is a TypeScript-first schema declaration and validation library. It allows you to define schemas for your data and validate them at runtime. This is useful for ensuring that the data you receive from external sources (like APIs) matches the expected structure.