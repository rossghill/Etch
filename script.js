function generateModel(){

    console.log("hi");

    var models = Object.create({});

    var asos_m_count = 31;
    var asos_f_count = 22;

    for (var x = 0; x <= (asos_m_count + asos_f_count); x++) {
        if(x>0 && x <= asos_m_count){
            models[x] = { key: x, brand: "Asos", gender: "male", imageURL: "/imgs/asos-model-imgs/male/" + x + ".jpg" };
        }
        else {
            models[x] = { key: x + 1, brand: "Asos", gender: "female", imageURL: "/imgs/asos-model-imgs/female/" + (x - asos_f_count - 9) + ".jpg" }
        }
    }


    let imageContainer = document.getElementById("random-img");
    let totalEntries = asos_m_count + asos_f_count;
    let randomNo = (Math.random() * (totalEntries - 0 + 1)) << 0;

    for (key in models) {
        if (models.hasOwnProperty(key)) {
            var value = models[key];
            if (value.key === randomNo) {
                console.log(value.imageURL);
                imageContainer.setAttribute("src", value.imageURL);
            }
        }
    }
}