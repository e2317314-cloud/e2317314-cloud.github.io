alert("体育会サッカー部の紹介ページへようこそ！");
 console.log("体育会サッカー部の紹介ページへようこそ！");
function sayHello(language) {

    let message = "";

    if (language === 0) {
        message = "こんにちは";
    } else if (language === 1) {
        message = "Hello";
    } else if (language === 2) {
        message = "Bonjour";
    } else if (language === 3) {
        message = "Hola";
    } else {
        message = "指定された言語はサポートされていません"
    }

    console.log(message)
    const p_hello = document.querySelector("#say_hello");
    p_hello.textContent = message;

    
}

function showPractice(number){
    
    let menu = "";
    if (number === 0){
        menu = "パス練習";
    } else if (number === 1){
        menu = "シュート練習";
    } else if (number === 2){
        menu = "対人練習";
    } else if (number === 3){
        menu = "ゲーム形式";
    }
    const practice = document.querySelector("#practice");
    practice.textContent = menu;

    
}

function checkResult() {
    let goals = 3;
    let lostGoals = 1;
    let result = "";

    if (goals > lostGoals){
        result = "勝利！";
    } else if (goals < lostGoals){
        result = "敗戦";
    }else {
        result = "引き分け";
    }

    const matchResult = document.querySelector("#match_result");
    matchResult.textContent = result;
}


