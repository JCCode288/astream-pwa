export default function idToName(id) {
  let res = [];
  let name = "";
  for (let i = 0; i <= id.length; i++) {
    const char = id[i];
    if (char === "-" || !char) {
      res.push(name);
      name = "";
      continue;
    }

    name += char;
  }

  return res.reduce((curr, val, idx) => {
    curr += /^(t|n|w|k|g)(a|i|u|e|o)$/is.test(val)
      ? val
      : val[0].toUpperCase() + val.slice(1);

    if (idx !== res.length - 1) curr += " ";

    return curr;
  }, "");
}
