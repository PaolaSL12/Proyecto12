import { RandomNumbers } from "./RandomNumbers";

export const RandomGame = (data) => {

    let randomNum = RandomNumbers(data)

    let ramdomQuestions = [];

    for (let i = 0; i < randomNum.length; i++) {
        const number = randomNum[i];
        
        ramdomQuestions.push(data[number])
    
      }

    return ramdomQuestions
    
}