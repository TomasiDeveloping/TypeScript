type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(input1: Combinable, input2: Combinable, resultConversion: 'as-number' | 'as-text') {
    let resutlt;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        resutlt = +input1 + +input2;
    } else {
        resutlt = input1.toString() + input2.toString();
    }
    // if (resultConversion === 'As-number') {
    //     return + resutlt;
    // } else {
    //     return resutlt.toString();
    // }
    return resutlt;
}

const combineAges = combine(30, 26, 'as-number');
console.log(combineAges);

const combineStringAges = combine('30', '26', 'as-number');
console.log(combineStringAges);

const combineNames = combine('Hello ', 'World', 'as-text');
console.log(combineNames);