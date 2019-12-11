<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
        <link rel="stylesheet" href="https://use.typekit.net/bpg4how.css">
        <link href="./sketch/stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="./style.css">
        <script type="text/javascript" src="script.js"></script>

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
    

    <div class="img-container">
        <img id="random-img" src="#" />
    </div>



<menu class="menu-bar menu-bar--expanded@md js-menu-bar">
  <li class="menu-bar__item menu-bar__item--trigger js-menu-bar__trigger" role="menuitem" aria-label="More options">
    <svg class="icon menu-bar__icon" aria-hidden="true" viewBox="0 0 16 16"><circle cx="8" cy="7.5" r="1.5" /><circle cx="1.5" cy="7.5" r="1.5" /><circle cx="14.5" cy="7.5" r="1.5" /></svg>
  </li>

  <li class="menu-bar__item menu-bar__item--hide" role="menuitem">
    <svg class="icon menu-bar__icon" aria-hidden="true" viewBox="0 0 12 12"><path d="M10.121.293a1,1,0,0,0-1.414,0L1,8,0,12l4-1,7.707-7.707a1,1,0,0,0,0-1.414Z"></path></svg>
    <span class="menu-bar__label">Edit</span>
  </li>

  <li class="menu-bar__item menu-bar__item--hide" role="menuitem">
    <svg class="icon menu-bar__icon" aria-hidden="true" viewBox="0 0 16 16"><path d="M2,6v8c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V6H2z"></path><path d="M12,3V1c0-0.6-0.4-1-1-1H5C4.4,0,4,0.4,4,1v2H0v2h16V3H12z M10,3H6V2h4V3z"></path></svg>
    <span class="menu-bar__label">Delete</span>
  </li>

  <li class="menu-bar__item menu-bar__item--hide" role="menuitem">
    <svg class="icon menu-bar__icon" aria-hidden="true" viewBox="0 0 16 16"><path d="M15.707,0.293c-0.273-0.272-0.68-0.365-1.043-0.234l-14,5C0.287,5.193,0.026,5.54,0.002,5.939 c-0.024,0.4,0.192,0.775,0.551,0.955l4.586,2.292L11,5l-4.187,5.862l2.292,4.586C9.276,15.787,9.623,16,10,16 c0.021,0,0.041-0.001,0.061-0.002c0.4-0.024,0.747-0.284,0.882-0.662l5-14C16.072,0.973,15.98,0.566,15.707,0.293z"></path></svg>
    <span class="menu-bar__label">Send</span>
  </li>

  <li class="menu-bar__item menu-bar__item--hide" role="menuitem">
    <svg class="icon menu-bar__icon" aria-hidden="true" viewBox="0 0 16 16"><path d="M8,12c0.3,0,0.5-0.1,0.7-0.3L14.4,6L13,4.6l-4,4V0H7v8.6l-4-4L1.6,6l5.7,5.7C7.5,11.9,7.7,12,8,12z"></path><rect x="1" y="14" width="14" height="2"></rect></svg>
    <span class="menu-bar__label">Download</span>
  </li>

  <li class="menu-bar__item" role="menuitem">
    <svg class="icon menu-bar__icon" aria-hidden="true" viewBox="0 0 16 16">><g><path d="M14.7,1.3c-0.4-0.4-1-0.4-1.4,0L8,6.6L2.7,1.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4L6.6,8l-5.3,5.3 c-0.4,0.4-0.4,1,0,1.4C1.5,14.9,1.7,15,2,15s0.5-0.1,0.7-0.3L8,9.4l5.3,5.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L9.4,8l5.3-5.3C15.1,2.3,15.1,1.7,14.7,1.3z"></path></g></svg>
    <span class="menu-bar__label">Close</span>
  </li>
</menu>


<script src="/script.js"></script>    
</body>

</html>