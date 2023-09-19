import { ContactPreview } from "./ContactPreview.jsx";

export function ContactList({contacts, onSelectContactId}){

 console.log('testttttttttttttttttttttttttttt')
    return (
        <ul className="contacts-list">
            {contacts && contacts.length > 0 && contacts.map(contact => {
                return (
                    <li key={contact.id} onClick={() => onSelectContactId(contact.id)}>
                        <ContactPreview contact={contact} />
                        <section>
                            <button onClick={() =>  onSelectContactId(contact.id)}></button>
                        </section>
                    </li>
                );
            })}
        </ul>
    )
}