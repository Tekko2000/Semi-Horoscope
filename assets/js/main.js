function horoskop() {
    var monat = document.getElementById("txt").value
    var bild = document.getElementById("pic")
    var month = document.getElementById("month")
    var description = document.getElementById("description")
    var result = document.getElementById("result")
    var warning = document.getElementById("warning")
    switch (monat) {
        case "Jan":
            result.style.display = "block"
            warning.style.display = "none"
            bild.src = "assets/img/Wassermann.png"
            month.innerHTML = "AQUARIUS<br>January<br>(21.01. - 19.02)"
            description.innerHTML = "Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…"
            break;
        case "Feb":
            result.style.display = "block"
            warning.style.display = "none"
            bild.src = "assets/img/Fische.png"
            month.innerHTML = "PISCES<br>February<br>(20.02. - 20.03.)"
            description.innerHTML = "Communication is very important today—written, spoken, and even nonverbal body language will all…"
            break;
        case "Mar":
            result.style.display = "block"
            warning.style.display = "none"
            bild.src = "assets/img/Widder.png"
            month.innerHTML = "ARIES<br>March<br> (21.03. - 20.04.)"
            description.innerHTML = "Today your patience might be tested when one or more of your projects gets put on hold by someone…"
            break;
        case "Apr":
            result.style.display = "block"
            warning.style.display = "none"
            bild.src = "assets/img/Stier.png"
            month.innerHTML = "TAURUS<br>April<br>(21.04. - 20.05.)"
            description.innerHTML = "Your intense energy makes you a great candidate for a leadership position right now, so if you are…"
            break;
        case "May":
            result.style.display = "block"
            warning.style.display = "none"
            bild.src = "assets/img/Zwilling.png"
            month.innerHTML = "GEMINI<br>May<br>(21.05. - 21.06.)"
            description.innerHTML = "If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…"
            break;
        case "Jun":
            result.style.display = "block"
            warning.style.display = "none"
            bild.src = "assets/img/Krebs.png"
            month.innerHTML = "CANCER<br>June<br>(22.06. - 22.07.)"
            description.innerHTML = "Too many different elements in your life are overlapping with each other right now—and it's your…"
            break;
        case "Jul":
            result.style.display = "block"
            warning.style.display = "none"
            bild.src = "assets/img/Löwe.png"
            month.innerHTML = "LEO<br>July<br>(23.07. - 23.08.)"
            description.innerHTML = "The issues you'll be dealing with today are very complicated ones—you will have to navigate your…"
            break;
        case "Aug":
            result.style.display = "block"
            warning.style.display = "none"
            bild.src = "assets/img/Jungfrau.png"
            month.innerHTML = "VIRGO<br>August<br>(24.08. - 23.09.)"
            description.innerHTML = "You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…"
            break;
        case "Sep":
            result.style.display = "block"
            warning.style.display = "none"
            bild.src = "assets/img/Waage.png"
            month.innerHTML = "LIBRA<br>September<br>(24.09. - 23.10.)"
            description.innerHTML = "Pick a cultural event that's coming up and get some tickets for it today."
            break;
        case "Oct":
            result.style.display = "block"
            warning.style.display = "none"
            bild.src = "assets/img/Skorpion.png"
            month.innerHTML = "SCORPIO<br>October<br>(24.10. - 22.11.)"
            description.innerHTML = "Someone will challenge a belief that you've held for a very long time today—and they will say an…"
            break;
        case "Nov":
            result.style.display = "block"
            warning.style.display = "none"
            bild.src = "assets/img/Schütze.png"
            month.innerHTML = "SAGITTARIUS<br>November<br>(23.11. - 21.12)"
            description.innerHTML = "Someone in your life needs to step up and take on more responsibility—and you need to tell them to...."
            break;
        case "Dec":
            result.style.display = "block"
            warning.style.display = "none"
            bild.src = "assets/img/Steinbock.png"
            month.innerHTML = "Capricorn<br>December<br>(22.12. - 20.01)"
            description.innerHTML = "Breaking the rules is not always a bad thing—especially if the rules limit your creativity."
            break;
        default:
            warning.style.display = "block"
            warning.innerHTML = "Please enter a month!!!"
            warning.style.color = "red"
            result.style.display = "none"
    }

}