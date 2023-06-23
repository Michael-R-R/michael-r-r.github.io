"use strict";

var form = document.getElementById("input-form");
var emailInput = document.getElementById("email-input");
var subjectInput = document.getElementById("subject-input");
var msgInput = document.getElementById("messagebox-input");
var submitButton = document.getElementById("submit-button");

submitButton.onclick = onSubmit;

function onSubmit(e)
{
    if(form.checkValidity() == true)
    {
        // TODO: Somehow send email

        window.alert("Email sent");
    }
}