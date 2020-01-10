function onInfo() {
    //var infoNode = document.getElementById("info-hidden");
    var infoNode = document.getElementById("info-hidden");

    infoNode.className === "info-hidden"
        ? infoNode.className += " info-list-open"
        : infoNode.className = "info-hidden";
}

function onMenu() {
    var navsWrapper = document.getElementById('navs');
    navsWrapper.className === "navs-wrapper"
        ? navsWrapper.className += " navs-open"
        : navsWrapper.className = "navs-wrapper";
}