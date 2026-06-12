---
title: "News Generator"
description: "News Generator"
icon: "🎨"
category: "Generator"
popular: true
---



<!DOCTYPE html>
<html>
<head>
    <title>Break Your Own News - Breaking News Generator</title>

    <meta property="og:title" content="Break Your Own News - The Breaking News Generator">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.breakyourownnews.com/">
    <meta property="og:image" content="https://www.breakyourownnews.com/fb.jpg">
    <meta property="og:site_name" content="Break Your Own News">
    <meta property="og:description"
          content="Today's top story... you! Or, whatever you want. Add your pic, write the headline and we'll go live to the scene. Sort of.">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Signika:400,700" rel='stylesheet' type='text/css'>

<script type="text/javascript" src="https://news-generator.pages.dev/script.js"></script>
    <link type="text/css" href="https://news-generator.pages.dev/style.css" rel="stylesheet" media="screen"/>
    <link rel="shortcut icon" type="image/png" href="/logo.png"/>
    <link rel="manifest" href="/manifest.json">


</head>
<body>
<div class="container">

    <section class="moneyplz">
        <div class="moneyplz__ads">
    
        </div>
    </section>

    <div class="grid">
        <section class="intro">
            <div class="group">
                <h1 class="logo">Break Your Own News</h1>

                <p class="intro__text">The Breaking News Generator - Today's top story... you! Or, whatever you want.
                    Add your pic, write the headline and we'll go live to the scene. Sort of.</p>
            </div>

            <div class="build-form">
			
			<!--<div class="build-form__item">
			<label class="build-form__label" for="textBox">Watermark</label>
                 <input type="text" id="watermarkBox" value="example.com" placeholder="Watermark"/>
	        </div>-->
	
                <div class="build-form__item">
                    <label class="build-form__label" for="textBox">Headline</label>
                    <input id="textBox" type="text" placeholder="Write your story here..."/>
                </div><!--
             --><div class="build-form__item">
                    <label class="build-form__label" for="tickerBox">Ticker</label>
                    <input id="tickerBox" type="text" placeholder="Fill out the ticker with the latest updates..."/>
                </div>

                <fieldset>
                    <legend class="build-form__label">Image Size</legend>
                    <div class="build-form__radio">
                        <input type="radio" id="wide" name="imageRatio" value="wide" checked>
                        <label for="wide">Wide Rectangle</label>
                    </div>
                    <div class="build-form__radio">
                        <input type="radio" id="square" name="imageRatio" value="square" >
                        <label for="square">Square</label>
                    </div>
                    <div class="build-form__radio">
                        <input type="radio" id="portrait" name="imageRatio" value="portrait" >
                        <label for="portrait">Portrait</label>
                    </div>

                </fieldset>


                <label class="build-form__label" for="imageLoader">Your Image</label>
                <input type="file" id="imageLoader" name="imageLoader"/>

                <p class="disclaimer">This app is intended for fun, humour and parody - be careful what you make and how it may be shared. You should avoid making things which are unlawful, defamatory or likely to cause distress. Have fun and be kind! </p>
            </div>

        </section><!--
        --><section class="main">
            <canvas id="canvasOne" width="1280" height="720" class="byon-canvas">
                Your browser does not support HTML5 Canvas.
            </canvas>

            <div class="share-row">
            <a href="#" class="button button--yellow" id="btn-download" download="breaking-news.jpg">
                <svg class="button__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Pro 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.--><path d="M272 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 313.4L139.3 228.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l128 128c6.2 6.2 16.4 6.2 22.6 0l128-128c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L272 329.4 272 16zM140.1 320L64 320c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64l-76.1 0-32 32L448 352c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l108.1 0-32-32zM432 416a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"/></svg>
                Download your image
            </a>
              

            </div>

        </section>
    </div>
    <section class="moneyplz">
        <div class="moneyplz__ads">
     
        </div>
    </section>
    <p class="disclaimer">No images are saved to the servers of Break Your Own News.</p>
    <footer>
        <img src="" alt="Pixel head of Jonathan" style="margin-right:6px;">
        <a href="http://www.jonathancresswell.co.uk/">Jon</a> made this.
    </footer>
</div>
<script>
window.addEventListener("load", eventWindowLoaded, false);

function eventWindowLoaded() {
    canvasApp();
}

function drawImageProp(context, img, x, y, w, h, offsetX, offsetY) {

    if (arguments.length === 2) {
        x = y = 0;
        w = 1280;
        h = 720;
    }

    /// default offset is center
    offsetX = offsetX ? offsetX : 0.5;
    offsetY = offsetY ? offsetY : 0.5;

    /// keep bounds [0.0, 1.0]
    if (offsetX < 0) offsetX = 0;
    if (offsetY < 0) offsetY = 0;
    if (offsetX > 1) offsetX = 1;
    if (offsetY > 1) offsetY = 1;

    var iw = img.width,
        ih = img.height,
        r = Math.min(w / iw, h / ih),
        nw = iw * r,   /// new prop. width
        nh = ih * r,   /// new prop. height
        cx, cy, cw, ch, ar = 1;

    /// decide which gap to fill
    if (nw < w) ar = w / nw;
    if (nh < h) ar = h / nh;
    nw *= ar;
    nh *= ar;

    /// calc source rectangle
    cw = iw / (nw / w);
    ch = ih / (nh / h);

    cx = (iw - cw) * offsetX;
    cy = (ih - ch) * offsetY;

    /// make sure source rectangle is valid
    if (cx < 0) cx = 0;
    if (cy < 0) cy = 0;
    if (cw > iw) cw = iw;
    if (ch > ih) ch = ih;

    /// fill image in dest. rectangle
    context.drawImage(img, cx, cy, cw, ch, x, y, w, h);
}

function canvasApp() {

    var message = "Something went viral online";
    var tickermessage = "\"Is this really news?\" asks commenter  |  5 million retweets in 1 hour already";
    var img = new Image();
    var imageRatio = "wide";
    var merchDraw = false;

    var theCanvas = document.getElementById("canvasOne");
    var context = theCanvas.getContext("2d");

    var formElement = document.getElementById("textBox");
    formElement.addEventListener("keyup", textBoxChanged, false);

    var formElement2 = document.getElementById("tickerBox");
formElement2.addEventListener("keyup", textBox2Changed, false);

var watermarkBox = document.getElementById("watermarkBox");
if (watermarkBox) {
    watermarkBox.addEventListener("input", function () {
        drawScreen();
    }, false);
}

    var imageLoader = document.getElementById('imageLoader');
    imageLoader.addEventListener('change', handleImage, false);

    if (document.querySelector('input[name="imageRatio"]')) {
        document.querySelectorAll('input[name="imageRatio"]').forEach((elem) => {
            elem.addEventListener("change", function (event) {
                imageRatioChanged(event)
            });
        });
    }

   

    const positions = {
        portrait: {
            "canvasWidth": 1280,
            "canvasHeight": 2276,
            "liveText": {
                "font": '48px',
                "x": 96,
                "y": 256,
            },
            "liveBox": {
                "x": 80,
                "y": 200,
                "w": 128,
                "h": 80,
            },
            "credit": {
                "font": '52px',
                "x": 680,
                "y": 260,
            },
            "headlineBoxX": 80,
            "headlineBoxY": 2020,
            "headlineTextX": 100,
            "headlineTextY": 2100,
            "clockBox": {
                "x": 80,
                "y": 2130,
                "w": 120,
                "h": 72,
            },
            "clockText": {
                "font": "34px",
                "x": 96,
                "y": 2176,
            },
            "breakingBox": {
                "x": 80,
                "y": 1924,
                "w": 500,
                "h": 96,
            },
            "breakingText": {
                "x": 100,
                "y": 1990,
                "font": '58px',
            },
            "tickerBox": {
                "x": 200,
                "y": 2130,
                "w": 1080,
                "h": 72,
            },
            "tickerText": {
                "font": "34px",
                "x": 220,
                "y": 2176,
            },
        },
        square: {
            "canvasWidth": 1280,
            "canvasHeight": 1280,
            "liveText": {
                "font": '48px',
                "x": 96,
                "y": 116,
            },
            "liveBox": {
                "x": 80,
                "y": 60,
                "w": 128,
                "h": 80,
            },
            "credit": {
                "font": '44px',
                "x": 775,
                "y": 110,
            },
            "headlineBoxX": 80,
            "headlineBoxY": 1020,
            "headlineTextX": 100,
            "headlineTextY": 1100,
            "clockBox": {
                "x": 80,
                "y": 1130,
                "w": 120,
                "h": 72,
            },
            "clockText": {
                "font": "34px",
                "x": 96,
                "y": 1176,
            },
            "breakingBox": {
                "x": 80,
                "y": 924,
                "w": 500,
                "h": 96,
            },
            "breakingText": {
                "x": 100,
                "y": 990,
                "font": '58px',
            },
            "tickerBox": {
                "x": 200,
                "y": 1130,
                "w": 1080,
                "h": 72,
            },
            "tickerText": {
                "font": "34px",
                "x": 220,
                "y": 1176,
            },
        },
        wide: {
            "canvasWidth": 1280,
            "canvasHeight": 720,
            "liveText": {
                "font": '36px',
                "x": 96,
                "y": 84,
            },
            "liveBox": {
                "x": 80,
                "y": 40,
                "w": 104,
                "h": 60,
            },
            "credit": {
                "font": '38px',
                "x": 850,
                "y": 80,
            },
            "headlineBoxX": 80,
            "headlineBoxY": 510,
            "headlineTextX": 100,
            "headlineTextY": 590,
            "clockBox": {
                "x": 80,
                "y": 620,
                "w": 100,
                "h": 60,
            },
            "clockText": {
                "font": "28px",
                "x": 96,
                "y": 660,
            },
            "breakingBox": {
                "x": 80,
                "y": 430,
                "w": 420,
                "h": 80,
            },
            "breakingText": {
                "x": 100,
                "y": 488,
                "font": '48px',
            },
            "tickerBox": {
                "x": 180,
                "y": 620,
                "w": 1100,
                "h": 60,
            },
            "tickerText": {
                "font": "28px",
                "x": 200,
                "y": 660,
            },
        }
    };

 


    drawScreen();

    function drawScreen() {

        let currentPos = positions[imageRatio];

        if (merchDraw === true) {
            context.canvas.width = currentPos.canvasWidth * 2;
            context.canvas.height = (currentPos.canvasHeight * 2) + 100;
            context.scale(2, 2);
        }

        //Background
        context.fillStyle = "#222222";
        context.fillRect(0, 0, currentPos.canvasWidth, currentPos.canvasHeight);


        //Image
        if (img.src) {
            drawImageProp(context, img, 0, 0, currentPos.canvasWidth, currentPos.canvasHeight);
        }

        //Live
        context.fillStyle = "rgba(194, 21, 15, 1.000)";
        context.fillRect(currentPos.liveBox.x, currentPos.liveBox.y, currentPos.liveBox.w, currentPos.liveBox.h);

        context.font = "700 " + currentPos.liveText.font + " Signika";
        context.fillStyle = "#FFFFFF";
        context.fillText('LIVE', currentPos.liveText.x, currentPos.liveText.y);

        //Breaking News Strap
        // Create gradient

        let currentGradEnd = currentPos.breakingBox.y + currentPos.breakingBox.h

        redgrd = context.createLinearGradient(0, currentPos.breakingBox.y, 0, currentGradEnd);

        // Add colors
        redgrd.addColorStop(0.000, 'rgba(109, 36, 39, 1.000)');
        redgrd.addColorStop(0.015, 'rgba(224, 54, 44, 1.000)');
        redgrd.addColorStop(0.455, 'rgba(194, 21, 15, 1.000)');
        redgrd.addColorStop(0.488, 'rgba(165, 10, 1, 1.000)');
        redgrd.addColorStop(1.000, 'rgba(109, 36, 39, 1.000)');

        context.fillStyle = redgrd;
        context.fillRect(currentPos.breakingBox.x, currentPos.breakingBox.y, currentPos.breakingBox.w, currentPos.breakingBox.h);

        context.font = "700 " + currentPos.breakingText.font + " Signika";
        context.fillStyle = "#FFFFFF";
        context.fillText('BREAKING NEWS', currentPos.breakingText.x, currentPos.breakingText.y);

        //Box
        context.fillStyle = "rgba(255,255,255,0.85)";
        context.fillRect(currentPos.headlineBoxX, currentPos.headlineBoxY, 1200, 110);

        //Text
        context.font = "700 72px Signika";
        context.fillStyle = "#000000";
        context.fillText(message.toUpperCase(), currentPos.headlineTextX, currentPos.headlineTextY);


        //Clock
        context.fillStyle = "#000";
        context.fillRect(currentPos.clockBox.x, currentPos.clockBox.y, currentPos.clockBox.w, currentPos.clockBox.h);

        today = new Date();
        var m = today.getMinutes();
        var h = today.getHours();

        if (h < 10) {
            h = "0" + h
        }

        if (m < 10) {
            m = "0" + m
        }

        context.font = "700 " + currentPos.clockText.font + " Signika";
        context.fillStyle = "#FFFFFF";
        context.fillText((h + ":" + m), currentPos.clockText.x, currentPos.clockText.y);


        //Ticker
        context.fillStyle = "#feeb1a";
        context.fillRect(currentPos.tickerBox.x, currentPos.tickerBox.y, currentPos.tickerBox.w, currentPos.tickerBox.h);

        context.font = "700 " + currentPos.tickerText.font + " Signika";
        context.fillStyle = "#000";
        context.fillText(tickermessage.toUpperCase(), currentPos.tickerText.x, currentPos.tickerText.y);

        //Logo

        if (merchDraw === true) {
            context.globalAlpha = 1;
            context.font = "400 24px Signika";
            context.fillStyle = "#000";
            context.fillText(
    document.getElementById("watermarkBox")?.value || "example.com",
    0,
    currentPos.canvasHeight + 30
);
        } else {
            context.globalAlpha = 0.7;
            context.shadowColor = "rgba(0,0,0,0.7)";
            context.shadowOffsetX = 0;
            context.shadowOffsetY = 0;
            context.shadowBlur = 6;

            context.font = "400 " + currentPos.credit.font + " Signika";
context.fillStyle = "#fff";

context.textAlign = "right";

context.fillText(
    document.getElementById("watermarkBox")?.value || "example.com",
    currentPos.canvasWidth - 50,
    currentPos.credit.y
);

context.textAlign = "left";
            context.globalAlpha = 1;
            context.shadowBlur = 0;

        }

  


    }

    function textBoxChanged(e) {
        var target = e.target;
        message = target.value;
        drawScreen();
    }


    function textBox2Changed(e) {
        var target = e.target;
        tickermessage = target.value;
        drawScreen();
    }

    function imageRatioChanged(e) {
        //put a class on the Canvas so you can max-width it in CSS.

        imageRatio = e.target.value;

        context.canvas.width = positions[imageRatio].canvasWidth;
        context.canvas.height = positions[imageRatio].canvasHeight;

        theCanvas.setAttribute('data-ratio', e.target.value)

        drawScreen();
    }

    function handleImage(e) {
        var reader = new FileReader();
        reader.onload = function (event) {
            img.onload = function () {
                drawScreen();
            }
            img.src = event.target.result;
        }
        reader.readAsDataURL(e.target.files[0]);


    }


   var button = document.getElementById('btn-download');

button.addEventListener('click', function () {

    this.href =
        theCanvas.toDataURL(
            'image/jpeg',
            0.9
        );

});
	
}
</script>
</body>
</html>
