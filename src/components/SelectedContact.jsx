import { useState } from 'react';
import {useEffect} from 'react'


export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState(null);

    useEffect(() => {
        async function fetchContact() {
          try {
            const response = await fetch(
                `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
              );
              const result = await response.json();
              console.log(result);
              if (result) {
                setContact(result);
              }
              
          } catch (error) {
            console.error(error);
          }
        }
        fetchContact()
      }, []);

      return (
        <table>
            <thead>
                <tr>
                    {/* <th colSpan="3">Contact List</th> */}
                </tr>
            </thead>
            <tbody>
                <tr>
                    
                    <td>Name</td>
                    <td>Username</td>
                    <td>Email</td>
                    
                </tr>

                <tr>
                  <td>
                    {contact.name}
                  </td>
                  <td>
                    {contact.username}
                  </td>
                  <td>
                    {contact.email}
                  </td>
                </tr>
                       
               
                
            </tbody>
        </table>
    );
}