const size = 6;
const border = size;
const full = "##";
const logo = "**";

const getResult = () => {
  let result = "";
  for (let i = 0; i < size; i++) {
    result += full.repeat(12 * size + 2 * border);
    result += "\n";
  }
  for (let i = 0; i < 2 * size; i++) {
    result += full.repeat(2 * size - i + border);
    result += logo.repeat(2 * size + 2 * i);
    result += full.repeat(4 * size - 2 * i);
    result += logo.repeat(2 * size + 2 * i);
    result += full.repeat(2 * size - i + border);
    result += "\n";
  }
  for (let i = 0; i < 2 * size; i++) {
    result += full.repeat(border);
    result += logo.repeat(12 * size);
    result += full.repeat(border);
    result += "\n";
  }
  for (let i = 0; i < 6 * size; i++) {
    result += full.repeat(border + i);
    result += logo.repeat(12 * size - 2 * i);
    result += full.repeat(border + i);
    result += "\n";
  }
  for (let i = 0; i < size; i++) {
    result += full.repeat(12 * size + 2 * border);
    result += "\n";
  }
  return result;
};
const result = getResult();
let timer = 0;
for (let i = 0; i < result.length; i++) {
  setTimeout(() => {
    console.log(item);
  });
}
