
const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouterDOM
import { contactService } from '../services/contactService.js'

export function ContactDetails({contacts,onBack}) {
    const params = useParams()
    const navigate = useNavigate()

    const [currContact, setCurrContact] = useState(null)

    useEffect(() => {
        const { id } = params
        contactService.get(id)
            .then(contact => {
                if (!contact) return navigate('/contact')
                setCurrContact(contact)
            })
            .catch(err => {
                console.log('Had issues loading contact')
            })
    }, [])

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
            </div>
        </div>
    )
}
