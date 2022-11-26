
import React, { useState } from 'react';
import { Button, Label, Modal, ModalHeader, ModalBody, ModalFooter, Input, FormGroup } from 'reactstrap';
import { Col, Row } from 'react-bootstrap'
import { faBan, faAdd, faCheck, faAngleLeft, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EmptyIcon } from '../../assets';


const AddTodoList = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    return (
        <Col className='container'>
            <Modal
                isOpen={modal}
                toggle={toggle}
                size='lg'
            >
                <ModalHeader
                    toggle={toggle}>
                    Tambah List Item
                </ModalHeader>
                <ModalBody>
                    <FormGroup >
                        <Label className="small fw-bold ">NAMA LIST ITEM</Label>
                        <Input
                            className='w-100'
                            type="text"
                        />
                    </FormGroup>


                </ModalBody>
                <ModalFooter>
                    <Button color="info" className='text-white rounded-pill px-5 p-3' onClick={toggle}>
                        Simpan
                    </Button>

                </ModalFooter>
            </Modal>

            <Row>
                <Col>
                    <Label className='fw-bold fs-1'>
                        <FontAwesomeIcon className="icon pr-1 me-5" icon={faAngleLeft} />
                        New Activity
                        <FontAwesomeIcon className="icon pr-1 mx-5" icon={faEdit} />
                    </Label>

                </Col>
                <Col>
                    <Col className='d-flex my-2 flex-row-reverse'>
                        <Button className='rounded-pill fw-bold px-4 py-2 bg-info' onClick={toggle}>
                            <FontAwesomeIcon className="icon pr-1 mx-1 fw-bold" icon={faAdd} />
                            Tambah</Button>
                    </Col>

                </Col>
            </Row>
            <Row className='py-5 my-5'>
                <EmptyIcon />
            </Row>
        </Col>

    )
}

export default AddTodoList