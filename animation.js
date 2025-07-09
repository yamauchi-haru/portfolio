document.addEventListener("DOMContentLoaded", function() {
    const titles = document.querySelectorAll('.ttl'); // .ttlクラスの要素を取得

    // Intersection Observerのコールバック関数
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in'); // 要素が見えたらfade-inクラスを追加
                observer.unobserve(entry.target); // アニメーション後に監視を解除
            }
        });
    };  

    const observerOptions = {
        threshold: 0.1 // 10%が見えたらアニメーション
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    titles.forEach(title => {
        observer.observe(title); // 各.title要素を監視
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const titles = document.querySelectorAll('.ttl');

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    };

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    titles.forEach(title => {
        observer.observe(title);
    });
});

// メールアドレス
function generateEmail() {
    var user = "haruchiman.08";
    var domain = "gmail.com";
    var email = user + "@" + domain;
    var emailLink = "mailto:" + email;
    document.getElementById("email").href = emailLink;
    document.getElementById("emailText").innerText = email;
}

window.onload = generateEmail;