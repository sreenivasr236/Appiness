import React, { useState } from 'react'
import { connect } from 'react-redux'
import Form from '../../Components/Form/Form'
import Input from '../../Components/Input/Input'
import './EntryForm.scss'
import { useHistory } from "react-router-dom";

export const EntryForm = (props) => {
    let history = useHistory();

    const [email, setemail] = useState('');
    const [ispassword, setpassword] = useState('');
    const [isNotvalid, setNotvalid] = useState(false);
    const [isUsererror, setUsererror] = useState(false);
    const [isPassworderror, setPassworderror] = useState(false);
    function submitHandler(event) {
        event.preventDefault();
        if ((props.username === email) && (props.password === ispassword)) {
            history.push('/dashboard')
        }
        else if (email === "") {
            setUsererror(true)
        }
        else if (ispassword === "") {
            setPassworderror(true)
        }
        else if ((props.username !== email) && (props.password !== ispassword)) {
            setNotvalid(true)
        }

    }
    return (
        <div className="EntryForm">
            <h2>Login</h2>
            <Form submit={true} buttonvalue={'Login'} onClick={submitHandler} >
                <Input type="email" required placeholder={'Username'} label={'Enter Username'} error={isUsererror} onChange={(e) => setemail(e.target.value)} value={email} />

                <Input type="password" required placeholder={'password'} label={' Enter Passowrd'} error={isPassworderror} onChange={(e) => setpassword(e.target.value)} value={ispassword} />
            </Form>
            {isNotvalid ?
                <span className="global-info">Wrong Credintials</span>
                : ''}

        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(EntryForm)
