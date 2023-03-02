function timestampParam() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return decodeURIComponent(urlParams.get("t"))
}

function showTime() {
    const ts = timestampParam();
    if (ts === null || ts === "null") {
        return renderTimePicker();
    }
    const d = new Date(ts);
    return "<h1>" + d.toString() + "</h1>";
}

function renderTimePicker() {
    return `<form>
        <input type="date" id="dateselect" />
        <input type="time" id="timeselect" />
        <p>
          <span id="value">select date and time above</span>
        </p>
    </form>`
}

window.onload = function() {
    document.getElementById("time").innerHTML = showTime();

    const ds = document.getElementById("dateselect");
    const ts = document.getElementById("timeselect");

    const vs = document.getElementById("value");

    ds.addEventListener("input", () => {
       vs.innerText = ds.value;
    }, false);

    ts.addEventListener("input", () => {
       vs.innerText = ts.value;
    }, false);
}
