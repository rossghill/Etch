document.addEventListener('DOMContentLoaded', function () {

    let maleQuantity = m.length;
    let femaleQuantity = f.length;
    let modelNo = 0;

    function getModel(){
        let randomNo = Math.random();
        let modelSet = (randomNo > 0.5) ? m : f;  
        return modelSet;
    }

    let genderSet = getModel();

    if (genderSet == m) { 
        modelNo = Math.floor(Math.random() * (maleQuantity - 0)) + 0;
    }
    if (genderSet == f) { 
        modelNo = Math.floor(Math.random() * (femaleQuantity - 0)) + 0;
    }

    // console.log(modelNo);

    let imageContainer = document.querySelector('.img-container');
    imageContainer.innerHTML = genderSet[modelNo];
    
})