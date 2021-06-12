import React from 'react'
import { connect } from 'react-redux'
import UserInfo from '../../Containers/UserInfo/UserInfo'
import './Dashboard.scss'

export const Dashboard = (props) => {
    return (
        <div className="Dashboard">
            <h2>Dashboard</h2>
            <UserInfo data={props.information} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    information: state.information
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
