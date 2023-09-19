const { useState, useEffect } = React
// const { useSelector, useDispatch } = ReactRedux
import { contactsService } from "../services/contactService.js"
export function ContactIndex(){
    // const dispatch = useDispatch()
    useEffect(()=>{
        contactsService.query().then(contacts=>{
            console.log('contacts',contacts)
        })
    },[])
return(
   <section className="contact-container">
    <h1>contact container</h1>
   </section> 
)
}