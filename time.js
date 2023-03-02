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
        <span id="value">
          <p>select date and time above</p>
	</span>
    </form>`
}

window.onload = function() {
    document.getElementById("time").innerHTML = showTime();

    const ds = document.getElementById("dateselect");
    const ts = document.getElementById("timeselect");

    const vs = document.getElementById("value");

    ds.addEventListener("input", () => {
       const ref = "/time?t=" + ds.value + "T" + ts.value
       vs.innerHTML = `<a href="${ref}">time</a>`;
    }, false);

    ts.addEventListener("input", () => {
       const ref = "/time?t=" + ds.value + "T" + ts.value
       vs.innerHTML = `<a href="${ref}">time</a>`;
    }, false);
}
