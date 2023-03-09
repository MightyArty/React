function func(operation: string): void {
  let x = Number((<HTMLInputElement>document.getElementById("x")).value);
  let y = Number((<HTMLInputElement>document.getElementById("y")).value);

  let res = 0;
  switch (operation) {
    case "Add":
      res = Add(x, y);
      break;
    case "Sub":
      res = Sub(x, y);
      break;
    case "Mul":
      res = Mul(x, y);
      break;
    case "Div":
      res = Div(x, y);
      break;
    default:
      break;
  }
  document.getElementById("res").innerText = `result = ${res}`;
}

let Add = (x: number, y: number): number => x + y;
let Sub = (x: number, y: number): number => x - y;
let Mul = (x: number, y: number): number => x * y;
let Div = (x: number, y: number): number => x / y;
