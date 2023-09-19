import { utilService } from "./util.service.js"
import { asyncStorageService } from "./async-storage.service.js"
import { storageService } from "./storage.service.js"

const STORAGE_KEY = 'contactDB'
var contacts = _createContacts()


export const contactsService = {
    query,
    get,
    remove,
    save,
    getEmptyContact,
}
function query() {
    return asyncStorageService.query(STORAGE_KEY).then(contacts => {
        console.log('contacts', contacts)
        return contacts
    })
}

function get(contactId) {
    return asyncStorageService.get(STORAGE_KEY, contactId)
}




function remove(contactId) {
    console.log('contactId', contactId)
    return asyncStorageService.remove(STORAGE_KEY, contactId)
}

function save(contact) {
    console.log('contact', contact)
    if (contact.id) {
        return asyncStorageService.put(STORAGE_KEY, contact)
    } else {
        return asyncStorageService.post(STORAGE_KEY, contact)
    }
}

function getEmptyContact(firstName = '', lastName = '', phone = '', desc = '', mail = '') {
    return { _id: '', firstName, lastName, phone, desc, mail }
}


function _createContacts() {
    console.log('start create contacts')
    let contacts = storageService.loadFromStorage(STORAGE_KEY)
    if (!contacts || !contacts.length) {
        contacts = [{
            id: utilService.makeId(),
            firstName: 'sharon',
            lastName: 'bash',
            phone: '0528979145',
            desc: 'hhhh',
            mail: 'sharon26mo@gmail.com'
        },
        {
            id: utilService.makeId(),
            firstName: 'avishai',
            lastName: 'cohen',
            mail: 'avishaic2016@gmail.com',
            desc: 'ggg',
            phone: '052897978'
        }
        ]
        console.log('contacts', contacts)
    }
    storageService.saveToStorage(STORAGE_KEY, contacts)
    console.log('all todos', contacts)
    return contacts
}