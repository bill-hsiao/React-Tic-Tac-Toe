// export default function move(obj, squareName) {
//   let occupied = false;
//   squareName = parseInt(squareName);
//   for (let i = 0; i < obj.xo.length - 1; i ++) {
//     if (obj.xo[squareName] !== 'z') {
//       occupied = true;
//       return {
//         xo: obj.xo
//             }
//     } else if (i === obj.xo.length - 1 && occupied === false) {
//       let xo = obj.xo.slice();
//       xo[squareName] = (xo.length % 2 === 0 ? 'o' : 'x');
//       return {
//         xo: xo
//       }
//     }
//   }
// }
