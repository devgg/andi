$(window).on('load', function () {
    var letters = Array.apply(null, Array(27)).map(function () {
    });

    $("tr:nth-child(-n + 3) > td").on("input", function () {
        addLetter($(this), 0);
    });

    $("tr:nth-child(4) > .editable, tr:nth-child(5) > .editable, tr:nth-child(6) > .editable").on("input", function () {
        addLetter($(this), 9);
    });

    $("tr:nth-child(n + 7) > .editable").on("input", function () {
        addLetter($(this), 18);
    });

    function addLetter($this, setoff) {
        var position = parseInt($this.text());
        var letter = $this.data('value');
        if (!isNaN(position) && letter !== undefined) {
            if (position > 0 && position < 10) {
                letters[setoff + position - 1] = letter;
            }
            buildSolution();
        }
    }

    function buildSolution() {
        var solution = "fgauger.com/";
        for (var i = 0; i < letters.length; i++) {
            if (letters[i] != undefined) {
                solution += letters[i];
            }
        }
        while (solution.length < 28) {
            solution += "_";
        }
        $("#solution").text(solution);
    }
});