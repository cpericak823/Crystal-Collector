//Start the game
$(document).ready(function() {
    //Set score to zero
    //this will be variable called userscore and will be displayed in the ID score
    //use jquery to get element by ID and replace ID
    // var userscore, number, redJewel, blueJewel, yellowJewel, greenJewel;

    // function initializeGame() {
    //     userscore = "";
    //     number = "";
    //     redJewel = "";
    //     blueJewel = "";
    //     yellowJewel = "";
    //     greenJewel = "";

    //     $('')

    // }


    //Generate a number between 19 - 120
    //This will be a variable called number
    //Display this number in the div ID called computerNumberDiv using jquery
    function chosenNumber() {
        var number = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
            42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
            71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
            100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120
        ];

        var randomNumber = number[Math.floor(Math.random() * number.length)];

        console.log(randomNumber);
        return randomNumber;
    }
    var selectedNumber = chosenNumber();

    $("#computerNumberDiv").html("Computer Number: " + selectedNumber);


    //generate number between 1 and 12 for red jewel
    function chosenNumberRed() {
        var redJewel = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

        var randomNumberRed = redJewel[Math.floor(Math.random() * redJewel.length)];

        console.log(randomNumberRed);
        return randomNumberRed;
    }
    var selectedNumberRed = chosenNumberRed();


    //generate number between 1 and 12 for blue jewel
    function chosenNumberBlue() {
        var blueJewel = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

        var randomNumberBlue = blueJewel[Math.floor(Math.random() * blueJewel.length)];

        console.log(randomNumberBlue);
        return randomNumberBlue;
    }
    var selectedNumberBlue = chosenNumberBlue();

    //generate number between 1 and 12 for yellow jewel
    function chosenNumberYellow() {
        var yellowJewel = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

        var randomNumberYellow = yellowJewel[Math.floor(Math.random() * yellowJewel.length)];

        console.log(randomNumberYellow);
        return randomNumberYellow;
    }
    var selectedNumberYellow = chosenNumberYellow();

    //generate number between 1 and 12 for green jewel
    function chosenNumberGreen() {
        var greenJewel = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

        var randomNumberGreen = greenJewel[Math.floor(Math.random() * greenJewel.length)];

        console.log(randomNumberGreen);
        return randomNumberGreen;
    }
    var selectedNumberGreen = chosenNumberGreen();


    //On click of each button, add this number to the user score
    //use jquery .onclick events to trigger this




    //if userscore is equal to random-number, alert winner, add one to variable wins and display in stats, and reset score and random number
    //if userscore is greater than random-number, alert you lose, add one to variable losses and display in stats, and reset score and random number
    //use if statements to set conditions of userscore = or > than random-number

})
