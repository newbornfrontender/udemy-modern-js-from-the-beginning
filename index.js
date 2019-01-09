console.time('Test');

const resolveAfter2Seconds = (x) =>
  new Promise((res) => setTimeout(() => res(x), 2000));

const add = async (x) => {
  const a = resolveAfter2Seconds(40);
  const b = resolveAfter2Seconds(25);

  return x + (await a) + (await b);
};

console.log('Spam 1');
console.log('Spam 1');
console.log('Spam 1');
console.log('Spam 1');

console.table({ a: 1, b: 2 });
console.table([1, 2, 3]);

console.warn('Warn!!!');

add(15).then((v) => console.log(v));

console.log('Spam 2');
console.log('Spam 2');
console.log('Spam 2');
console.log('Spam 2');

console.timeEnd('Test');
