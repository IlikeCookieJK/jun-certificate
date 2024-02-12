// function uwu(x) {
//     let uwu = x;
//     for (let i = 0; i <= uwu.length; i++) {
//         let uwu = str.split(``).splice(i, char.length);
//         if (x.toString() === char) {
//             cat += 1;
//         }
//     }
//     return cat
// }



// console.log(uwu(`rawr`))

function uwu(xx) {
    let uwu = xx.split(``);
    const y = uwu.length;
    for (i = 0; i < y; i++) {
        let x = uwu[i];
        if (x === `r`) {
            uwu.push(`w`)
        } else if (x === `l`) {
            uwu.push(`w`)
        } else if (x === `L`) {
            uwu.push(`W`)
        } else if (x === `R`) {
            uwu.push(`W`)
        } else {
            uwu.push(x);
        }
        if (i === y) {
            break;
        }
    }
    for (i = 0; i < uwu.length; i++) {
        uwu.shift();
        if (i === y) {
            break;
        }
    }
    return uwu.join(``);
}


console.log(uwu(`requlest`))