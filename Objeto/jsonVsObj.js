const obj = {a: 1, b: 2, c:3, soma(){return a + b + c}}
console.log(JSON.stringify(obj))

// console.log(JSON.parse("{a: 1, b: 2, c: 3}"))
// console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}"))

// JSON deve iniciar com aspas simples e os atributos devem ser com aspas duplas
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))

// Atributos que não sejam strings podem ser declarados sem aspas
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": []}'))