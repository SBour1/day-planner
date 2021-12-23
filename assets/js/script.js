$("#currentDay").text(moment().format("dddd MMM Do YY"));

for (let i = 9; i < 18; i++) {
    window.timeBlock = document.createElement("textarea")
    window.hour = document.createElement("div")
    $(".container").append(timeBlock);
    $("textarea").addClass('description col-md-10');
    window.saveBtn = document.createElement("button");
    timeBlock.after(saveBtn);
    timeBlock.before(window.hour);
    $(hour).addClass('hour col-md-1');
    $(hour).text([i])
    $(saveBtn).addClass('saveBtn col-md-1 btn');
    $(saveBtn).text ("🔒");
    window.saveBtn.addEventListener('click', function (event){
        localStorage.setItem();
    })
}