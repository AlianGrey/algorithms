let nums = [1, 5, 4, 1, 3, 2, 6, 5, 1, 3, 6, 9]
const template = '132';

function searchOnTemplate(array, temp) {
    let temparr = temp.split("");
    let doparr = [...array] //Spread syntax, появившийся в ES6 ; cloneSheeps = sheeps.slice() or cloneSheeps = Array.from(sheeps)
    let result = [];
    let resIndex = 0;

    for (let j = 1; j <= temparr; j++) {
        for (let i = 0; i <= doparr.length; i++) {

            if (doparr[i] = temparr[j]) {
                result.push[doparr[i]];
                resIndex = i;
                doparr.shift();
                break;
            }
            else {
                if (result) {
                    result = [];
                    resIndex = 0;
                }
            }
        }

    }



}

console.log('find or not = ', searchOnTemplate(nums, template))