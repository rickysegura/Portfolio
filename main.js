// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
    
    // Attribute all project links with their respective photos
    const links = [
        "https://losvegafurniture.com/",
        "https://myneospaces.com/",
        "headshop.html",
        "https://xbubbleblitzx.w3spaces.com/",
        "https://astrophoto.w3spaces.com/",
        "https://rickysegura.github.io/",
        "https://lemnemosyne.w3spaces.com/"
    ];

    switch(element.id) {
        case '1':
            document.getElementById("pLink").href = links[0];
            break;
        case '2':
            document.getElementById("pLink").href = links[1];
            break;
        case '3':
            document.getElementById("pLink").href = links[2];
            break;
        case '4':
            document.getElementById("pLink").href = links[3];
            break;
        case '5':
            document.getElementById("pLink").href = links[4];
            break;
        case '6':
            document.getElementById("pLink").href = links[5];
            break;
        case '7':
            document.getElementById("pLink").href = links[6];
        default:
            console.log("error");
    }

    console.log("Task complete. Project selected: " + element.id);
}

// Slideshow code below this line
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    
    x[slideIndex-1].style.display = "block";  
}