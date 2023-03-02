function timestampParam() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return decodeURIComponent(urlParams.get("t"));
}

function showTime() {
    const ts = timestampParam();
    console.log(ts);
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

function tzOffset() {
    const date = new Date();
    const offset = date.getTimezoneOffset();
    const tz = new Date(0,0,0,0,Math.abs(offset));
    return `${ offset > 0 ? '-' : '+'}${tz.getHours()}:${("" + tz.getMinutes()).padStart(2,'0')}`;
}

window.onload = function() {
    document.getElementById("time").innerHTML = showTime();

    const ds = document.getElementById("dateselect");
    const ts = document.getElementById("timeselect");

    const vs = document.getElementById("value");

    ds.addEventListener("input", () => {
       console.log(ts.value);
       if (ts.value === null) {
           return
       }
       const ref = "/time?t=" + encodeURIComponent(ds.value + "T" + ts.value + tzOffset());
       vs.innerHTML = `<a href="${ref}">time</a>`;
    }, false);

    ts.addEventListener("input", () => {
       console.log(ds.value);
       if (ds.value === null) {
           return
       }
       const ref = "/time?t=" + encodeURIComponent(ds.value + "T" + ts.value + tzOffset());
       vs.innerHTML = `<a href="${ref}">time</a>`;
    }, false);
}
