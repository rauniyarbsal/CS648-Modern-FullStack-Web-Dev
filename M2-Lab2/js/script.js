/* eslint-env browser */

// Handle load event of window object
window.addEventListener("load", () => {
    "use strict";
    //Get All DOM Objects From Form
    const id = window.document.getElementById("id");
    const name = window.document.getElementById("name");
    const ext = window.document.getElementById("ext");
    const email = window.document.getElementById("email");
    const departmet = window.document.getElementById("department");
    const empForm = window.document.getElementById("empForm");
    
    empForm.addEventListener("submit", (event) => {
        "use strict";
        
        event.preventDefault();

        window.console.log("ID: " + id.value);
        window.console.log("Name: " + name.value);
        window.console.log("Extension: " + ext.value);
        window.console.log("Email: " + email.value);
        window.console.log("Department: " + departmet.value);
    });

});
