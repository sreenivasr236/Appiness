import React, { Fragment } from 'react'
import './Card.scss'
export default function Card(props) {
    return (
        <Fragment>
            {props.data.map((information) =>
                <div className="Card" key={information.id}>
                    <p><label>Name:</label><span>{information.name}</span></p>
                    <p><label>Age:</label><span>{information.age}</span></p>
                    <p><label>Gender:</label><span>{information.gender}</span></p>
                    <p><label>Email:</label><span style={{ textTransform: 'initial' }}>{information.email}</span></p>
                    <p><label>Conatct:</label><span>{information.phoneNo}</span></p>
                    <div className="call">
                        <a href={`tel:${information.phoneNo}`} >Call Now </a>

                    </div>

                </div>
            )}
        </Fragment>
    )
}
