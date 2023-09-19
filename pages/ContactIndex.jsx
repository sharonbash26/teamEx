const { useState, useEffect } = React
const { useSelector, useDispatch } = ReactRedux
import { ContactList } from "../cmps/ContactList.jsx";
import { contactsService } from "../services/contactService.js"
import { ContactDetails } from "./ContactDetails.jsx";
export function ContactIndex() {
    const dispatch = useDispatch()
    const contacts=useSelector(storeState=>storeState.contactModule.contacts)
    const [selectedContactId, setSelectedContactId] = useState(null);
    useEffect(() => {
        contactsService.query().then(contacts => {
            console.log('contacts', contacts)
        })
    }, [])

    function onSelectContactId(contactId) {
        setSelectedContactId(contactId);
    }
    if(!contacts) return <div> Loading...</div>
    return (
        <section className="contact-container">
            <h1>Contact Container</h1>
            {
                !selectedContactId ? (
                    <div>
                        <ContactList contacts={contacts} onSelectContactId={onSelectContactId} />
                    </div>
                ) : (
                    <ContactDetails contacts={contacts} onBack={() => onSelectContactId(null)} />
                )
            }
        </section>
    )
}





