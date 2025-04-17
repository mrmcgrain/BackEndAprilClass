const identity = function (value) {
  return value
};

const first = function (array, n) {
  const result = []
  if(n === undefined){
    return array[0]
  }else if(n > array.length){
    return array
  }
  for(let i = 0; i < n; i++){
    result.push(array[i])
  }
  return result
};
  
const last = function (array, n) {
  let result = []
  if(n === undefined){
    return array[array.length - 1]
  }else if(n > array.length){
    return array
  }
  for(let i = array.length - n; i < array.length; i++){
    result.push(array[i])
  }
  return result
};

const each = function (collection, callback) {
  if(Array.isArray(collection)){
    for(let i = 0; i < collection.length; i++){
      collection[i] = callback(collection[i], i, collection)
    }
  }else{
    for(let key in collection){
      collection[key] = callback(collection[key], key, collection)
    }
  }
};

const indexOf = function (array, target) {
  for(let i = 0; i < array.length; i++){
    if(array[i] === target){
      return i
    }
  }
  return -1
};

const map = function (collection, callback) {
  let result = []
  for(let item of collection){
    result.push(callback(item))
  }
  return result
}

const filter = (collection, callback)=>{
  const result = []
  for(let item of collection){
    if(callback(item)){
      result.push(item)
    }
  }
  return result
}

const reject = (collection, callback) =>{
  const result = []
  for(let item of collection){
    if(!callback(item)){
      result.push(item)
    }
  }
  return result
}

const uniq = (array) =>{
  result = []
  if(array.length === 0){
    return result
  }
  for(let item of array){
    if(result.indexOf(item) === -1){
      result.push(item)
    }
  }
  return result
}

const reduce = (collection, callback, initialValue) =>{
  let accumulator = initialValue;
  for(let key in collection){
    if(accumulator === undefined){
      accumulator === collection[key];
      continue
    }
    accumulator = callback(accumulator, collection[key])
  }
  return accumulator
}

module.exports = {
  identity,
  first,
  last,
  each,
  indexOf,
  map,
  filter, 
  reject, 
  uniq, 
  reduce
};