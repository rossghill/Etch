<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
        <link rel="stylesheet" href="https://use.typekit.net/bpg4how.css">
        <link href="./sketch/stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />
        <link href="./sketch/stylesheets/custom/form.css" media="screen, projection" rel="stylesheet" type="text/css" />

</head>

<body>

    <div class="formdata">
        <div id="source_data">
            <?php $source = htmlspecialchars($_POST['selectSource']); echo $source; ?>
        </div>
        <div id="gender_data">
            <?php $source = htmlspecialchars($_POST['selectGender']); echo $source; ?>
        </div>
        <div id="time_data">
            <?php $source = htmlspecialchars($_POST['selectTime']); echo $source; ?>
        </div>
        
    </div>
    
    
    <div class="control-group">
        <div class="back-button"><a href="http://localhost:8000/">[ << Back ]</a></div>
        <div id="time">00:00</div>
        <div class="skip-button"><a href="#">[ Skip >> ]</a></div>
    </div>

    <div class="img-container">

    </div>


    <script src="/pics.js"></script>  
    <script src="/script.js"></script>

</body>

</html>