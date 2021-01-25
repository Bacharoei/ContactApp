import React from 'react'
import { Modal, Button } from "react-bootstrap";

const EditPerson = ({  id, name, company, isComplete  , handleChange, handleList, showModal, handleShow, handleClose }) => {

    return (
        <div>
            <button className="btn plus-icon" type="button" onClick={handleShow}>
            <i className="fas fa-plus-square"/>
            </button>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>edit Person</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form className="form"  onSubmit={e => handleChange(e)}>
                    <label for="job title">name </label>
                    <input type="text" placeholder=" * name" name="name"  value={name} onChange={handleList} required />
                    <label for="job title">Company </label>
                    <input type="text" placeholder=" * company" name="company"  value={company} onChange={handleList} required />   
                </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit"  onClick={() => handleChange(id)} >
                    {isComplete ? ' yes': 'no'}
                    {name ? 'bobo' : name }
                        {/* Add                  */}
                    </Button>
                    <button className="btn deleteBtn" onClick={() => handleChange(id)} type="button"><i className="fas fa-trash-alt" /></button>

                    <input type="submit" className="btn btn-primary my-1" />
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default EditPerson
