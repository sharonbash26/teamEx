import { contactsService } from "../../services/contactService.js"
import { ADD_CONTACT, REMOVE_CONTACT, SET_CONTACTS, UPDATE_CONTACT } from "../reducers/contact.reducer.js"

import { store } from "../store.js";

export function loadContacts(filterBy) {
    return contactsService.query(filterBy)
        .then(contacts => {
            store.dispatch({ type: SET_CONTACTS, contacts })
        })
        .catch(err => {
            console.error('Cannot load contacts:', err)
            throw err
        })
}

export function removeContact(contactId) {
    return contactsService.remove(contactId)
        .then(() => {
            store.dispatch({ type: REMOVE_CONTACT, contactId })
        })
        .catch(err => {
            console.error('Cannot remove contact:', err)
            throw err
        })
}

export function saveContact(contact) {
    const type = contact._id ? UPDATE_CONTACT : ADD_CONTACT
    return contactsService.save(contact)
        .then(savedContact => {
            store.dispatch({ type, contact: savedContact })
            return savedContact
        })
        .catch(err => {
            console.error('Cannot save contact:', err)
            throw err
        })
}
