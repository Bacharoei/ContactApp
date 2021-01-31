/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState, useCallback, useRef } from 'react'
import { contacts } from '../contacts'
import Person from './Person';
import NewPerson from './NewPerson';

const PersonList = () => {

    const [list, setList] = useState(contacts);
    const [loading, setLoading] = useState(false)
    const ref = useRef(false)

    useEffect(() => {
        if (ref.current) {
            ref.current(true)
            // getLocations()
            console.log("first");
            return
        }

    }, [list])


    // const getLocations = useCallback(async () => {
    //     let tempList = list.map(async item => {
    //         const res = await fetch(`http://api.positionstack.com/v1/forward?access_key=726ace11c73e107fc3be665c2b8ec986&query=${item.address}&limit=1`);
    //         const results = await res.json();
    //         let tempUser = { ...item, lat: results.data[0].latitude, lng: results.data[0].longitude };
    //         console.log(tempUser);
    //         return tempUser
    //     })
    //     console.log(tempList);
    // }, [list])

    const getLocationByAddress = useCallback(async (address) => {
        const res = await fetch(`http://api.positionstack.com/v1/forward?access_key=726ace11c73e107fc3be665c2b8ec986&query=${address}&limit=1`);
        const results = await res.json();
        return { lat: results.data[0].latitude, lng: results.data[0].longitude };
    })




    /*===Add or edit a contact ===*/
    const handleAdd = (person) => {
        const newPerson = { ...person, id: new Date().getTime().toString() }
        setList([...list, newPerson])
    }

    const updatePerson = (person, id) => {
        let newList = list.map((item) => item.id === id ? {
            ...item,
            name: person.name,
            company: person.company,
            phone: person.phone,
            address: person.address
        } : item);

        console.log("newList", newList);
        setList(newList)
    }

    /*===Remove contact===*/
    const handleRemove = (id) => {
        setList((oldPerson) => {
            let templist = oldPerson.filter(item => item.id !== id)
            return templist
        })
    };


    return (
        <Fragment>
            <div className="row"> {
                list && list.map(item => (
                    <Person
                        key={item.id}
                        {...item}
                        onRemove={handleRemove}
                        updatePerson={updatePerson}
                    />
                ))
            }
            </div>
            <div className="row iconDiv">
                <NewPerson mode={"add"} handleAdd={handleAdd} />
            </div>
        </Fragment>
    )
};

export default PersonList
