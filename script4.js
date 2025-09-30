//БУЛО ЗРОБЛЕНО 2 ВАРІАНТИ ВИКОНАННЯ 4 ЗАВДАННЯ

        // 1 ВАРІАНТ ВИКОНАННЯ 4 ЗВАДАННЯ

// function calculateWordsInString(string) {

//     const text = string.trim();

//     let strCopy = [];
//     strCopy = text.split(" ");

//     console.log(strCopy);

//     let tapeLenght = 0;

//     const ADD_COUNTER_FOR_LENGHT = 1;
//     const MINUS_UNDEFIEND = -1;

//     for (let i = 0; i <= strCopy.length; i++) {

//         if (strCopy[i] !== '') {
//             tapeLenght += ADD_COUNTER_FOR_LENGHT;
//             console.log(strCopy[i]);
//         }
//         else {
//             continue;
//         }

//     }

//     tapeLenght += MINUS_UNDEFIEND;
//     console.log(tapeLenght) 
//     return;
// }


// calculateWordsInString("Easy string for count");
// calculateWordsInString("Easy");
// calculateWordsInString("Some string with a triple   space");
// calculateWordsInString("Some?  string, with a triple   space");


        // 2 ВАРІАНТ ВИКОНАННЯ 4 ЗВАДАННЯ

function calculateWordsInStringTwo(string){
    //Забираю пробіли на початку і в кінці
    const text = string.trim();

    let tapeLenght = 1;

    for (let i = 0; i < text.length; i++) {

        if (text[i] === " " && text[i + 1] === " ") {

            continue;

        }
        else if (text[i] === " " && text[i + 1] !== " ") {

            tapeLenght++;

        }
    }

    console.log(tapeLenght);
    return;
        
}

calculateWordsInStringTwo("Easy string for count");
calculateWordsInStringTwo("Easy");
calculateWordsInStringTwo("Some string with a triple   space");
calculateWordsInStringTwo("Some?  string, with a triple   space");
