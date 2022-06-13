import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { usersCon } from '../../App';
// import { Link } from "react-router-dom";

const Edit = () => {
    let navi = useNavigate()
    let [users, setUsers] = useContext(usersCon)
    console.log(users);
    let { editid } = useParams()
    let user = users.filter(usee => usee.id.toString() === editid)
    console.log(user);

    let [usernamee, setUsername] = useState(user[0].username)
    console.log(usernamee);
    let [email, setEmail] = useState(user[0].email)
    console.log(email);

    let updateUser = (e) => {
        setUsername(e.target.value)
        console.log(usernamee);
        let editedName = usernamee
        user[0].username = editedName

    }
    let updateemail = (e) => {
        setEmail(e.target.value)
        console.log(email);
        let editedEmail = email
        user[0].email = editedEmail

    }
    let editUser = (e) => {
        e.preventDefault();
        setUsers([...users, user[0]]);
        navi('/')
    }

    return (
        <div>
            <h1>Hey edit:  {user[0].id}</h1>
            <Form className='mt-5' onSubmit={editUser}>
                <Form.Group className="mb-3" >
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                        type="text"
                        name='usernamee'
                        value={usernamee}
                        onChange={updateUser}
                    // placeholder={user[0].username}
                    />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        name='email'
                        value={email}
                        onChange={updateemail}
                    // placeholder={user[0].email}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>


                <Button onSubmit={() => editUser} variant="primary" type="submit">
                    Edit User
                </Button>
                <Button className="action_btn" variant="info">
                    Back to Home
                </Button>



            </Form>
        </div>
    );
};

export default Edit;