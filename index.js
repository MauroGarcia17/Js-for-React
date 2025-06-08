function hello() {
  return function() {
    return 'Hello, World!';
  }
}
  
console.log(hello()());