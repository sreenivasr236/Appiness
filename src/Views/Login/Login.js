import React from 'react'
import { connect } from 'react-redux'
import EntryForm from '../../Containers/EntryForm/EntryForm'
import './Login.scss'

export const Login = (props) => {
    return (
        <div className="Login">
            <EntryForm username={props.username} password={props.password} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    username: state.counter.username,
    password: state.counter.password
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
