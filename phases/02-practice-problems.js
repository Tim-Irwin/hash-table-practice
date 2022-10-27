function anagrams(str1, str2) {
  // Your code here
  if(str1.length !== str2.length) return false;
  // let arr = str1.split("");
  // arr.forEach(item =>{
  //   if (!(str2.includes(item)) ){
  //     return false;
  //   }
  // })
  // return true;
  let obj1 = {};
  for(let i = 0; i < str1.length; i++){
    if (!obj1[str1[i]]){
      obj1[str1[i]] = 0;
    }
    obj1[str1[i]]++;
  }
  let obj2 = {};
  for(let i = 0; i < str2.length; i++){
    if (!obj2[str2[i]]){
      obj2[str2[i]] = 0;
    }
    obj2[str2[i]]++;
  }
  for(let key in obj1){
    // if(!(key instanceof obj2))
    if(!(obj2.hasOwnProperty(key))){
      return false;
    }
    if(obj1[key] !== obj2[key]){
      return false;
    }
  }
  return true;
}


function commonElements(arr1, arr2) {
  const res = [];

  arr1.forEach(num1 => {
    arr2.forEach(num2 => {
    if(num1 = num2){
      res.push(num1);
      }    
    })
  })
  return res;
}


function duplicate(arr) {
  // Your code here
}


function twoSum(nums, target) {
  // Your code here
}


function wordPattern(pattern, strings) {
  // Your code here
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
