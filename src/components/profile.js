import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import userActions from '../actions/user-actions'
import {connect} from "react-redux";

const Profile = (
    {
        currentUser,
        getCurrentUser,
        profileUser,
        getUserById
    }) => {


    const [newUser, setNewUser] = useState()

    useEffect(() => {
        getCurrentUser()
    }, [])

    return (
        <div class="container-fluid">
            {
                currentUser
                && <>
                    <Link to="/">
                        <i className="fas fa-2x fa-home float-right"/>
                    </Link>
                    <div class="row">
                        <div class="col-2 d-none d-md-table-cell">
                            <h4>Profile</h4>
                        </div>
                    </div>
                    <br/>
                    <div class="col-4">
                        <h4>Personal Information</h4>
                    </div>
                    <div class="col-md-8">
                        <div class="card mb-3">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">First Name</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {currentUser.firstName}
                                    </div>
                                </div>
                                <hr/>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Last Name</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {currentUser.lastName}
                                    </div>
                                </div>
                                <hr/>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Email</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {currentUser.email}
                                    </div>
                                </div>
                                <hr/>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Phone</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {currentUser.phone}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>

                    <div className="col-4">
                        <h4>Groups {currentUser.firstName} Follows</h4>
                    </div>
                    <div className="row">
                        <Card style={{width: '18rem'}}>
                            <Card.Body>
                                <Card.Title>ThePlantSociety</Card.Title>
                                <Button variant="primary">Go</Button>
                            </Card.Body>
                        </Card>
                        <br/>
                        <Card style={{width: '18rem'}}>
                            <Card.Body>
                                <Card.Title>FinestFlora</Card.Title>
                                <Button variant="primary">Go</Button>
                            </Card.Body>
                        </Card>
                        <br/>
                        <Card style={{width: '18rem'}}>
                            <Card.Body>
                                <Card.Title>PlantPerfect</Card.Title>
                                <Button variant="primary">Go</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-4">
                        <h4>Users {currentUser.firstName} Follows</h4>

                            <h6><Link to = {`/profile/${currentUser.usersFollowed[0]}`}>
                            {currentUser.usersFollowed[0]}</Link></h6>
                            <h6><Link to = {`/profile/${currentUser.usersFollowed[1]}`}>
                            {currentUser.usersFollowed[1]}</Link></h6>
                            <h6><Link to = {`/profile/${currentUser.usersFollowed[2]}`}>
                            {currentUser.usersFollowed[2]}</Link></h6>
                            <h6><Link to = {`/profile/${currentUser.usersFollowed[3]}`}>
                            {currentUser.usersFollowed[3]}</Link></h6>
                            <h6><Link to = {`/profile/${currentUser.usersFollowed[4]}`}>
                            {currentUser.usersFollowed[4]}</Link></h6>
                            <h6><Link to = {`/profile/${currentUser.usersFollowed[5]}`}>
                            {currentUser.usersFollowed[5]}</Link></h6>

                    </div>
                </>
            }
        </div>

    )
}

const stpm = (state) => (
    {
        currentUser: state.userReducer.currentUser,
        profileUser: state.userReducer.profileUser,
    }
)

const dtpm = (dispatch) => {
    return {
        getCurrentUser: () => userActions.profile(dispatch),
        getUserById: (userId) => userActions.findUserById(dispatch, userId)
    }
}

export default connect(stpm, dtpm)(Profile)