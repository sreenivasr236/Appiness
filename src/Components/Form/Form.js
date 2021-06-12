import React from 'react'

export default function Form(props) {
    return (
        <div className="Form">
            <form>
                {props.children}
                {props.submit ?
                    <div className="form-footer">
                        <button type={'submit'} value={props.buttonvalue} onClick={props.onClick} >{props.buttonvalue}</button>
                    </div>
                    : ''}
            </form>


        </div>
    )
}
