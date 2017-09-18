function countdown(callback) {
  window.setTimeout(callback, 2000);
}


function createMultiplier(multiplierValue){
  return function(n){
    return multiplierValue * n
  };
};

function createMultiplierBonus(){
  doubler = createMultiplier(2);
  tripler = createMultiplier(3);
};

createMultiplierBonus();


function multiplier(n1, n2){
  return n1 * n2
};

function doublerWithBind(number){
  return multiplier.bind(2, null)
};

function triplerWithBind(number){
  return multiplier.bind(3, null)
};
