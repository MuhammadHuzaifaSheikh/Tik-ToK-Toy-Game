var sign = 'X';
var playerWonName = document.getElementById('player');
var player1 = prompt('Type player1 Name ').toUpperCase();
var player2 = prompt('Type player2 Name ').toUpperCase();


function printx(number) {
    var thisValue = document.getElementById("r" + number);
    console.log(thisValue);
    if (thisValue.innerText === "") {
        thisValue.innerText = sign;
        checksign();
        winner()
    }
}

function checksign() {
    if (sign === "X") {
        sign = "O";
    } else {
        sign = "X";
    }
}

var r1 = document.getElementById('r1');
var r2 = document.getElementById('r2');
var r3 = document.getElementById('r3');
var r4 = document.getElementById('r4');
var r5 = document.getElementById('r5');
var r6 = document.getElementById('r6');
var r7 = document.getElementById('r7');
var r8 = document.getElementById('r8');
var r9 = document.getElementById('r9');

function winner() {
    if (r1.innerHTML === 'X' && r2.innerHTML === 'X' && r3.innerHTML === 'X'
        || r4.innerHTML === 'X' && r5.innerHTML === 'X' && r6.innerHTML === 'X'
        || r7.innerHTML === 'X' && r8.innerHTML === 'X' && r9.innerHTML === 'X'

        || r1.innerHTML === 'X' && r4.innerHTML === 'X' && r7.innerHTML === 'X'
        || r2.innerHTML === 'X' && r5.innerHTML === 'X' && r8.innerHTML === 'X'
        || r3.innerHTML === 'X' && r6.innerHTML === 'X' && r9.innerHTML === 'X'

        || r1.innerHTML === 'X' && r5.innerHTML === 'X' && r9.innerHTML === 'X'
        || r3.innerHTML === 'X' && r5.innerHTML === 'X' && r7.innerHTML === 'X'
    ) {
        playerWonName.innerHTML = player1 + ' is Win';
        sign  = '';
        setTimeout(function () {
            location.reload()
        }, 1000)

    } else if (r1.innerHTML === 'O' && r2.innerHTML === 'O' && r3.innerHTML === 'O'
        || r4.innerHTML === 'O' && r5.innerHTML === 'O' && r6.innerHTML === 'O'
        || r7.innerHTML === 'X' && r8.innerHTML === 'X' && r9.innerHTML === 'X'

        || r1.innerHTML === 'O' && r4.innerHTML === 'O' && r7.innerHTML === 'O'
        || r2.innerHTML === 'O' && r5.innerHTML === 'O' && r8.innerHTML === 'O'
        || r3.innerHTML === 'O' && r6.innerHTML === 'O' && r9.innerHTML === 'O'

        || r1.innerHTML === 'O' && r5.innerHTML === 'O' && r9.innerHTML === 'O'
        || r3.innerHTML === 'O' && r5.innerHTML === 'O' && r7.innerHTML === 'O'
    ) {
        playerWonName.innerHTML = player2 + ' is win';
        sign = '';
        setTimeout(function () {
            location.reload()
        }, 8000)


    }


}

