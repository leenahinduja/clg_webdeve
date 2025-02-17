function checkNumber() {
    let num = document.getElementById("numberInput").value;
    let result = document.getElementById("result");
    if (num === "") {
        result.textContent = "Please enter a number!";
        result.style.color = "red";
        return;
    }

    num = parseFloat(num); 
    let type = num > 0 ? "positive" : num < 0 ? "negative" : "zero";

    switch (type) {
        case "positive":
            result.textContent = "Positive Number";
            result.style.color = "green";
            break;
        case "negative":
            result.textContent = "Negative Number";
            result.style.color = "red";
            break;
        case "zero":
            result.textContent = "It's Zero!";
            result.style.color = "blue";
            break;
        default:
            result.textContent = "Invalid input!";
            result.style.color = "red";
    }
}