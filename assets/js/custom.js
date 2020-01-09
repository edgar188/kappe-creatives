function onInfo(target) {
    var hiddenNode = target.nextElementSibling;

    hiddenNode.style.display !== "block"
        ? hiddenNode.setAttribute("style", "display: block; visibility: visible;")
        : hiddenNode.setAttribute("style", "display: none; visibility: hidden;");
}

setInterval(() => {
    if(window.innerWidth > 768) {
        document.getElementById("navs").setAttribute("style", "max-width: 100%;height 100%; opacity: 1")
    }
}, 1000);