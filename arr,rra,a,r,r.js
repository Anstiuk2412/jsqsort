function print(n) {
  for (let a of n) {
    console.log(a);
  }
  console.log(n);
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
print(numbers);

var reversed = numbers.reverse();
print(reversed);
