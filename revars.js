const sentence = 'i am web devoloper';


let reverse = ''
for(const letter of sentence){
    console.log(letter);
    reverse = letter + reverse;
}
console.log(reverse);

// 2nd niom
const names = ['elon', 'bill', 'mark', 'st'];
// const names = "i am devops enginner"

const rev_numbers = [];
for(const name of names){
    // console.log(name);
    rev_numbers.unshift(name);
}
console.log(rev_numbers);
