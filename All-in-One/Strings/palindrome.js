function palndrom(str) {
  //   console.log(Math.abs(str));
  let storeStr = str;
  if (typeof storeStr === "number") {
    storeStr = Math.abs(storeStr).toString();
  }
  let count = storeStr.length - 1;
  let res = "";
  while (count >= 0) {
    res = res + storeStr[count];
    count--;
  }
  console.log(res);
  return res === storeStr;
}

const srt = "e323e";

console.log(palndrom(srt));
