//Start the game
$(document).ready(function() {
    // make our variables global to the runtime of our application
    var number, redJewel, blueJewel, yellowJewel, greenJewel;
    var userScore = 0;
    var numberWins = 0;
    var numberLosses = 0;



    // use a function to initialize the game. this way when the user hits clear
    // we can guarantee that we're in the exact same state as we were when the app started.
    function initializeGame() {

        number = "";
        redJewel = "";
        blueJewel = "";
        yellowJewel = "";
        greenJewel = "";

        $('#redJewel, #blueJewel, #yellowJewel, #greenJewel').empty();
        $('#userScoreDiv').html("Your total score is: ");
        $('#computerNumberDiv').html("Computer Number: " + chosenNumber());
    }



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


    //Capture the click of each jewel button,
    //if redJewel is clicked, as selectedRedJewel number to user score
    $('.redJewel').on('click', function(event) {
        userScore += selectedNumberRed;
        $('#userScoreDiv').html("Your total score is: " + userScore);
        winner();
        loser();
    });


    //Capture the click of each jewel button,
    //if blueJewel is clicked, display selectedBlueJewel number to user score
    $('.blueJewel').on('click', function(event) {
        userScore += selectedNumberBlue;
        $('#userScoreDiv').html("Your total score is: " + userScore);
        winner();
        loser();
    });


    //Capture the click of each jewel button,
    //if yellowJewel is clicked, display selectedYellowJewel number to user score
    $('.yellowJewel').on('click', function(event) {
        userScore += selectedNumberYellow;
        $('#userScoreDiv').html("Your total score is: " + userScore);
        winner();
        loser();
    });


    //Capture the click of each jewel button,
    //if greenJewel is clicked, display selectedGreenJewel number to user score
    $('.greenJewel').on('click', function(event) {
        userScore += selectedNumberGreen;
        $('#userScoreDiv').html("Your total score is: " + userScore);
        winner();
        loser();

    });


    //if userscore is equal to random-number, alert winner, and update dom
    function winner() {
        console.log(userScore)
        console.log(selectedNumber)
        if (userScore === selectedNumber) {
            console.log('winner')
            alert('Winner!');
            numberWins++
            initializeGame();

        }
        $('#wins').html('Wins: ' + numberWins);

    }


    //if userscore is greater than random-number, alert loser, and update dom
    function loser() {
        console.log(userScore)
        console.log(selectedNumber)
        if (userScore > selectedNumber) {
            console.log('loser')
            alert('Loser!');
            numberLosses++
            initializeGame();

        }
        $('#losses').html('Losses: ' + numberLosses);
    }


});
