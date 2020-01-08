function onInfo(target) {
    var hiddenNode = target.nextElementSibling;

    hiddenNode.style.display !== "block"
        ? hiddenNode.setAttribute("style", "display: block; visibility: visible;")
        : hiddenNode.setAttribute("style", "display: none; visibility: hidden;");
}