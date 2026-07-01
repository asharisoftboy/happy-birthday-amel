document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("particles");

    if (!container) return;

    function createHeart(){

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = "❤";

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.fontSize = (12 + Math.random() * 18) + "px";

        heart.style.animationDuration = (8 + Math.random() * 8) + "s";

        heart.style.opacity = Math.random();

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        },16000);

    }

    function createSparkle(){

        const sparkle = document.createElement("div");

        sparkle.className = "sparkle";

        sparkle.style.left = Math.random()*100+"vw";

        sparkle.style.top = Math.random()*100+"vh";

        sparkle.style.animationDuration =
            (1+Math.random()*2)+"s";

        container.appendChild(sparkle);

        setTimeout(()=>{
            sparkle.remove();
        },3000);

    }

    setInterval(createHeart,700);

    setInterval(createSparkle,250);

});
