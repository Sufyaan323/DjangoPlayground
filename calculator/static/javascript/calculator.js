document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("#grid span");
    const output = document.getElementById("output");
    const clear = document.querySelector("#clear span");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent;
            if (value === "=") {
                try{
                    output.textContent = parseFloat(eval(output.textContent).toFixed(10));
                }
                catch{
                    console.log("No operator or equation not complete")
                }
                
            }
            else{
                output.textContent += value;
            }
        });
    });

    clear.addEventListener("click", () => {
        output.textContent = "";
        console.log("Cleared output");
    })
});