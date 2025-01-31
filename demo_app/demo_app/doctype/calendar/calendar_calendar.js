frappe.views.calendar['Event'] = {
    field_map: {
        start: 'starts_on',
        end: 'ends_on',
        id: 'title',
    },
    style_map: {
        Public: 'success',
        Private: 'info'
    },
    order_by: 'ends_on',
    get_events_method: 'frappe.desk.doctype.event.event.get_events'
}
