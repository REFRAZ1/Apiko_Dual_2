// Функція якій буде передаватися число
function pointPowsOf2(num) {

    const valueType = typeof(num);
    const checkType = num;
    
    if ( valueType !== "number" || Number.isNaN(checkType)) {
        console.log("Помилка введене значення не є цифрою або числом.");
        console.log(`Ви ввели: ${valueType}`);
        return;
    }

    for (let i = 0; i <= num; i++) {

        if (i % 2 === 0) {
            console.log(i);
        }

    };

    return;

}

//Виклик функцій

// pointPowsOf2("302");
// pointPowsOf2(null);
// pointPowsOf2(128);
// pointPowsOf2(60);