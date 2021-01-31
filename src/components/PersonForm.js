import React, { useState, useEffect, useCallback } from 'react'
import { useForm } from 'react-hook-form';
import { Modal, Button } from "react-bootstrap";
import validate from './validationForm'
import * as Yup from 'yup';

const PersonForm = ({ handleClose, showModal, id, name, company, phone, address, mode, handleAdd, updatePerson }) => {
    // const [formData, setFormData] = useState({ id, name, company, phone, address })
    const { register, handleSubmit, errors, } = useForm({
        defaultValues: {
            id,
            name,
            company,
            phone,
            address
        }
    });

    // useEffect(() => {
    //     // return clean up function
    //     return () => {
    //         if (!showModal) {
    //             setFormData({ id, name, company, phone, address })
    //         }
    //     }
    // }, [showModal])

    // useEffect(() => {

    // }, [id, name, company, phone, address])


    const onSubmit = (data) => {
        if (mode === "add") {
            handleAdd(data)
            handleClose(true)
        } else {
            updatePerson(data, id)
            handleClose(true)
        }
    };

    console.log(errors);


    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{mode === "edit" ? "Edit" : "Add"} Person</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    {errors.name && <p className="form-input-error"> name is required </p>}
                    <label htmlFor="name">Name:</label>
                    <input type="text" placeholder=" * name" name="name" ref={register({ required: true })} />
                    {errors.name && <p className="form-input-error"> name is required </p>}
                    <label htmlFor="name">Company:</label>
                    <input type="text" placeholder=" * Company" name="company" ref={register({ required: true })} />
                    {errors.company && <p className="form-input-error"> Company is required </p>}
                    <label htmlFor="name">Address:</label>
                    <input type="text" placeholder=" * Address" name="address" ref={register({ required: true })} />
                    {errors.address && <p className="form-input-error"> Address is required </p>}
                    <label htmlFor="name">Phone: </label>
                    <input type="text" placeholder=" * Phone" name="phone" ref={register({ required: true, pattern: /((\(\d{3}\) ?)|(\d{3}))?\d{3}\d{4}/ })} />
                    {errors.phone && <p className="form-input-error"> Phone is required </p>}

                </form>
            </Modal.Body>
            <Modal.Footer>
                {mode === "edit" ? <>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                </Button>
                    <Button variant="primary" type="submit" onSubmit={handleClose} onClick={handleSubmit(onSubmit)}>
                        Edit
                </Button>
                </> :
                    <>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                        <button type="submit" onClick={handleSubmit(onSubmit)}>Add2</button>
                        <Button variant="primary" onClick={handleSubmit(onSubmit)}> Add </Button>
                    </>}
            </Modal.Footer>
        </Modal>

    )
}

export default PersonForm;
