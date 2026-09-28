const prompt = require('prompt-sync')();

function maxScoreEasy(){
    let points = 0;
    let numba1 = Math.floor(Math.random()*100);
    let numba2 = Math.floor(Math.random()*100);
    let counter = 1;
    while(counter != 10){
        let numba1 = Math.floor(Math.random()*100);
        let numba2 = Math.floor(Math.random()*100);
        let question = Number(prompt(`What is ${numba1} + ${numba2}: `))
        counter++
        if(question == numba1 + numba2){
            points += 10;
            console.log("Correct!")
        }
        else if(isNaN(question)){
            points += 0
            console.log("Skip!")
        }
        else if(question != numba1 + numba2){
            points -= 5
            console.log("Incorrect!")
        }

    }
    while(counter != 20){
        let numba1 = Math.floor(Math.random()*100);
        let numba2 = Math.floor(Math.random()*100);
        let question = Number(prompt(`What is ${numba1} - ${numba2}: `))
        counter++
        if(question == numba1 - numba2){
            points += 10
            console.log("Correct!")
        }
        else if(isNaN(question)){
            points += 0
            console.log("Skip!")
        }
        else if(question != numba1 - numba2){
            points -= 5
            console.log("Incorrect!")
        }


    }
    console.log(`You got ${points} points`)
    return(points)
}

function maxScoreMedium(){
    let points = 0;
    let counter = 1;
    while(counter != 5){
        let numba1 = Math.floor(Math.random()*100);
        let numba2 = Math.floor(Math.random()*100);
        let question = Number(prompt(`What is ${numba1} + ${numba2}: `))
        counter++
        if(question == numba1 + numba2){
            points += 10
            console.log("Correct!")
        }
        else if(isNaN(question)){
            points += 0
            console.log("Skip!")
        }
        else if(question != numba1 + numba2){
            points -= 5
            console.log("Incorrect!")
        }
    }
    while(counter != 10){
        let numba1 = Math.floor(Math.random()*100);
        let numba2 = Math.floor(Math.random()*100);
        let question = Number(prompt(`What is ${numba1} - ${numba2}: `))
        counter++
        if(question == numba1 - numba2){
            points += 10
            console.log("Correct!")
        }
        else if(isNaN(question)){
            points += 0
            console.log("Skip!")
        }
        else if(question != numba1 - numba2){
            points -= 5
            console.log("Incorrect!")
        }
    }
    while(counter != 15){
        let numba1 = Math.floor(Math.random()*100);
        let numba2 = Math.floor(Math.random()*100);
        let question = Number(prompt(`What is ${numba1} * ${numba2}: `))
        counter++
        if(question == numba1 * numba2){
            points += 10
            console.log("Correct!")
        }
        else if(isNaN(question)){
            points += 0
            console.log("Skip!")
        }
        else if(question != numba1 * numba2){
            points -= 5
            console.log("Incorrect!")
        }
    }
    while(counter != 20){
        let numba1 = Math.floor(Math.random()*100);
        let numba2 = Math.floor(Math.random()*100);
        let question = Number(prompt(`What is ${numba1} / ${numba2}: `))
        counter++
        if(question == numba1 / numba2){
            points += 10
            console.log("Correct!")
        }
        else if(isNaN(question)){
            points += 0
            console.log("Skip!")
        }
        else if(question != numba1 / numba2){
            points -= 5
            console.log("Incorrect!")
        }
    }
    console.log(`You got ${points} points`)
    return(points)
}


function maxScoreHard(){
    let points = 0;
    let counter = 1;
    while(counter != 5){
        let numba1 = Math.floor(Math.random()*100);
        let numba2 = Math.floor(Math.random()*100);
        let numba3 = Math.floor(Math.random()*100);
        let question = Number(prompt(`What is ${numba1} + ${numba2} - ${numba3}: `))
        counter++
        if(question == numba1 + numba2 - numba3){
            points += 10
            console.log("Correct!")
        }
        else if(isNaN(question)){
            points += 0
            console.log("Skip!")
        }
        else if(question != numba1 + numba2 - numba3){
            points -= 5
            console.log("Incorrect!")
        }
    }
    while(counter != 10){
        let numba1 = Math.floor(Math.random()*100);
        let numba2 = Math.floor(Math.random()*100);
        let numba3 = Math.floor(Math.random()*100);
        let question = Number(prompt(`What is ${numba1} - ${numba2} + ${numba3}: `))
        counter++
        if(question == numba1 - numba2 + numba3){
            points += 10
            console.log("Correct!")
        }
        else if(isNaN(question)){
            points += 0
            console.log("Skip!")
        }
        else if(question != numba1 + numba2 - numba3){
            points -= 5
            console.log("Incorrect!")
        }
    }
    while(counter != 15){
        let numba1 = Math.floor(Math.random()*100);
        let numba2 = Math.floor(Math.random()*100);
        let numba3 = Math.floor(Math.random()*100);
        let question = Number(prompt(`What is ${numba1} * ${numba2} / ${numba3}: `))
        counter++
        if(question == numba1 * numba2 / numba3){
            points += 10
            console.log("Correct!")
        }
        else if(isNaN(question)){
            points += 0
            console.log("Skip!")
        }
        else if(question != numba1 * numba2 / numba3){
            points -= 5
            console.log("Incorrect!")
        }
    }
    while(counter != 20){
        let numba1 = Math.floor(Math.random()*100);
        let numba2 = Math.floor(Math.random()*100);
        let numba3 = Math.floor(Math.random()*100);
        let question = Number(prompt(`What is ${numba1} / ${numba2} * {numba3}: `))
        counter++
        if(question == numba1 / numba2 * numba3){
            points += 10
            console.log("Correct!")
        }
        else if(isNaN(question)){
            points += 0
            console.log("Skip!")
        }
        else if(question != numba1 / numba2 * numba3){
            points -= 5
            console.log("Incorrect!")
        }
    }
    console.log(`You got ${points} points`)
    return(points)
}

function threeOutEasy(){
    let points = 0;
    let lives = 3;
    while(lives != 0){
        let numba1 = Math.floor(Math.random()*9);
        let numba2 = Math.floor(Math.random()*9);
        let choice = Math.floor(Math.random()*1);
        if(choice == 0){
            let question = Number(prompt(`What is ${numba1} + ${numba2}: `));
            if(question == numba1 + numba2){
                console.log(`${points} + 10 = ${points + 10}`);
                points += 10
            
            }
            else if(question != numba1 + numba2){
                console.log(`Incorrect! ${lives - 1} lives left`);
                lives--
            }
        }
        else if(choice == 1){
            let question = Number(prompt(`What is ${numba1} - ${numba2}: `));
            if(question == numba1 - numba2){
                console.log(`${points} + 10 = ${points + 10}`);
                points += 10
            
            }
            else if(question != numba1 - numba2){
                console.log(`Incorrect! ${lives - 1} lives left`);
                lives--
            }
        }
        
    if(lives == 0){
        console.log(`You are at 0 lives left, you got ${points} points!`)
    
        }
    }
}

function threeOutMedium(){
    let points = 0;
    let lives = 3;
    while(lives != 0){
        let numba1 = Math.floor(Math.random()*99) + 9;
        let numba2 = Math.floor(Math.random()*99) + 9;
        let numba3 = Math.floor(Math.random()*9);
        let numba4 = Math.floor(Math.random()*9);
        let choice = Math.floor(Math.random()*4);
        if(choice == 0){
            let question = Number(prompt(`What is ${numba1} + ${numba2}: `));
            if(question == numba1 + numba2){
                console.log(`${points} + 10 = ${points + 10}`);
                points += 10
            
            }
            else if(question != numba1 + numba2){
                console.log(`Incorrect! ${lives - 1} lives left`);
                lives--
                
            }
        }
        else if(choice == 1){
            let question = Number(prompt(`What is ${numba1} - ${numba2}: `));
            if(question == numba1 - numba2){
                console.log(`${points} + 10 = ${points + 10}`);
                points += 10
            
            }
            else if(question != numba1 - numba2){
                console.log(`Incorrect! ${lives - 1} lives left`);
                lives--
                
            }
        }
        else if(choice == 2){
            let question = Number(prompt(`What is ${numba1} * ${numba2}: `));
            if(question == numba1 * numba2){
                console.log(`${points} + 10 = ${points + 10}`);
                points += 10
            
            }
            else if(question != numba1 * numba2){
                console.log(`Incorrect! ${lives - 1} lives left`);
                lives--
                
            }
        }
        else if(choice == 3){
            let question = Number(prompt(`What is ${numba1} / ${numba2}: `));
            if(question == numba1 / numba2){
                console.log(`${points} + 10 = ${points + 10}`);
                points += 10
            
            }
            else if(question != numba1 / numba2){
                console.log(`Incorrect! ${lives - 1} lives left`);
                lives--
                
            }
        }
        else if(choice == 4){
            let question = Number(prompt(`What is ${numba1} % ${numba2}: `));
            if(question == numba1 % numba2){
                console.log(`${points} + 10 = ${points + 10}`);
                points += 10
            
            }
            else if(question != numba1 % numba2){
                console.log(`Incorrect! ${lives - 1} lives left`);
                lives--
                
            }
        }
        
    if(lives == 0){
        console.log(`You are at 0 lives left, you got ${points} points!`)
    
        }
    }
}


function threeOutHard(){
    let points = 0;
    let lives = 3;
    while(lives != 0){
        let numba1 = Math.floor(Math.random()*999) + 99;
        let numba2 = Math.floor(Math.random()*999) + 99;
        let numba3 = Math.floor(Math.random()*99) + 9;
        let numba4 = Math.floor(Math.random()*9);
        let choice = Math.floor(Math.random()*4);
        if(choice == 0){
            let question = Number(prompt(`What is ${numba1} + ${numba2}: `));
            if(question == numba1 + numba2){
                console.log(`${points} + 10 = ${points + 10}`);
                points += 10
            
            }
            else if(question != numba1 + numba2){
                console.log(`Incorrect! ${lives - 1} lives left`);
                lives--
                
            }
        }
        else if(choice == 1){
            let question = Number(prompt(`What is ${numba1} - ${numba2}: `));
            if(question == numba1 - numba2){
                console.log(`${points} + 10 = ${points + 10}`);
                points += 10
            
            }
            else if(question != numba1 - numba2){
                console.log(`Incorrect! ${lives - 1} lives left`);
                lives--
                
            }
        }
        else if(choice == 2){
            let question = Number(prompt(`What is ${numba1} * ${numba2}: `));
            if(question == numba1 * numba2){
                console.log(`${points} + 10 = ${points + 10}`);
                points += 10
            
            }
            else if(question != numba1 * numba2){
                console.log(`Incorrect! ${lives - 1} lives left`);
                lives--
                
            }
        }
        else if(choice == 3){
            let question = Number(prompt(`What is ${numba1} / ${numba2}: `));
            if(question == numba1 / numba2){
                console.log(`${points} + 10 = ${points + 10}`);
                points += 10
            
            }
            else if(question != numba1 / numba2){
                console.log(`Incorrect! ${lives - 1} lives left`);
                lives--
                
            }
        }
        else if(choice == 4){
            let question = Number(prompt(`What is ${numba1} % ${numba2}: `));
            if(question == numba1 % numba2){
                console.log(`${points} + 10 = ${points + 10}`);
                points += 10
            
            }
            else if(question != numba1 % numba2){
                console.log(`Incorrect! ${lives - 1} lives left`);
                lives--
                
            }
        }
        
    if(lives == 0){
        console.log(`You are at 0 lives left, you got ${points} points!`)
    
        }
    }
}

console.log("What game would you like to play?\n1. Max Mode\n2. Three-Out\n3. Quit")
while(true){
    let mode = prompt("Enter your choice here: ")
    if (mode == 1){
        console.log("Max Mode: I will ask 20 questions. If you get a question right, you will win 10 points. If you get a question wrong, you will lose 5 points. If a question is too hard, you can type any word (such as \"skip\"), and you may move on without changing your points.\nDo you want to play? ")
        let modeConfirm = prompt("Input your choice here:")
        while(true){
            if(modeConfirm = "yes"){
                let modeDifficulty = Number(prompt("Choose a difficulty:\n1. Easy\n2. Medium\n3. Hard\n4. Exit "))
                if(modeDifficulty == 1){
                    console.log("Let's get started!")
                    maxScoreEasy()
                }
                else if(modeDifficulty == 2){
                    console.log("Are you ready?")
                    maxScoreMedium()
                }
                else if(modeDifficulty == 3){
                    console.log("Good luck.")
                    maxScoreHard()
                }
                else if(modeDifficulty == 4){
                    console.log("Bye.")
                    break;
                }
                else{
                    console.log("Please pick a difficulty.")
                }
            }
            else if(modeConfirm == "no"){
                console.log("Nevermind, then.")
                break;
            }
        }
    }
    else if(mode == 2){
        console.log("Three-Out: I will ask you questions until you get three wrong. When you get the third question wrong, the game ends. Get as many points as you can! There are NO SKIPS in this gamemode. \nDo you want to play?");
        let outConfirm = prompt("Input your option here: ");
        while(true){
            if(outConfirm = "yes"){
                let outDifficulty = prompt("Choose a difficulty:\n1. Easy\n2. Medium\n3. Hard\n 4. Quit");
                if(outDifficulty == 1){
                    console.log("Let's get started!")
                    threeOutEasy()
                }
                else if(outDifficulty == 2){
                    console.log("Get some paper out.")
                    threeOutMedium()
                }
                else if(outDifficulty == 3){
                    console.log("Good luck.")
                    threeOutHard()
                }
                else if(outDifficulty == 4){
                    console.log("Bye.")
                    break;
                }
            }
            else if(outConfirm == "no"){
                console.log("Nevermind, then.")
                break;
            }
            else{
                console.log("Please select a valid option.")
            }
        }
    }
    else if(mode == 3){
        console.log("Bye")
        break;
    }
    else{
        console.log("Please select a valid option.")
    }
}

