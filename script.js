document.addEventListener('DOMContentLoaded', function () {

    let maleQuantity = m.length;
    let femaleQuantity = f.length;
    let modelNo = 0;
    let genderData = document.querySelector('#gender_data').innerText;
    let timeData = document.querySelector('#time_data').innerText;
    let imageContainer = document.querySelector('.img-container');


    function getModels(){
        let genderSet;
        if (genderData == "All") {
            let randomNo = Math.random();
            genderSet = (randomNo > 0.5) ? m : f;  
        }
        else if (genderData == "M") {
            genderSet = m;
        }
        else if (genderData == "F") {
            genderSet = f;
        }
        return genderSet;
    }

    function setModel(){
        if (genderSet == m) { 
            modelNo = Math.floor(Math.random() * (maleQuantity - 0)) + 0;
        }
        if (genderSet == f) { 
            modelNo = Math.floor(Math.random() * (femaleQuantity - 0)) + 0;
        }
     
        imageContainer.innerHTML = genderSet[modelNo];
    }

    function setTimer(time) {
        switch (time) {
            case "1":
                return 60000;
            case "2": 
                return 120000;
            case "5": 
                return 300000;
            case "10": 
                return 600000; 
            case "15": 
                return 900000;  
            case "20": 
                return 1200000;  
            case "30": 
                return 1800000;   
        }
    }

    let genderSet = getModels();
    setModel();
    let poseTime = setTimer(timeData);
    // console.log(poseTime);

    setInterval(getModels, poseTime)
    setInterval(setModel, poseTime);





})