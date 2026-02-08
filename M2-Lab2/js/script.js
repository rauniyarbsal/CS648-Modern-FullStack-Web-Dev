window.addEventListener("load", () => {
    "use strict";

    const getById = (id) => document.getElementById(id);

    getById("empForm").addEventListener("submit", (e) => {
        e.preventDefault();

        window.console.log("ID: " + getById("id").value);
        window.console.log("Name: " + getById("name").value);
        window.console.log("Extension: " + getById("ext").value);
        window.console.log("Email: " + getById("email").value);
        window.console.log("Department: " + getById("department").value);
    });
});












