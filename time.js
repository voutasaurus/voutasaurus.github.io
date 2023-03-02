function timestampParam() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return decodeURIComponent(urlParams.get("t"))
}

function showTime() {
    const ts = timestampParam();
    console.log(ts);
    if (ts === null) {
        return "Set the time in the t param!"
    }
    const d = new Date(ts);
    return d.toString();
}

window.onload = function() {
    document.getElementById("time").innerHTML = "<h1>" + showTime() + "</h1>";
}
