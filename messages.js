const one = ["past", "present", "future"]
const two = ["failures", "successes", "challenges", "complacency", "dissatisfactions"]
const three = ["adventures", "opportunities", "creativity"]


// Do not let [past, present, future] [failures, successes, challenges, complacency, dissatisfactions] alter your approach to [adventures, opportunities, creativity] 

function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

const array = [1, 'hello', 5, 8];

const result = getRandomItem(one);
const nextResult = getRandomItem(two);
const lastResult = getRandomItem(three);

console.log('Do not let ' + result, nextResult + ' alter your approach to ' + lastResult + '.'); 