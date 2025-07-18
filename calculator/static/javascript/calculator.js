document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("#grid span");
    const output = document.getElementById("output");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent;
            if (value === "=") {
                output.textContent = eval(output.textContent);
            }
            else{
                output.textContent += value;
            }
        });
    });
});