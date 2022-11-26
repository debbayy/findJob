import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import { Card } from "reactstrap"
import { faBan, faAdd, faEdit, faAngleLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EmptyIcon } from '../../assets';
import { Label } from 'reactstrap';

const AddTodo = () => {
    return (
        <Col className='container'>
            <Row>
                <Col>
                    <Label className='fw-bold fs-1'>
                        Activity                    </Label>
                </Col>
                <Col>
                    <Col className='d-flex my-2 flex-row-reverse'>
                        <Button className='rounded-pill fw-bold px-4 py-2 bg-info'>
                            <FontAwesomeIcon className="icon pr-1 mx-1 fw-bold" icon={faAdd} />
                            Tambah</Button>
                    </Col>
                </Col>
            </Row>
            <Row className='my-5 ' >
                <Col sm="3">
                    <Card className='d-flex flex-column border border-0 rounded shadow my-2'
                        style=
                        {{
                            minHeight: "30vh"
                        }}>
                        <Label className=' mb-auto fw-bold fs-4 m-4' >New Activity</Label>
                        <Label className='fs-5 m-4' >6 Oktober 2022  <FontAwesomeIcon className="icon pr-1 ms-5 ps-4 fw-bold" icon={faTrash} /></Label>
                    </Card>
                </Col>
                <Col sm="3">
                    <Card className='d-flex flex-column border border-0 rounded shadow my-2'
                        style=
                        {{
                            minHeight: "30vh"
                        }}>
                        <Label className=' mb-auto fw-bold fs-4 m-4' >New Activity</Label>
                        <Label className='fs-5 m-4' >6 Oktober 2022  <FontAwesomeIcon className="icon pr-1 ms-5 ps-4 fw-bold" icon={faTrash} /></Label>
                    </Card>
                </Col>
                <Col sm="3">
                    <Card className='d-flex flex-column border border-0 rounded shadow my-2'
                        style=
                        {{
                            minHeight: "30vh"
                        }}>
                        <Label className=' mb-auto fw-bold fs-4 m-4' >New Activity</Label>
                        <Label className='fs-5 m-4' >6 Oktober 2022  <FontAwesomeIcon className="icon pr-1 ms-5 ps-4 fw-bold" icon={faTrash} /></Label>
                    </Card>
                </Col>
                <Col sm="3">
                    <Card className='d-flex flex-column border border-0 rounded shadow my-2'
                        style=
                        {{
                            minHeight: "30vh"
                        }}>
                        <Label className=' mb-auto fw-bold fs-4 m-4' >New Activity</Label>
                        <Label className='fs-5 m-4' >6 Oktober 2022  <FontAwesomeIcon className="icon pr-1 ms-5 ps-4 fw-bold" icon={faTrash} /></Label>
                    </Card>
                </Col>
                <Col sm="3">
                    <Card className='d-flex flex-column border border-0 rounded shadow my-2'
                        style=
                        {{
                            minHeight: "30vh"
                        }}>
                        <Label className=' mb-auto fw-bold fs-4 m-4' >New Activity</Label>
                        <Label className='fs-5 m-4' >6 Oktober 2022  <FontAwesomeIcon className="icon pr-1 ms-5 ps-4 fw-bold" icon={faTrash} /></Label>
                    </Card>
                </Col>
            </Row>
        </Col>
    )
}

export default AddTodo