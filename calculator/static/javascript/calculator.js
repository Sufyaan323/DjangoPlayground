document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("#grid span");
    const output = document.getElementById("output");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent;
            if (value === "=") {
                output.textContent = parseFloat(eval(output.textContent).toFixed(10));
            }
            else{
                output.textContent += value;
            }
        });
    });
});