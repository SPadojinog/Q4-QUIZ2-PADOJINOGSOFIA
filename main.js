    function Score() {
        const math = parseInt(document.getElementById("inputMath").value);
        const science = parseInt(document.getElementById("inputScience").value);
        const social = parseInt(document.getElementById("inputSocialStudies").value);
        if (science === "" || math === "" || social === "") {
            alert("Please fill in all grade fields.");return;
            }

        const average = (math + science + social) / 3;

        if (average >= 70 && average <= 74.99) {
            alert("Poor");
        }
        else if (average >= 75 && average <= 79.99) {
            alert("Needs Improvement");
        } 
        else if (average >= 80 && average <= 86.99) {
            alert("Satisfactory");
        } 
        else if (average >= 87 && average <= 93.99) {
            alert("Above Satisfactory");
        } 
        else if (average >= 94 && average <= 100) {
            alert("Excellent");
        } 
        else {
            alert("Invalid score range");
        }
    }