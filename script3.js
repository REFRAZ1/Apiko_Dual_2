function printSeasonByMonth(month) {

    switch (month.ToLowercase()) {

        case "december":
        case "january":
        case "february":
            console.log('Зараз пора року Winter');
            break;

        case "march":
        case "april":
        case "may":
            console.log('Зараз пора року Spring');
            break;

        case "june":
        case "july":
        case "august":
            console.log('Зараз пора року Summer');
            break;

        case "september":
        case "october":
        case "november":
            console.log('Зараз пора року Autumn');
            break;

    }
}

printSeasonByMonth("December");