import React from 'react';
import axios from "axios";

export function SearchForAssociates(props) {

    let handleSubmit = (e) => {
        e.preventDefault();

        let forenames = e.target[0].value;
        let surname = e.target[1].value
        let address = e.target[2].value
        
        props.setLoading("Loading...")

        axios
            .get(`http://localhost:8007/getAssociatesByFullnameAndAddress/${forenames}/${surname}/${address}`)
            .then(response => {
                props.setLoading("")
                props.setAssociates(response)
            })
    }




    let handleChange = (e) => { };


    return (
        <div>
            Search for Associates
            <form onSubmit={handleSubmit}>
                <input placeholder="Forenames" ></input>
                <input placeholder="Surname" ></input>
                <input placeholder="Address" ></input>
                <input type="submit" value="Submit" />
            </form>

        </div>
    )


};