document.addEventListener('DOMContentLoaded', function () {

    let source = document.getElementById("source_data").innerText;
    let gender = document.getElementById("gender_data").innerText;
    let time = document.getElementById("time_data").innerText;

    let realTime;

    console.log(source);
    console.log(gender);

    var models = Object.create({});
    var asos_m_count = 31;
    var asos_f_count = 22;
    var unsplash_m_count = 1;
    var unsplash_f_count = 2;

    if (source === "ASOS" && gender === "All") {
        for (var x = 0; x <= (asos_m_count + asos_f_count); x++) {
            if (x > 0 && x <= asos_m_count) {
                models[x] = { key: x, brand: "Asos", gender: "male", imageURL: "/imgs/asos-model-imgs/male/" + x + ".jpg" };
            }
            else {
                models[x] = { key: x + 1, brand: "Asos", gender: "female", imageURL: "/imgs/asos-model-imgs/female/" + (x - asos_f_count - 9) + ".jpg" }
            }
            setTimer();
            setRandom(asos_m_count, asos_f_count);
        }
    }

    if (source === "ASOS" && gender === "M") {
        for (var x = 0; x <= asos_m_count; x++) {
            if (x > 0 && x <= asos_m_count) {
                models[x] = { key: x, brand: "Asos", gender: "male", imageURL: "/imgs/asos-model-imgs/male/" + x + ".jpg" };
            }
        }
        setTimer();
        setRandom(asos_m_count, asos_f_count);
    }

    if (source === "ASOS" && gender === "F") {
        for (var x = 0; x <= asos_f_count; x++) {
            if (x > 0 && x <= asos_f_count) {
                models[x] = { key: x, brand: "Asos", gender: "female", imageURL: "/imgs/asos-model-imgs/female/" + x + ".jpg" };
            }
        }
        setTimer();
        setRandom(asos_m_count, asos_f_count);
    }

    if (source === "Unsplash" && gender === "All") {
        for (var x = 0; x <= (unsplash_m_count + unsplash_f_count); x++) {
            if (x > 0 && x <= unsplash_m_count) {
                models[x] = { key: x, brand: "Unsplash", gender: "male", imageURL: "/imgs/unsplash-model-imgs/male/" + x + ".jpg" };
            }
            else {
                models[x] = { key: x + 1, brand: "Unsplash", gender: "female", imageURL: "/imgs/unsplash-model-imgs/female/" + (x - unsplash_f_count - 9) + ".jpg" }
            }
            setTimer();
            setRandom(unsplash_m_count, unsplash_f_count);
        }
    }

    if (source === "Unsplash" && gender === "M") {
        for (var x = 0; x <= unsplash_m_count; x++) {
            if (x > 0 && x <= unsplash_m_count) {
                models[x] = { key: x, brand: "Unsplash", gender: "male", imageURL: "/imgs/unsplash-model-imgs/male/" + x + ".jpg" };
            }
        }
        setTimer();
        setRandom(unsplash_m_count, unsplash_f_count);
    }

    if (source === "Unsplash" && gender === "F") {
        for (var x = 0; x <= unsplash_f_count; x++) {
            if (x > 0 && x <= unsplash_f_count) {
                models[x] = { key: x, brand: "Unsplash", gender: "female", imageURL: "/imgs/unsplash-model-imgs/female/" + x + ".jpg" };
            }
        }
        setTimer();
        setRandom(unsplash_m_count, unsplash_f_count);
    }

    // Get random image
    function setRandom(m_count, f_count) {
        let imageContainer = document.getElementById("random-img");
        let totalEntries = m_count + f_count;
        let randomNo = (Math.random() * (totalEntries - 0 + 1)) << 0;

        for (key in models) {
            if (models.hasOwnProperty(key)) {
                var value = models[key];
                if (value.key === randomNo) {
                    imageContainer.setAttribute("src", value.imageURL);
                }
            }
        }
    }

    // Set the countdown
    function setTimer() {
        switch (time) {
            case 1:
                break;
            case 2:
                // code block
                break;
            case 5:
                // code block
                break;
            case 10:
                // code block
                break;
            case 15:
                // code block
                break;
            case 20:
                // code block
                break;
            case 30:
                // code block
                break;
            default:
            // code block
        }
    }
})