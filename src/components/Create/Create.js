import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { usersCon } from '../../App';
import './Create.css'

const Create = () => {
    let [users, setUsers] = useContext(usersCon)
    console.log(users);
    let navigate = useNavigate()

    let [id, setId] = useState('')
    console.log(id);
    let [username, setUsername] = useState('')
    console.log(username);
    let [email, setEmail] = useState('')
    console.log(email);

    let updateId = (e) => {
        setId(e.target.value)
    }
    let updateUser = (e) => {
        setUsername(e.target.value)
    }
    let updateemail = (e) => {
        setEmail(e.target.value)
    }
    let addUser = (e) => {
        e.preventDefault()
        console.log('sub');
        setUsers([...users,
        { id: id, username: username, email: email }
        ])
        navigate('/')
    }
    return (
        <div className='container'>
            <Form className='mt-5' onSubmit={addUser}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Id</Form.Label>
                    <Form.Control type="number" name='id' value={id} onChange={updateId} placeholder="Enter id" />
                    <Form.Text className="text-muted">
                        We'll never share your id with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" name='username' value={username} onChange={updateUser} placeholder="Enter User name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" name='email' value={email} onChange={updateemail} placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Button variant="dark" type="submit">
                    Add User
                </Button>

            </Form>
        </div>
    );
};

export default Create;