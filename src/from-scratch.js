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
  if (!petBreed || !petName) {
    console.log("Missing information. Please provide a valid pet.");
    return;
  }

  if (petBreed === 'dog') {
    console.log(`I love dogs! ${petName} is so cute!`);
  } else if (petBreed === 'cat') {
    console.log(`I love cats! ${petName} is so cute!`);
  } else if (petBreed === 'turtle') {
    console.log(`Who doesn't love a good turtle? ${petName} is the tops.`);
  } else if (petBreed === 'snake') {
    console.log(`Not a fan, please take ${petName} and leave.`);
  } else {
    console.log("What an...interesting pet.");
  }
};

/* You correctly handle the missing petBreed case, 
but your logic is too specific—it only works 
for certain breed-name combinations (dog and Bob, cat and Ginger, etc.). 
It will fail if a different name or breed is passed. 
To fully meet the requirements, you should check for missing arguments 
generally (petBreed or petName) and then handle each breed regardless of the pet’s name.

Focus on generalizing your conditions so the function works 
for any pet name within each breed. Also, make sure the "missing information" 
check happens before the breed checks to catch all undefined or empty arguments. */


// ============================================
// Question 2: loopFromOneUpToAnother
// ============================================

const loopFromOneUpToAnother = (firstNum, secondNum) => {
  for (let i = firstNum; i < secondNum; i++) {
    console.log(i);
  }
}

// Alternative Solution (while loop):
// const loopFromOneUpToAnother = (firstNum, secondNum) => {
//   let i = firstNum;
//   while (i < secondNum) {
//     console.log(i);
//     i++;
//   }
// }




// ============================================
// Question 3: shoutEveryLetterForLoop
// ============================================

const shoutEveryLetterForLoop = (str) => {
  for (let i = 0; i < str.length; i++) {
    console.log(`${str[i].toUpperCase()}!`);
  }
}

// ============================================
// Question 4: letterCaseCounts
// ============================================

const letterCaseCounts = (str) => {
  const counts = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char >= 'a' && char <= 'z') {
      counts.lowercase++;
    } else if (char >= 'A' && char <= 'Z') {
      counts.uppercase++;
    } else {
      counts.neither++;
    }
  }

  return counts;
}


// ============================================
// Question 5: getNamesOfGreedyGnomes
// ============================================

const getNamesOfGreedyGnomes = (gnomes) => {
  const greedyNames = [];

  for (let i = 0; i < gnomes.length; i++) {
    if (gnomes[i].stolenDecorations.length > 1) {
      greedyNames.push(gnomes[i].name);
    }
  }

  return greedyNames;
}

const sumBetweenIndexes = (nums, start = 0, end = nums.length) => {
  // Guard against invalid start
  if (start < 0) {
    start = 0;
  }

  // Guard against invalid end
  if (end > nums.length) {
    end = nums.length;
  }

  // Handle case where start === end
  if (start === end) {
    return nums[start];
  }

  let sum = 0;
  for (let i = start; i < end; i++) {
    sum += nums[i];
  }

  return sum;
}

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
