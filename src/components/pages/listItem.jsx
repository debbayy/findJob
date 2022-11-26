import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ListItems = () => {
    return (
        <Col className='container'>
            <Row>
                <Col>
                    <h1 className='fw-bold'>Daftar Belanja Bulanan</h1>
                </Col>
                <Col>
                    <Col className='d-flex my-2 flex-row-reverse'>
                        <Button className='rounded-pill fw-bold px-4 py-2 bg-info'>
                            <FontAwesomeIcon className="icon pr-1 mx-1 fw-bold" icon={faAdd} />
                            Tambah</Button>
                    </Col>

                </Col>
            </Row>
            <Row className='py-3 my-3 bg-blue'>
                <div className='bg-light py-4 my-2 p-2 shadow rounded' style={{ height: "7vh", width: "100%" }}>ini adalah  todo list</div>
                <div className='bg-light py-4 my-2 p-2 shadow rounded' style={{ height: "7vh", width: "100%" }}>ini adalah  todo list</div>
                <div className='bg-light py-4 my-2 p-2 shadow rounded' style={{ height: "7vh", width: "100%" }}>ini adalah  todo list</div>
                <div className='bg-light py-4 my-2 p-2 shadow rounded' style={{ height: "7vh", width: "100%" }}>ini adalah  todo list</div>
                <div className='bg-light py-4 my-2 p-2 shadow rounded' style={{ height: "7vh", width: "100%" }}>ini adalah  todo list</div>
                <div className='bg-light py-4 my-2 p-2 shadow rounded' style={{ height: "7vh", width: "100%" }}>ini adalah  todo list</div>
                <div className='bg-light py-4 my-2 p-2 shadow rounded' style={{ height: "7vh", width: "100%" }}>ini adalah  todo list</div>
                <div className='bg-light py-4 my-2 p-2 shadow rounded' style={{ height: "7vh", width: "100%" }}>ini adalah  todo list</div>
                <div className='bg-light py-4 my-2 p-2 shadow rounded' style={{ height: "7vh", width: "100%" }}>ini adalah  todo list</div>
                <div className='bg-light py-4 my-2 p-2 shadow rounded' style={{ height: "7vh", width: "100%" }}>ini adalah  todo list</div>
                <div className='bg-light py-4 my-2 p-2 shadow rounded' style={{ height: "7vh", width: "100%" }}>ini adalah  todo list</div>
                <div className='bg-light py-4 my-2 p-2 shadow rounded' style={{ height: "7vh", width: "100%" }}>ini adalah  todo list</div>
                <div className='bg-light py-4 my-2 p-2 shadow rounded' style={{ height: "7vh", width: "100%" }}>ini adalah  todo list</div>
                <div className='bg-light py-4 my-2 p-2 shadow rounded' style={{ height: "7vh", width: "100%" }}>ini adalah  todo list</div>
                <div className='bg-light py-4 my-2 p-2 shadow rounded' style={{ height: "7vh", width: "100%" }}>ini adalah  todo list</div>
                <div className='bg-light py-4 my-2 p-2 shadow rounded' style={{ height: "7vh", width: "100%" }}>ini adalah  todo list</div>
                <div className='bg-light py-4 my-2 p-2 shadow rounded' style={{ height: "7vh", width: "100%" }}>ini adalah  todo list</div>
                <div className='bg-light py-4 my-2 p-2 shadow rounded' style={{ height: "7vh", width: "100%" }}>ini adalah  todo list</div>
                <div className='bg-light py-4 my-2 p-2 shadow rounded' style={{ height: "7vh", width: "100%" }}>ini adalah  todo list</div>
                <div className='bg-light py-4 my-2 p-2 shadow rounded' style={{ height: "7vh", width: "100%" }}>ini adalah  todo list</div>
                <div className='bg-light py-4 my-2 p-2 shadow rounded' style={{ height: "7vh", width: "100%" }}>ini adalah  todo list</div>
                <div className='bg-light py-4 my-2 p-2 shadow rounded' style={{ height: "7vh", width: "100%" }}>ini adalah  todo list</div>
                <div className='bg-light py-4 my-2 p-2 shadow rounded' style={{ height: "7vh", width: "100%" }}>ini adalah  todo list</div>
                <div className='bg-light py-4 my-2 p-2 shadow rounded' style={{ height: "7vh", width: "100%" }}>ini adalah  todo list</div>
                <div className='bg-light py-4 my-2 p-2 shadow rounded' style={{ height: "7vh", width: "100%" }}>ini adalah  todo list</div>
                <div className='bg-light py-4 my-2 p-2 shadow rounded' style={{ height: "7vh", width: "100%" }}>ini adalah  todo list</div>
            </Row>  

        </Col>

    )
}

export default ListItems