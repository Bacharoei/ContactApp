import React, { useEffect, useState } from 'react'
import PersonForm from './PersonForm';

const NewPerson = ({ handleAdd }) => {

    const [showModal, setShow] = useState(false);
    const [person, setPerson] = useState({ id: "", name: "", company: "", phone: "", address: "" });
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);



    // useEffect(() => {
    //     setPerson({});
    // }, [setPerson, showModal])

    return (
        <React.StrictMode >
            <div>
                <button className="btn plus-icon" type="button" onClick={handleShow}>
                    <i className="fas fa-plus-square" />
                </button>
                <PersonForm
                    mode={"add"}
                    showModal={showModal}
                    handleShow={handleShow}
                    handleClose={handleClose}
                    handleAdd={handleAdd}
                    {...person} />
            </div>
        </React.StrictMode>

    )
}


export default NewPerson
