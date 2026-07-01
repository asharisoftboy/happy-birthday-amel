// =========================
// THE LAST LETTER
// app.js
// =========================

document.addEventListener("DOMContentLoaded", () => {

    const loading = document.getElementById("loading");
    const progress = document.querySelector(".progress-bar");
    const openBtn = document.getElementById("openBtn");
    const music = document.getElementById("bgMusic");
    const transition = document.getElementById("transition");

    let value = 0;

    //--------------------------------------------------
    // Loading Animation
    //--------------------------------------------------

    const loader = setInterval(() => {

        value++;

        progress.style.width = value + "%";

        if (value >= 100) {

            clearInterval(loader);

            setTimeout(() => {

                loading.style.opacity = "0";
                loading.style.pointerEvents = "none";

                setTimeout(() => {
                    loading.style.display = "none";
                }, 800);

            }, 300);

        }

    }, 18);

    //--------------------------------------------------
    // Open Button
    //--------------------------------------------------

    openBtn.addEventListener("click", () => {

        // Musik nanti akan berjalan jika ada file audio
        if (music) {
            music.play().catch(() => {});
        }

        transition.style.visibility = "visible";

        transition.style.opacity = "1";

        setTimeout(() => {

            // Untuk sementara
            // Nanti diganti menuju Gift Scene

            alert("Part 5 nanti masuk ke Gift Scene 🎁");

            transition.style.opacity = "0";

            setTimeout(() => {

                transition.style.visibility = "hidden";

            },600);

        },700);

    });

});
