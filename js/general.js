document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const equationDisplay = document.getElementById("equation");
    const resultDisplay = document.getElementById("result");

    let equation = "";
    let currentNum = "";

    function updateEquation() {
        equationDisplay.textContent = equation;
    };

    function updateResult() {
        resultDisplay.textContent = eval(equation);
    }

    function buttonClicks(value) {
        if (value === "=") {
            updateResult();
        } else if (value === "C") {
            equation = "";
            currentNum = "";
            updateResult();
            updateEquation();
        } else if (value === "del") {
            equation = equation.slice(0, -1);
            updateEquation();
        } else {
            equation += value;
            updateEquation();
        }
    }

    const buttons = document.querySelectorAll("#operations button");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            buttonClicks(this.getAttribute("data-value"));
        });
    });
});
