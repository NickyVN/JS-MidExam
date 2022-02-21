function solve(arr) {
    let splitted = arr.join('>>').split('>>')
    let deepSplit;
    let taxes = 0
    let sum = 0;
    for (let i = 0; i < splitted.length; i++) {
        deepSplit = splitted[i].split(' ');
        if (deepSplit[0] == "family") {
            taxes = Math.trunc(deepSplit[2] / 3000) * 12 + (50 - deepSplit[1] * 5)
            sum += taxes;
            console.log(`A family car will pay ${taxes.toFixed(2)} euros in taxes.`);
        }
        if (deepSplit[0] == "heavyDuty") {
            taxes = Math.trunc(deepSplit[2] / 9000) * 14 + (80 - deepSplit[1] * 8)
            sum += taxes;
            console.log(`A heavyDuty car will pay ${taxes.toFixed(2)} euros in taxes.`);
        }
        if (deepSplit[0] == "sports") {
            taxes = Math.trunc(deepSplit[2] / 2000) * 18 + (100 - deepSplit[1] * 9)
            sum += taxes;
            console.log(`A sports car will pay ${taxes.toFixed(2)} euros in taxes.`);
        }
        if (deepSplit[0] !== "family" && deepSplit[0] !== "heavyDuty" && deepSplit[0] !== "sports") {
            console.log('Invalid car type.');
        }
    }
    console.log(`The National Revenue Agency will collect ${sum.toFixed(2)} euros in taxes.`);
}
solve(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410'])
solve([`family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012`])
