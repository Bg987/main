let y = 0, Tie, x, sname, fname, f_n, s_n, fWin, sWin;
let f_N = new Array(9);
let s_N = new Array(9);
function start() {
    fname = prompt("enter first player name (sign X)(max 7 character");
    sname = prompt("enter second player name (sign O)(max 7 character");
    y = 0, Tie = 0, x = 1, f_n = 0, s_n = 0, fWin = 0, sWin = 0;
    if(fname.length>7||sname.length>7){
        alert("number of characters must be less than 7 ");
        start();
    }
    display();
}
function exit() {
    if (fWin > sWin) {
        alert(fname + " win" + "\n" + sname + " better luck next time");
    }
    else if (sWin > fWin) {
        alert(sname + " win" + "\n" + fname + " better luck next time");
    }
    else if (sWin == fWin && sWin != 0 && fWin != 0 && Tie != 0) {
        alert("Tie ");
    }
    else {
        alert("game khelni hi nahi thhi to chalu kyu ki");
    }
    emptyBoard();
}
function Continue() {
    x = 1;
    y = 0;
    emptyBoard();
}
function emptyBoard() {
    for (i = 0; i < 9; i++) {
        let x = "cell" + i;
        document.getElementById(x).innerHTML = "_";
    }
    x = 1;
    arrayEmpty();
}
function arrayEmpty() {
    for (i = 0; i < 9; i++) {
        f_N[i] = 0;
        s_N[i] = 0;
    }
    display();
}
/*
function computer(){
    let x = Math.floor(Math.random()*9);
    let id = "cell"+x;
    if(document.getElementById(id).innerHTML=="_"){
        document.getElementById(id).innerHTML="O";
        return id;
    }
    else{
        computer();
    }
}*/
function process(id) {
    if (x < 10) {
        if (document.getElementById(id).innerHTML == "_") {
            let ID = Number();
            if (x % 2 != 0) {
                document.getElementById(id).innerHTML = "X";
                f_N[id.substr(4)] = 1;
                ++f_n;
                if (f_n >= 3) {
                    checkWin(1, f_N);
                }
            }
            else {
                document.getElementById(id).innerHTML = "O";
                ++s_n;
                s_N[id.substr(4)] = 2;
                if (s_n >= 3) {
                    checkWin(2, s_N);
                }
            }
            ++x;
        }
    }
    else {
        alert("match tie");
        y = 1;
        Tie++;
        emptyBoard();
    }
    display();
}
function checkWin(x, array) {
    if ((array[0] == x && array[1] == x && array[2] == x) || (array[3] == x && array[4] == x && array[5] == x) || (array[6] == x && array[7] == x && array[8] == x) || (array[0] == x && array[3] == x && array[6] == x) || (array[1] == x && array[4] == x && array[7] == x) || (array[2] == x && array[5] == x && array[8] == x) || (array[0] == x && array[4] == x && array[8] == x) || (array[2] == x && array[4] == x && array[6] == x)) {
        if (x == 1) {
            // alert(fname + " win");
            fWin++;
        }
        else if (x == 2) {
            // alert(sname + " win");
            sWin++;
        }
        document.getElementById("start").innerHTML = "new game";
        y = 1;
        emptyBoard();
    }
    display();
}
function display() {
    if (x % 2 != 0 && fname !== undefined && y == 0) {
        document.getElementById("gamestatus").innerHTML = fname + "'s " + "turn" + "(X)";
    }
    else if (sname !== undefined && y == 0) {
        document.getElementById("gamestatus").innerHTML = sname + "'s " + "turn" + "(O)";
    }
    else if (sname !== undefined && fname !== undefined && y == 1) {
        document.getElementById("gamestatus").innerHTML = "new game or continue";
    }
    document.getElementById("fname").innerHTML = fname;
    document.getElementById("sname").innerHTML = sname;
    document.getElementById("fScore").innerHTML = fWin;
    document.getElementById("sScore").innerHTML = sWin;
    document.getElementById("tieScore").innerHTML = Tie;
}