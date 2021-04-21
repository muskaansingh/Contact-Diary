import React from 'react';
import {useSelector} from "react-redux";
import Avatar from "react-avatar";
import EditIcon from '@material-ui/icons/Edit';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

const Contacts = () => {
  const contacts = useSelector(state => state.contacts);
  //console.log(contacts);
    return (
        <div>
        <table className="table shadow">
          <thead className="bg-danger text-white">
            <tr>
              <th>
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input"/>
                  <label className="custom-control-label"></label>
                </div>
              </th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              contacts.map((contact) => (
                <tr>
                  <td>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input"/>
                      <label className="custom-control-label"></label>
                    </div>
                  </td>
                  <td>
                  <Avatar className="mr-3" name={contact.name} size="45" round={true}/>
                  {contact.name}
                  </td>
                  <td>{contact.phone}</td>
                  <td>{contact.email}</td>
                  <td className="actions">
                    <a href="#">
                      <span><EditIcon style={{color:"#333"}}/></span>
                    </a>
                    <a href="#">
                      <span className="mr-2"><RemoveCircleOutlineIcon style={{color:"red"}}/></span>
                    </a>
                  </td>
                </tr>
              ))
            }
        
          </tbody>
      </table> 
        </div>
    )
}

export default Contacts
