import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { usersCon } from '../../App';
import Readdetails from '../Create/Create';
import './Read.css';

const Read = () => {
    let [users, setUsers] = useContext(usersCon)
    let { readid } = useParams();
    let user = users.filter(usee => usee.id.toString() === readid)
    return (
        <div>
            <div className="container">
                <>
                    <Card border="dark" className='readcss mt-5' style={{ width: '18rem' }}>
                        <Card.Header><h1>Name:</h1>{user[0].name}</Card.Header>
                        <Card.Body>
                            <Card.Title>Username: {user[0].username}</Card.Title>
                            <Card.Text>
                                Email: {user[0].email}
                                <br />
                                Address: {user[0].address.street} , {user[0].address.suite},
                                {user[0].address.city}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Link to={'/'}><Button variant="outline-info" className='mt-4'>Home</Button></Link>
                </>
            </div>
        </div>
    );
};

export default Read;