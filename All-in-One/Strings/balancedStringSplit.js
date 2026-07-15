const balancedStringSplit = (str) => {
  let r = 0;
  let l = 0;
  let bal = 0;
  for (let i = 0; i < str.length; i++) {
    str[i] === "R" ? r++ : l++;
    if (r === l) {
      bal++;
      r = 0;
      l = 0;
    }
  }

  return bal;
};
let str = "LLLLRRRR";
console.log(balancedStringSplit(str));
