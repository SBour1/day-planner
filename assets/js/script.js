var date = moment();
$("#currentDay").text(date.format("dddd, MMM Do YYYY"));

var appts = {
    "9": [],
    "10": [],
    "11": [],
    "12": [],
    "13": [],
    "14": [],
    "15": [],
    "16": [],
    "17": []
};

var setAppts = function () {
    localStorage.setItem("appts", JSON.stringify(appts));
}

var getAppts = function () {
    JSON.parse(localStorage.getItem("appts"));
}

var timeCheck = function () {
    var time = moment().hour();
    $(".appt-info").each(function () {
        var apptHour = parseInt($(this).attr("id"));
        if (time > apptHour) {
            $(this).addClass("past");
        } else if (time < apptHour) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    })
};

var timeUpdate = 3600000 - date.milliseconds();
setTimeout(function () {
    setInterval(timeCheck, 3600000)
}, timeUpdate);

$(".saveBtn").click(function() {
    console.log("hello");
})

timeCheck();