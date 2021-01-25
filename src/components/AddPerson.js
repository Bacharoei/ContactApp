import React from 'react'
import { Modal, Button } from "react-bootstrap";


const AddPerson = ({ name, company, onChange, onAdd, showModal, handleShow, handleClose }) => {
    return (
        <div>
            <button className="btn plus-icon" type="button" onClick={handleShow}>
            <i className="fas fa-plus-square"/>
            </button>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Person</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form className="form" >
                    <label for="job title">name </label>
                    <input type="text" placeholder=" * name" name="name"  value={name} onChange={onChange} required />
                    <label for="job title">Company </label>
                    <input type="text" placeholder=" * company" name="company"  value={company} onChange={onChange} required />   
                </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary"  onClick={(e) => onAdd(e)} >
                        Add                 
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default AddPerson
