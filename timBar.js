
    const popupElement = document.getElementById("popup");
    const countdownElement = document.getElementById("countdown");
countdownElement.style.fontSize = "24px"; // حجم الخط

  
  
    const closeButton = document.getElementById("close-button");
    const progressElement = document.querySelector(".timer-progress-bar");
    let countdownInterval;
    let progressBarInterval;

    if (window.location.href !== "https://www.tun-24.com") {
        setTimeout(function () {
            popupElement.style.display = "block";

            let countdown = 7;
            countdownElement.textContent = countdown;

            progressBarInterval = setInterval(function () {
                const progressPercentage = ((7 - countdown) / 6) * 100;
                progressElement.style.width = progressPercentage + "%";
            }, 1000);

            countdownInterval = setInterval(function () {
                countdown--;
                countdownElement.textContent = countdown;

                if (countdown <= 0) {
                    clearInterval(progressBarInterval);
                    clearInterval(countdownInterval);
                    countdownElement.style.display = "none";
                    closeButton.style.display = "block";
                }
            }, 1000);
        }, 4000);
    }

    closeButton.addEventListener("click", function () {
        popupElement.style.display = "none";
        clearInterval(countdownInterval);
        clearInterval(progressBarInterval);
    });
