import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { usersCon } from '../../App';
// import { useNavigate } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
// import Usercontext from '../Usercontext/Usercontext';


const Home = () => {
    let [users, setUsers] = useContext(usersCon)
    console.log(users);
    let navigate = useNavigate()
    let handleCreate = () => {
        navigate('/create')
    }
    return (
        <div>
            <Button variant="primary" className='m-5' onClick={handleCreate}>Create User</Button>{' '}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {/* <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Larry</td>
                        <td>Tom</td>
                        <td>@twitter</td>
                    </tr>
                </tbody> */}{
                    users.map(user => <tbody>
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>@{user.email}</td>
                            <td >
                                <Link to={`/delete/${user.id}`}><Button className='m-2' variant="danger">Delete</Button></Link>
                                <Link to={`/read/${user.id}`}><Button className='m-2' variant="warning" >Read</Button></Link>
                                <Link to={`/edit/${user.id}`}><Button className='m-2' variant="success">Edit</Button></Link>
                            </td>
                        </tr>
                    </tbody>)
                }
            </Table>
        </div>
    );
};

export default Home;