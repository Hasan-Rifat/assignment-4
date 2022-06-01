// problem 1 anaToVori :
function anaToVori(ana) {
  if (typeof ana != "number") {
    return "Please enter the valid number";
  } else if (ana == 0) {
    return "Please enter the Valid Number";
  }
  let element = ana / 16;
  return element;
}
// let total = anaToVori(16);
// console.log(total);
// problem 2 pandaCost:
function pandaCost(singara, samucha, jilapi) {
  if (
    typeof singara == "string" ||
    typeof samucha == "string" ||
    typeof jilapi == "string"
  ) {
    return "Please enter Valid Amount";
  }
  let item1 = singara * 7;
  let item2 = samucha * 10;
  let item3 = jilapi * 15;
  let element = item1 + item2 + item3;
  return element;
}
let totalPrice = pandaCost(1, 5, 1);
console.log(totalPrice);
// problem 3 picnicBudget:
function picnicBudget(members) {
  if (members == 0) {
    return "Must be at least one";
  }
  if (members <= 100) {
    let element = members * 5000;
    return element;
  } else if (members <= 200) {
    let element100 = 100 * 5000;
    let element200 = (members - 100) * 4000;
    let total = element100 + element200;
    return total;
  } else if (members >= 200) {
    let element100 = 100 * 5000;
    let element200 = 100 * 4000;
    let element300 = (members - 200) * 3000;
    let total = element100 + element200 + element300;
    return total;
  }
  return total;
}
// let totalMembers = picnicBudget(100);
// console.log(totalMembers);
// problem 4 oddFriend:
let friend = ["habluo", "Potin", "Donald", "Trump", "Obama", "Pear", "rifat"];
function oddFriend(friends) {
  if (friend[0] != "habluo") {
    return "error";
  }
  for (const friend of friends) {
    if (friend.length % 2 != 0) {
      return friend;
    }
  }
}
// let OddFriendName = oddFriend(friend);
// console.log(OddFriendName);
