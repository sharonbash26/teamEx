import { contactsService } from "../services/contactService.js"
export function ContactPreview({contact}){
    return(
     <React.Fragment>
        <article className="firstName">{contact.firstName}</article>
        <article className="lastName">{contact.lastName}</article>
        <article className="nameContact">{contact.phone}</article>
        <article className="nameContact">{contact.mail}</article>
     </React.Fragment>
    )
}