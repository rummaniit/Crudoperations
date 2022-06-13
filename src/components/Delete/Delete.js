import React, { useContext } from 'react';
import { usersCon } from '../../App';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";


const Delete = () => {
    let [users, setUsers] = useContext(usersCon)
    let { userid } = useParams();
    console.log(userid);
    let handledelete = () => {
        let user = users.filter(usee => usee.id.toString() !== userid)
        setUsers(user)
    }
    return (
        <div>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Link to='/'>
                        <Button variant="secondary">Cancel</Button>
                        <Button variant="primary" onClick={handledelete}>Delete</Button>
                    </Link>
                </Modal.Footer>
            </Modal.Dialog>
        </div >
    );
};

export default Delete;