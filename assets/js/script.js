var date = moment();
$("#currentDay").text(date.format("dddd, MMM Do YYYY"));

var getAppts = function () {
    for (let i = 9; i < 18; i++) {
        $('#'+i).children('textarea').val(localStorage.getItem($('#'+i).children('div').text()));
    }
}

var timeCheck = function () {
    var time = moment().hour()-5;
    $(".appt-info").each(function () {
        var apptHour = parseInt($(this).attr("id"));
        if (time > apptHour) {
            $(this).children('textarea').addClass("past");
        } else if (time < apptHour) {
            $(this).children('textarea').addClass("future");
        } else {
            $(this).children('textarea').addClass("present");
        }
    })
};

var timeUpdate = 3600000 - date.milliseconds();
setTimeout(function () {
    setInterval(timeCheck, 3600000)
}, timeUpdate);

$(".saveBtn").click(function(event) {
    $(event.target).siblings('textarea').val()
    localStorage.setItem($(event.target).siblings('div').text(), $(event.target).siblings('textarea').val())
})

getAppts();
timeCheck();