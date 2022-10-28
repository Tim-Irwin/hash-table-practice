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
  let res = [];
  let obj1 = {};
  for(let i = 0; i < arr1.length; i++){
    if (!obj1[arr1[i]]){
      obj1[arr1[i]] = 0;
    }
    obj1[arr1[i]]++;
  }
  for (let i = 0; i < arr2.length; i++){
    if (obj1.hasOwnProperty(arr2[i])){
      res.push(arr2[i]);
    }
  }
  return res;
}


function duplicate(arr) {
  // Your code here
  let obj = {};
  for (let i = 0; i < arr.length; i++){
    if (!obj.hasOwnProperty(arr[i])){
      obj[arr[i]] = 1;
    }else{
      obj[arr[i]]++;
      if (obj[arr[i]] === 2){
        return arr[i];
      }
    }
  }
  return null;
}


function twoSum(nums, target) {
  // Your code here
  debugger;
  let set = new Set();
  for (let i = 0; i < nums.length; i++){
    if (!set.size){
      set.add(nums[i])
    }else{
      if (set.has(target - nums[i])){
        return true;
      }else{
        set.add(nums[i]);
      }
    }

  }
  return false;
}
// console.log(twoSum([2, 7, 11, 15], 22));
// console.log(twoSum([3, 4, 5], 6));

function wordPattern(pattern, strings) {
  // Your code here
  let obj = {};
  let set = new Set();
  let count = 0;
  for (let i = 0; i < strings.length; i++){
    set.add(strings[i]);
  }
  for (let i = 0; i < pattern.length; i++){
    if (!obj.hasOwnProperty(pattern[i])){
      obj[pattern[i]] = [];
      count++;
    }
    obj[pattern[i]].push(i);
  }
  if(count !== set.size) return false;
  for (let key in obj){
    let indices = obj[key];
    let string = strings[indices[0]];
    for (let i = 1; i < indices.length; i++){
      if (strings[indices[i]] !== string){
        return false;
      }
    }
  }
  return true;
}

module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
