function timestampParam() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return decodeURIComponent(urlParams.get("t"))
}

function time() {
    const ts = timestampParam();
    if (!ts) {
        return "Set the time in the t param!"
    }
    return Date.parse(ts).toLocaleString();
}

window.onload = function() {
    document.getElementById("time").innerHTML = "<h1>" + time() + "</h1>";
}
