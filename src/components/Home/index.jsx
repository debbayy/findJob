import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import { faBan, faAdd, faCheck, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HomeIcon } from '../../assets';

const Home = () => {
    return (
        <Col className='container'>
            <Row>
                <Col>
                    <h1 className='fw-bold'>Activity</h1>
                </Col>
                <Col>
                    <Col className='d-flex my-2 flex-row-reverse'>
                        <Button className='rounded-pill fw-bold px-4 py-2 bg-info'>
                            <FontAwesomeIcon className="icon pr-1 mx-1 fw-bold" icon={faAdd} />
                            Tambah</Button>
                    </Col>

                </Col>
            </Row>
            <Row className='py-5 my-5'>
                <HomeIcon />
            </Row>
        </Col>

    )
}

export default Home