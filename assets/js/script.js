var date = moment();
$("#currentDay").text(date.format("dddd, MMM Do YYYY"));

for (let i = 9; i < 18; i++) {
    $('#' + i).children('textarea').val(localStorage.getItem($('#' + i).children('div').text()));
}

var timeCheck = function () {
    var time = moment().hour();
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

$(".saveBtn").click(function (event) {
    $(event.target).siblings('textarea').val()
    localStorage.setItem($(event.target).siblings('div').text(), $(event.target).siblings('textarea').val());
    window.location.reload();
})

$(".clearBtn").click(function () {
    localStorage.clear();
    window.location.reload();
})

timeCheck();