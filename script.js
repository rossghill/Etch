document.addEventListener('DOMContentLoaded', function () {

    // Set back btn
    document.querySelector('.back-button').addEventListener('click', function(){
        window.history.back();
    });

    // Get form values from html url
    function getQueryVariable(variable)
    {
        let query = window.location.search.substring(1);
        let vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
                var pair = vars[i].split("=");
                if(pair[0] == variable){return pair[1];}
        }
        return(false);
    }

    let maleQuantity = m.length;
    let femaleQuantity = f.length;
    let modelNo = 0;
    // let modelData = document.querySelector('#gender_data').innerText;
    // let timeData = document.querySelector('#time_data').innerText;
    let modelData = getQueryVariable("Models");
    let timeData = getQueryVariable("selectTime");
    let imageContainer = document.querySelector('.img-container');
    let skipBtn = document.querySelector('.skip-button');
    let display = document.querySelector('#time');
    let modelSet;
    let intv;


    function getModels(){
        
        if (modelData == "All") {
            let randomNo = Math.random();
            modelSet = (randomNo > 0.5) ? m : f;  
        }
        else if (modelData == "M") {
            modelSet = m;
        }
        else if (modelData == "F") {
            modelSet = f;
        }
        // return modelSet;
    }

    function setModel(){
        if (modelSet == m) { 
            modelNo = Math.floor(Math.random() * (maleQuantity - 0)) + 0;
        }
        if (modelSet == f) { 
            modelNo = Math.floor(Math.random() * (femaleQuantity - 0)) + 0;
        }
     
        imageContainer.innerHTML = modelSet[modelNo];
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