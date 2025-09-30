function calculateWordsInString(string) {

    const text = string.trim();

    let strCopy = [];
    strCopy = text.split(" ");

    console.log(strCopy);

    let tapeLenght = 0;

    const ADD_COUNTER_FOR_LENGHT = 1;
    const MINUS_UNDEFIEND = -1;

    for (let i = 0; i <= strCopy.length; i++) {

        if (strCopy[i] !== '') {
            tapeLenght += ADD_COUNTER_FOR_LENGHT;
            console.log(strCopy[i]);
        }
        else {
            continue;
        }

    }

    tapeLenght += MINUS_UNDEFIEND;
    console.log(tapeLenght) 
    return;
}


// calculateWordsInString("Easy string for count");
// calculateWordsInString("Easy");
// calculateWordsInString("Some string with a triple   space");
// calculateWordsInString("Some?  string, with a triple   space");