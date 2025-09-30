function calculateSumOfArray(){
    const numbers = [3, 2, "2", null, 1.5, 9.5, undefined];

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {

        let valueType = typeof(numbers[i])

        if (valueType !== "number" || Number.isNaN(numbers[i]))
        {
            continue;
        }
        else
        {
           sum += numbers[i];
        }

    }

    console.log(`Сума елементів масиву: ${sum}`);
        
}

calculateSumOfArray();
