const arr = Array();
const morethan5 = [0,1,2,3,4,5,6,9]
const nElements = morethan5.length;
let first = morethan5[0];
let middle = morethan5[Math.floor(nElements/2)];
let last = morethan5[nElements-1];
const mixedDataTypes = [0, 'a', ['p', 'q'], true, "word", 0.5];
let nOfMixed = mixedDataTypes.length;
const itCompanies =[
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon'
];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length-1]);

itCompanies.forEach(element => {
    console.log(element); 
});
itCompanies.forEach(element => {
    console.log(element.toUpperCase());
});
console.log(itCompanies.join(', '));
let exists = itCompanies.indexOf('Faceboook');
if (exists != -1) {
    console.log(itCompanies[exists]);
}else{
    console.log('company is not found');
}
let copyOfIt = itCompanies.slice();
for (let index = 0; index < copyOfIt.length; index++) {
    const element = copyOfIt[index];
    let word = element.split('');

    if (word.indexOf('o') != word.lastIndexOf('o')) {
        
        copyOfIt.splice(index, 1);
        index--;
    }
}
console.log(copyOfIt);
let copyOfIt2 = itCompanies.slice();
copyOfIt2 = copyOfIt2.sort();
copyOfIt2 = copyOfIt2.reverse();
console.log(copyOfIt2);
console.log(copyOfIt2.slice(0, 3));
console.log(copyOfIt2.slice(-3));
console.log(copyOfIt2.slice(Math.floor(copyOfIt2.length / 2), Math.floor(copyOfIt2.length / 2)+1));
let copyOfIt3 = itCompanies.slice();
console.log(copyOfIt3);
copyOfIt3.shift();
console.log(copyOfIt3);
copyOfIt3.splice(Math.floor((copyOfIt3.length-1)/ 2), ((copyOfIt3.length-1) % 2)+1);
console.log(copyOfIt3);
copyOfIt3.pop();
console.log(copyOfIt3);
copyOfIt3.splice(0);
console.log(copyOfIt3);