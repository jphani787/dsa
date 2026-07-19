const isIsomorphic = (s, t) => {
  let n = 0;
  let mapS = {};
  let mapT = {};
  while (n < s.length) {
    mapS[s[n]] = mapS[s[n]] ? mapS[s[n]] + 1 : 1;
    mapT[t[n]] = mapT[t[n]] ? mapT[t[n]] + 1 : 1;
    n++;
  }
  let mT = Object.values(mapT);
  console.log(mapT, mapS);
  let c = 0;
  for (let map of Object.values(mapS)) {
    if (mT.includes(map)) {
      c++;
    }
  }

  return c === mT.length;
};
let s = "f11";
let t = "b23";
console.log(isIsomorphic(s, t));
