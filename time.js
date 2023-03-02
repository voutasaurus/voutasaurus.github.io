function timestampParam() {
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    console.log(urlParams);
    const t = decodeURIComponent(urlParams.get("t"))
    console.log(t);
    return t;
}

function showTime() {
    const ts = timestampParam();
    console.log(ts);
    if (ts === null) {
        return "Set the time in the t param!"
    }
    const d = new Date(ts);
    console.log(d);
    const str = d.toString();
    console.log(str);
    return str;
}

window.onload = function() {
    document.getElementById("time").innerHTML = "<h1>" + showTime() + "</h1>";
}
