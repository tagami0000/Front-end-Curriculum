document.addEventListener("DOMContentLoaded", function() {
    // この中にコードを書くことで、HTMLの読み込み完了後に実行される
    document.getElementById("button1").addEventListener("click", function() {
        this.classList.toggle("red");
    });
});