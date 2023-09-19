const { useEffect, useState } = React
const { useParams, useNavigate } = ReactRouterDOM

import { contactsService } from '../services/contactService.js'
import { showErrorMsg } from "../services/event-bus.service.js"


export function ContactEdit() {

    const [contactToEdit, setContactToEdit] = useState(contactsService.getEmptyContact())
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        console.log('params.contactId', params.id);
        if (params.id) loadContact()
    }, [])

    function loadContact() {
        contactsService.get(params.id)
            .then(setContactToEdit)
            .catch(err => {
                console.log('Had issued in contact edit:', err);
                navigate('/contact')
                showErrorMsg('Contact not found!')
            })
    }

    function handleChange({ target }) {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        setContactToEdit(prevContact => ({ ...prevContact, [field]: value }))
    }

    function onSaveContact(ev) {
        ev.preventDefault()
        contactsService.save(contactToEdit)
            .then(() => navigate('/contact'))
            .catch((err) => { showErrorMsg('Cannot save contact') })
    }

    const { firstName, lastName, phone, desc, mail } = contactToEdit


    return (
        <section className="contact-edit">
            <h2>Contact</h2>

            <h2>{contactToEdit._id ? 'Edit' : 'Add'} Contact</h2>

            <form onSubmit={onSaveContact} className="flex flex-column justify-center book-edit-form" >
                <label htmlFor="firstName">FirstName:</label>
                <input onChange={handleChange} value={firstName} type="text" name="firstName" id="firstName" />

                <label htmlFor="lastName">LastName:</label>
                <input onChange={handleChange} value={lastName} type="text" name="lastName" id="lastName" />

                <label htmlFor="phone">Phone:</label>
                <input onChange={handleChange} value={phone} type="text" name="phone" id="phone" />

                <label htmlFor="desc">Description:</label>
                <input onChange={handleChange} value={desc} type="text" name="desc" id="desc" />

                <label htmlFor="mail">Mail:</label>
                <input onChange={handleChange} value={mail} type="text" name="mail" id="mail" />

                <button>{contactToEdit._id ? 'Save' : 'Add'}</button>
            </form>

        </section>

    )
}







