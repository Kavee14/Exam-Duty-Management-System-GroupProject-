import React from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './LoginButton.css';

const LoginButton = () => {
    return (
        <LinkContainer to="/">
            <Button className="customloginbtn">
                Log in
            </Button>
        </LinkContainer>
    );
};

export default LoginButton
