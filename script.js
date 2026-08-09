document.addEventListener("DOMContentLoaded", () => {
  const bgMusic = document.getElementById("bgMusic");

    const openBtn = document.getElementById("openBtn");
    const welcome = document.getElementById("welcome");
    const surprise = document.getElementById("surprise");
    const story = document.getElementById("story");
    const typingText = document.getElementById("typingText");
    const nextBtn = document.getElementById("nextBtn");

    const storyCards =
        document.querySelectorAll(".story-card");

    const storyButtons =
        document.querySelectorAll(".story-next");


    /* =========================
       OPEN SURPRISE
    ========================= */

    if (openBtn) {

        openBtn.addEventListener("click", () => {
          if (bgMusic) {
    bgMusic.volume = 0.45;

    bgMusic.play().catch(() => {
        console.log("Music could not start.");
    });
}

            if (welcome) {
                welcome.style.display = "none";
            }

            if (surprise) {
                surprise.style.display = "flex";
            }

            startTyping();

            createHearts();
            createPetals();
            createSparkles();

        });

    }


    /* =========================
       TYPEWRITER
    ========================= */

    const message =
        "Akanksha, even though we're far away from each other, I wanted to create something that could travel that distance for me. Something small, but made especially for you. ❤️";

    let index = 0;


    function startTyping() {

        if (!typingText) return;

        typingText.innerHTML = "";

        index = 0;

        typeCharacter();

    }


    function typeCharacter() {

        if (!typingText) return;

        if (index < message.length) {

            typingText.innerHTML +=
                message.charAt(index);

            index++;

            setTimeout(typeCharacter, 45);

        }

    }


    /* =========================
       SHOW STORY
    ========================= */

    if (nextBtn) {

        nextBtn.addEventListener("click", () => {

            if (surprise) {
                surprise.style.display = "none";
            }

            if (story) {
                story.style.display = "flex";
            }

        });

    }


    /* =========================
       STORY CARDS
    ========================= */

    let currentStory = 0;


    storyButtons.forEach((button) => {

        button.addEventListener("click", () => {

            if (storyCards[currentStory]) {

                storyCards[currentStory]
                    .classList.remove("active");

            }

            currentStory++;


            if (storyCards[currentStory]) {

                storyCards[currentStory]
                    .classList.add("active");

            }

        });

    });


    /* =========================
       FLOATING HEARTS
    ========================= */

    function createHearts() {

        const container =
            document.querySelector(".hearts");

        if (!container) return;


        const symbols = [
            "❤️",
            "💕",
            "💗",
            "💖",
            "💓"
        ];


        setInterval(() => {

            const heart =
                document.createElement("span");

            heart.classList.add(
                "floating-heart"
            );


            heart.innerHTML =
                symbols[
                    Math.floor(
                        Math.random() *
                        symbols.length
                    )
                ];


            heart.style.left =
                Math.random() * 100 + "vw";


            heart.style.fontSize =
                15 +
                Math.random() * 25 +
                "px";


            heart.style.animationDuration =
                5 +
                Math.random() * 5 +
                "s";


            container.appendChild(heart);


            setTimeout(() => {

                heart.remove();

            }, 10000);

        }, 500);

    }


    /* =========================
       FALLING PETALS
    ========================= */

    function createPetals() {

        const container =
            document.querySelector(".petals");

        if (!container) return;


        setInterval(() => {

            const petal =
                document.createElement("span");


            petal.classList.add(
                "falling-petal"
            );


            petal.innerHTML = "🌸";


            petal.style.left =
                Math.random() * 100 + "vw";


            petal.style.fontSize =
                12 +
                Math.random() * 15 +
                "px";


            petal.style.animationDuration =
                5 +
                Math.random() * 5 +
                "s";


            container.appendChild(petal);


            setTimeout(() => {

                petal.remove();

            }, 10000);

        }, 700);

    }


    /* =========================
       SPARKLES
    ========================= */

    function createSparkles() {

        const container =
            document.querySelector(".stars");

        if (!container) return;


        setInterval(() => {

            const sparkle =
                document.createElement("span");


            sparkle.classList.add(
                "sparkle"
            );


            sparkle.innerHTML = "✦";


            sparkle.style.left =
                Math.random() * 100 + "vw";


            sparkle.style.top =
                Math.random() * 100 + "vh";


            sparkle.style.fontSize =
                8 +
                Math.random() * 15 +
                "px";


            container.appendChild(sparkle);


            setTimeout(() => {

                sparkle.remove();

            }, 3000);

        }, 250);

    }
    
    /* =========================
   SHOW BOUQUET
========================= */

const bouquetBtn =
    document.getElementById("bouquetBtn");

const bouquet =
    document.getElementById("bouquet");

    if (bouquetBtn) {

        bouquetBtn.addEventListener("click", () => {

            if (story) {
                story.style.display = "none";
            }

            if (bouquet) {
                bouquet.style.display = "flex";
            }

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }
    /* =========================
       PERSONAL LETTER
    ========================= */

    const letterBtn =
        document.getElementById("letterBtn");

    const letterSection =
        document.getElementById("letter");

    const openLetterBtn =
        document.getElementById("openLetterBtn");

    const envelope =
        document.getElementById("envelope");

    const letterPaper =
        document.getElementById("letterPaper");


    if (letterBtn) {

        letterBtn.addEventListener("click", () => {

            if (bouquet) {
                bouquet.style.display = "none";
            }

            if (letterSection) {
                letterSection.style.display = "flex";
            }

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    if (openLetterBtn) {

        openLetterBtn.addEventListener("click", () => {

            if (envelope) {
                envelope.style.display = "none";
            }

            openLetterBtn.style.display = "none";

            if (letterPaper) {
                letterPaper.style.display = "block";
            }

        });

    }
    /* =========================
       FINAL SURPRISE
    ========================= */

    const finalBtn =
        document.getElementById("finalBtn");

    const finalSection =
        document.getElementById("final");

    const foreverBtn =
        document.getElementById("foreverBtn");

    const finalAnswer =
        document.getElementById("finalAnswer");


    if (finalBtn) {

        finalBtn.addEventListener("click", () => {

            if (letterSection) {
                letterSection.style.display = "none";
            }

            if (finalSection) {
                finalSection.style.display = "flex";
            }

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    if (foreverBtn) {

        foreverBtn.addEventListener("click", () => {

            finalAnswer.innerHTML =
                "Then keep this little piece of my heart with you. ❤️🫂";

            foreverBtn.innerHTML =
                "Suraj ❤️ Akanksha";

            createFinalHearts();

        });

    }


    function createFinalHearts() {

        const container =
            document.querySelector(".final-section");

        if (!container) return;

        for (let i = 0; i < 25; i++) {

            const heart =
                document.createElement("span");

            heart.innerHTML = "❤️";

            heart.style.position = "absolute";

            heart.style.left =
                Math.random() * 100 + "%";

            heart.style.bottom = "-30px";

            heart.style.fontSize =
                15 + Math.random() * 25 + "px";

            heart.style.animation =
                "finalHeartFloat " +
                (3 + Math.random() * 4) +
                "s linear forwards";

            heart.style.pointerEvents = "none";

            container.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 8000);

        }

    }    
      /* =========================
       PREMIUM SPARKLE TRAIL
    ========================= */

    document.addEventListener("mousemove", (event) => {

        if (window.innerWidth <= 600) return;

        const sparkle =
            document.createElement("span");

        sparkle.className =
            "magic-sparkle";

        sparkle.innerHTML = "✦";

        sparkle.style.left =
            event.clientX + "px";

        sparkle.style.top =
            event.clientY + "px";

        document.body.appendChild(sparkle);

        setTimeout(() => {

            sparkle.remove();

        }, 800);

    });


    /* =========================
       REPLAY
    ========================= */

    const replayBtn =
        document.getElementById("replayBtn");


    if (replayBtn) {

        replayBtn.addEventListener("click", () => {

            window.location.reload();

        });

    }
});
  
  


  