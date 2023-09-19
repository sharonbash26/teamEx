
const { useState, useEffect } = React
const { useParams, useNavigate, Link } = ReactRouterDOM
import { contactsService } from '../services/contactService.js'

import { removeContact } from '../store/actions/contact.actions.js'

export function ContactDetails() {
    const params = useParams()
    const navigate = useNavigate()

    const [currContact, setCurrContact] = useState(null)

    useEffect(() => {
        const { id } = params
        contactsService.get(id)
            .then(contact => {
                console.log(contact);
                if (!contact) return navigate('/contact')
                setCurrContact(contact)
            })
            .catch(err => {
                console.log('Had issues loading contact')
            })
    }, [])

    function onRemove() {
        const { id } = params
        removeContact(id)
            .then(() => {
                console.log('contact removed');
            })
            .catch(err => {
                console.error('Cannot remove contact:', err)
            })
    }


    if (!currContact) return <h4>loading...</h4>
    const { _id, firstName, lastName, mail, desc, phone } = currContact

    return (
        <div className="contact-details">
            <div className="contact-data-container">
                <h1>Id {_id}</h1>
                <h1>Full name: {firstName + ' ' + lastName}</h1>
                <h1>Mail: {mail}</h1>
                <h1>Phone number: {phone}</h1>
                <h1>Description: {desc}</h1>
                <button className="back-btn" onClick={() => navigate('/contact')}>
                    Back to contacts
                </button>
                <button onClick={() => { onRemove(), navigate('/contact') }}>x</button>
                <button><Link to={`/contact/edit/${params.id}`} >Edit</Link></button>
            </div>
        </div>
    )
}
