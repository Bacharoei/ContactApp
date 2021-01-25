import React, {Fragment, useState } from 'react'
import {contacts} from '../contacts'
import Person from './Person';
import { v4 as uuidv4 } from 'uuid';
import AddPerson from './AddPerson';

const PersonList = () => {

    const [list, setList ] = useState(contacts)
    const [person, setPerson] = useState([{
        name: '',
        company: ''
    }]);

    const [showModal, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleRemove = (id) => {
        setList((oldPerson) => { 
            let templist = oldPerson.filter(item => item.id !== id)
            
            return templist
        })
    };

    // const handleChange = (id) => {
    //     let templist = list.find(item =>  {
    //         if(item.id === id){ 
    //             const updatePeson = { ...list, name: item.name}
    //             setList([...list, updatePeson])
    //         }
    // })
  
    // };

    const handleChange = id  => { 
        const newList = list.map((item) => {
            if (item.id === id) {
              const updatedItem = { 
                ...item,
                name: item.name,
                isComplete: !item.isComplete,
              }
              return updatedItem;
            }
            return item;
          });
          setList(newList);
    };  

    const onChange = e => {
        setPerson({ ...person, [e.target.name]: e.target.value });
    };

    const handleList = e => {
        setList({ ...list, [e.target.name]: e.target.value });
    };

    const handleAdd = (e) => {
        e.preventDefault();
        if(person.name && person.company) {
            const newPerson = {...person, id: uuidv4() }
            setList([...list, newPerson])
            setPerson({
                name: '',
                company: ''
            })   
            setShow(false) 
        };
    };

    return (
        <Fragment>
            <div className="row"> {
                list && list.map(item => (
                    <Person 
                    key={item.id} 
                    item={item} 
                    onRemove={handleRemove} 
                    handleChange={handleChange} 
                    onChange={onChange}
                    handleList={handleList}
                    />
                ))
            }        
            </div>
            <div className="row iconDiv">
                    <AddPerson 
                    {...person} 
                    onChange={onChange} 
                    onAdd={handleAdd} 
                    handleChange={handleChange} 
                    showModal={showModal} 
                    handleShow={handleShow}
                    handleClose={handleClose} />                   
                </div>
        </Fragment> 
    )
};

export default PersonList
