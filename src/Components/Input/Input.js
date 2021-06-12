import React from 'react'
import './Input.scss'
export default function Input(props) {
    return (
        <div className="Input">
            <label>{props.label}</label>
            <input type={props.type} value={props.value} required={props.required} onChange={props.onChange} placeholder={props.placeholder} />
            {props.error ? <span className="error">required</span> : ''}
        </div>
    )
}
