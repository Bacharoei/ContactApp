import React, { Fragment } from 'react'
import EditPerson from './EditPerson';



const Person = ({ id, name, image, address, phone, lat, lng, company, onRemove, changes, updatePerson }) => {

    const person = { id, name, company, phone, address, lat, lng };
    console.log(person.lng);
    return (
        <Fragment>
            <div className="card">
                <div key={id} className="card-body">
                    <img className="card-img-top" src={image} alt="" />
                    <h4 className="card-title">{name} </h4>
                    <p className="card-text"><span className="card-description">Company: </span>{company}</p>
                    <p className="card-text"><span className="card-description">address: </span>{address}</p>
                    <p className="card-text"><span className="card-description">phone: </span>{phone}</p>
                    <p className="card-text"><span className="card-description">lat: </span>{lat}</p>
                    <p className="card-text"><span className="card-description">lng: </span>{lng}</p>


                    <p className="card-text">{lat}</p>
                    <p className="card-text">{lng} </p>
                </div>
                <div className="buttonsWrapper">
                    <EditPerson key={id} {...person} changes={changes} updatePerson={updatePerson} />
                    <button className="btn deleteBtn" onClick={() => onRemove(id)} type="button"><i className="fas fa-trash-alt" /></button>
                </div>
            </div>




        </Fragment>
    )
}

export default Person
