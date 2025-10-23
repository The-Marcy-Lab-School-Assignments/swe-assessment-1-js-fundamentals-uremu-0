/*
  Write your functions here!

  Each function should:
  - Be exported so tests can use it
  - Follow the exact specifications
  - Pass all test cases
  - Use descriptive variable names
  - Have no linting errors
*/

// ============================================
// Question 1: petJudger
// ============================================


const petJudger = (petBreed, petName) => {
  if (petBreed === 'dog' && petName === 'Bob') {
    console.log(`I love dogs! Bob is so cute!`)
  } else if (petBreed === 'cat' && petName === 'Ginger') {
    console.log(`I love cats Ginger is so cute!`)
  } else if (petBreed === 'turtle' && petName === 'Carl') {
    console.log(`Who doesn't love a good turtle? Carl is the tops.`)
  } else if (petBreed === 'snake' && petName === 'Zuko') {
    console.log(`Not a fan, please take Zuko and leave.`)
  } else if (petBreed === undefined) {
    console.log(`Missing information. Please provide a valid pet.`)
  } else {
    console.log(`What an...interesting pet.`)
  }

};

// ============================================
// Question 2: loopFromOneUpToAnother
// ============================================

const loopFromOneUpToAnother = (firstNum, secondNum) => {
  // Your code here
};

// ============================================
// Question 3: shoutEveryLetterForLoop
// ============================================

const shoutEveryLetterForLoop = (str) => {
  // Your code here
};

// ============================================
// Question 4: letterCaseCounts
// ============================================

const letterCaseCounts = (str) => {
  // Your code here
};

// ============================================
// Question 5: getNamesOfGreedyGnomes
// ============================================

const getNamesOfGreedyGnomes = (gnomes) => {
  // Your code here
};

// ============================================
// Exports
// ============================================

module.exports = {
  petJudger,
  loopFromOneUpToAnother,
  shoutEveryLetterForLoop,
  letterCaseCounts,
  getNamesOfGreedyGnomes,
};
