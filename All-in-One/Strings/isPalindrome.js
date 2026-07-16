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
const s = "race a car";
console.log(isPalindrome(s));
