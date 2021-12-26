var date = moment();
$("#currentDay").text(date.format("dddd, MMM Do YYYY"));

if (moment().format('h') < window.hour) {
    window.timeBlock.attr('background-color', 'red');
} else if (moment().format('h') > window.hour) {
    window.timeBlock.attr('background-color', 'green');
} else {
    window.timeBlock.attr('background-color', 'grey');
};