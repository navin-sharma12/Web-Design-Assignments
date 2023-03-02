$(document).ready(function() {
    $("input[id='stopwatch_timing']").attr("readonly", true);
    $("input[id='stopwatch_timing']").val("00:00:00");

    let intervalId;
    let time = 0;

    async function start() {
        try {
            await new Promise(resolve => intervalId = setInterval(() => {
                time++;
                updateTime();
            }, 1000));
        } catch (err) {
            console.log(err);
        }
    }

    function updateTime() {
        let hours = Math.floor(time / 3600);
        let minutes = Math.floor((time % 3600) / 60);
        let seconds = time % 60;

        let timeString = ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);
        $("input[id='stopwatch_timing']").val(timeString);
    }

    $('#buttonStart').click(function() {
        start();
    });

    $('#buttonStop').click(function() {
        clearInterval(intervalId);
    });

    $('#buttonReset').click(function() {
        clearInterval(intervalId);
        time = 0;
        updateTime();
    });
});