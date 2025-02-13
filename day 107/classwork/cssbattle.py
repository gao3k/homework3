<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSSBattle Challenge</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: #62306D;
        }
        .container {
            position: relative;
            width: 200px;
            height: 200px;
        }
        .circle {
            width: 100px;
            height: 100px;
            background: #F7EC7D;
            position: absolute;
            border-radius: 50%;
        }
        .top-left { top: 0; left: 0; }
        .top-right { top: 0; right: 0; }
        .bottom-left { bottom: 0; left: 0; }
        .bottom-right { bottom: 0; right: 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="circle top-left"></div>
        <div class="circle top-right"></div>
        <div class="circle bottom-left"></div>
        <div class="circle bottom-right"></div>
    </div>
</body>
</html>
