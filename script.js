const clickSound = new Audio("sounds/パフ.mp3");


document.getElementById("omikuji-btn").addEventListener("click", function() {
    clickSound.play();

    const results = ["大吉", "中吉", "小吉", "吉", "末吉", "凶"];
    const result = results[Math.floor(Math.random() * results.length)];

    const resultBox = document.getElementById("omikuji-result");
    resultBox.textContent = result;
    resultBox.style.opacity = 1;
});

// 名前決定ボタン
document.getElementById("name-btn").addEventListener("click", function() {
    const name = document.getElementById("name-input").value;

    if (name === "") {
        alert("名前を入力してね！");
        return;
    }

    // 名前入りメッセージ
    document.getElementById("title-message").textContent = `🎍 ${name}、あけましておめでとう 🎍`;

    // 画面切り替え
    document.getElementById("name-screen").style.display = "none";
    document.getElementById("nenga-screen").style.display = "block";


});

