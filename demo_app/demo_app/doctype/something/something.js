// Copyright (c) 2025, keval and contributors
// For license information, please see license.txt

// frappe.ui.form.on("something", {
// 	refresh(frm) {

// 	},
// });
// File: apps/your_app/your_app/doctype/your_doctype/your_doctype.js
frappe.ui.form.on("something", {
    onload: function(frm) {

        frappe.msgprint("welcome to something doctype");
    },
    after_save: function(frm) {
    // Add a custom button to the form
        // Show an alert with the full name
        const fullName = `${frm.doc.fname} ${frm.doc.lname}`.trim();
        frappe.msgprint(`Full Name: ${fullName}`);
        frappe.msgprint("saved something doctype");
    }
});
