//Counting Valleys

function countingValleys(steps, path){
  let elevation = 0;
  let traversedValleys = 0;
  for(let i = 0; i < steps; i++){
    if(path[i] === "D"){
      --elevation;
    }else if (path[i] === "U"){
      if(++elevation === 0) 
      traversedValleys++
    }
  }
  return traversedValleys; 
}
 
let step = 8;
let arr = ["U","D","D","U","U","D","D","U"];
console.log(countingValleys(step,arr));