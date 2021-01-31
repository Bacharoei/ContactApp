import React, { useState } from 'react'
import PersonForm from './PersonForm';

const EditPerson = ({ id, name, company, phone, address, changes, updatePerson }) => {

    const [showModal, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const person = { id, name, company, phone, address };
    return (
        <React.StrictMode >
            <div>
                <button className="btn editBtn" type="button" onClick={handleShow}>
                    <i className="fas fa-edit" />
                </button>
                <PersonForm
                    mode={"edit"}
                    showModal={showModal}
                    handleShow={handleShow}
                    handleClose={handleClose}
                    updatePerson={updatePerson}
                    changes={changes}
                    key={id}
                    {...person} />
            </div>
        </React.StrictMode>

    )
}


export default EditPerson
