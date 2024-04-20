export const RandomNumbers = (trivia) => {
    const randomNumbers = [];
    for (let i = 0; i < trivia.length; i++) {
        const randomNumber = Math.floor(Math.random() * trivia.length);
        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber)
        } else {
            let newRandomNumber;
            do {
                newRandomNumber = Math.floor(Math.random() * trivia.length);
            } while (randomNumbers.includes(newRandomNumber));

            randomNumbers.push(newRandomNumber);
        }
      }
    return randomNumbers
}