const biden=document.getElementById("biden");
    const pen=document.getElementById("pen");

    document.addEventListener("keydown",function (event){
        jump();
    });

    function jump () {
        if (biden.classList !="jump"){
            biden.classList.add("jump")
        }
        setTimeout(function () {
            biden.classList.remove("jump")
        },300)
    }

    let isAlive= setInterval(function () {
        let bidenTop = parseInt(window.getComputedStyle(biden).getPropertyValue("top"));
        let penLeft = parseInt(window.getComputedStyle(pen).getPropertyValue("left"));

        if (penLeft < 50 && penLeft > 0 && bidenTop >= 150) {
            alert("БАЙДЕН ЛОХ!!!")
        }
    }, 10)



