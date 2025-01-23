# Copyright (c) 2025, keval and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class something(Document):
    def validate(self):
        # Automatically set full_name based on fname and lname
        self.full_name = f"{self.fname} {self.lname}".strip()
        frappe.msgprint(f"Full Name: {self.full_name}")
    def get_full_name(self):
        """Returns the person's full name"""
        self.full_name = f"{self.first_name} {self.last_name}".strip()
        frappe.msgprint(f"Full Name: {self.full_name}")

# # somewhere in your code
doc = frappe.get_doc("ByeBye", "86n5oh4bg6")
doc.get_full_name()