import React, { Fragment, useState } from 'react'
import EditPerson from './EditPerson';



const Person = ({ item, onRemove,onChange,updateField, handleChange, handleList }) => {

    const [showModal, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <Fragment>
           
            
                <div className="card">
                    <div className="card-body">
                        <img className="card-img-top" src={`../images/${item.img}`} alt="" />
                        <h4 className="card-title"> {item.name} </h4>
                        <p className="card-text">{item.company}</p>
                        <p className="card-text">{item.address}</p>
                        <p className="card-text">{item.city} </p>
                    </div>
                    <div className="buttonsWrapper">

                    <EditPerson 
                    key={item.key}
                    {...item}
                    onChange={onChange} 
                    updateField={updateField} 
                    handleChange={handleChange} 
                    showModal={showModal} 
                    handleShow={handleShow}
                    handleList={handleList}
                    handleClose={handleClose} />  
                    
                        <button className="btn deleteBtn" onClick={() => onRemove(item.id)} type="button"><i className="fas fa-trash-alt" /></button>
                    </div>
                </div>   
          

         

        </Fragment>
    )
}

export default Person
