import React from 'react'
import './UserInfo.scss'
import Card from '../../Components/Card/Card'
export default function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Card data={props.data} />
        </div>
    )
}
