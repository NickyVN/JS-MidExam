function printBiscuitsMade(arr) {
    arr = arr.map(Number);
    let biscuitsToday = arr[0];
    let workers = arr[1];
    let productionPer30Days = arr[2];
    let total = 0
    for (let i = 1; i <= 30; i++) {
        if (i % 3 == 0) {
            total += Math.floor(biscuitsToday * workers * 0.75);
        } else{
            total += Math.floor(biscuitsToday * workers);
        }
    }
    console.log(`You have produced ${total} biscuits for the past month.`)
    let difference = total - productionPer30Days;
    let perc = difference / productionPer30Days * 100;
    if (total > productionPer30Days) {
        console.log(`You produce ${perc.toFixed(2)} percent more biscuits.`);
    } else if (total < productionPer30Days){
        console.log(`You produce ${Math.abs(perc).toFixed(2)} percent less biscuits.`);
    }
}
printBiscuitsMade(["78", "8", "16000"])
printBiscuitsMade(["65", "12", "26000"])
printBiscuitsMade(["163", "16", "67020"])
