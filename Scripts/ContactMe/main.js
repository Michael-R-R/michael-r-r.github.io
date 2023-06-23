requirejs(["/Scripts/Util/LoadHeader.js",
           "/Scripts/Util/LoadFooter.js"],
function()
{
    let form = document.getElementById("input-form");
    let emailInput = document.getElementById("email-input");
    let subjectInput = document.getElementById("subject-input");
    let msgInput = document.getElementById("messagebox-input");
    let submitButton = document.getElementById("submit-button");

    submitButton.onclick = onSubmit;

    function onSubmit(e)
    {
        if(form.checkValidity() == true)
        {
            // TODO: Somehow send email

            window.alert("Email sent");
        }
    }
});