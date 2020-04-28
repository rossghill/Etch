document.addEventListener('DOMContentLoaded', function () {

    let maleQuantity = m.length;
    let femaleQuantity = f.length;
    let modelNo = 0;
    let genderData = document.querySelector('#gender_data').innerText;
    let timeData = document.querySelector('#time_data').innerText;
    let imageContainer = document.querySelector('.img-container');
    let skipBtn = document.querySelector('.skip-button');
    let display = document.querySelector('#time');
    let genderSet;
    let intv;


    function getModels(){
        
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
        // return genderSet;
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

    function setPoseTime(time) {
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

    function startTimer(duration, display) {
        duration = duration / 1000;
        var timer = duration, minutes, seconds;
        intv = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
    
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }

    // Initial pose and time configure - to run once
    getModels();
    setModel();
    let poseTime = setPoseTime(timeData);
    startTimer(poseTime, display);

    // Runs every second to check timer
    setInterval(function(){
        if(display.textContent == '00:00'){
            getModels();
            setModel();
            startTimer(poseTime, display);
        }
    }, 1000);


    skipBtn.addEventListener('click', function(){
        getModels();
        setModel();
        let poseTime = setPoseTime(timeData);
        clearInterval(intv);
        startTimer(poseTime, display);
    });


})