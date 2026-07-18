const isPalindrome = (s) => {
  s = s.toLowerCase();
  let filteredString = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z0-9]/i)) {
      filteredString += s[i];
    }
  }
  let reverseStr = "";
  for (let i = filteredString.length - 1; i >= 0; i--) {
    reverseStr += filteredString[i];
  }
  return filteredString === reverseStr;
};

const isPalindrome2 = (s) => {
  s = s.toLowerCase();
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (!s[i].match(/[a-z0-9]/i)) {
      i++;
    } else if (!s[j].match(/[a-z0-9]/i)) {
      j--;
    } else if (s[i] === s[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
};
// const s = "race a car";
const s = "A man, a plan, a canal: Panama";
console.log(isPalindrome2(s));
