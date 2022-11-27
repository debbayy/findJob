import React, { useEffect, useState } from 'react';
import { Button, Label, Modal, ModalHeader, ModalBody, ModalFooter, Input, FormGroup } from 'reactstrap';
import { Col, Row } from 'react-bootstrap'
import { Card } from "reactstrap"
import { faBan, faAdd, faEdit, faAngleLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DeleteIcon, SuccessDelete } from '../../assets';
import { HomeIcon } from '../../assets';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listActivity } from '../../redux/todosSlicer';
import moment from 'moment';



const Home = () => {
    const { activity } = useSelector((state) => state.todosSlicer)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [modalDelete, setModalDelete] = useState(false);
    const toggleDelete = () => setModalDelete(!modalDelete);

    function addActivity() {
        navigate("/Tambah-Activity-list");
    }

    useEffect(() => {
        dispatch(listActivity())
    }, [])

    const formatDate = (cell, row) => {
        let dateFormat = moment(cell).format("DD-MM-YYYY");
        return dateFormat;
    };

    const data = []
    return (
        <Col className='container'>
            <Modal
                isOpen={modalDelete}
                toggle={toggleDelete}
                size='ml'
            >
                <ModalBody >
                    <FormGroup className='d-flex justify-content-start pt-2'>
                        <SuccessDelete className='mx-2 mt-1' />
                        <span className="fs-5 ">Activity berhasil dihapus</span>
                    </FormGroup>
                </ModalBody>
            </Modal>
            <Modal
                isOpen={modal}
                toggle={toggle}
                size='ml'
            >
                <ModalBody className='my-3' >
                    <FormGroup className='d-flex justify-content-center'>
                        <DeleteIcon />
                    </FormGroup>
                    <FormGroup className='d-flex justify-content-center'>

                        <Label className="text-center fs-4 ">Apakah anda yakin menghapus activity<br />
                            <Label className='fw-bold'>

                                “Meeting dengan Client”?
                            </Label>
                        </Label>

                    </FormGroup>
                    <FormGroup className='d-flex justify-content-center'>
                        <Button color="light" className='text-muted fw-bold rounded-pill px-5 p-3 mx-2' onClick={toggle}>
                            Batal
                        </Button>
                        <Button color="danger" className='text-white  fw-bold rounded-pill px-5 p-3 mx-2' onClick={() => {
                            toggle()
                            toggleDelete()
                        }
                        }>
                            Hapus
                        </Button>
                    </FormGroup>
                </ModalBody>
            </Modal>
            <Row>
                <Col>
                    <Label className='fw-bold fs-1'>
                        Activity                    </Label>
                </Col>
                <Col>
                    <Col className='d-flex my-2 flex-row-reverse'>
                        <Button color='info' className='rounded-pill text-white fw-bold px-4 py-2'>
                            <FontAwesomeIcon className="icon pr-1 mx-1 fw-bold" icon={faAdd} onClick={addActivity} />
                            Tambah</Button>
                    </Col>
                </Col>
            </Row>
            <Row className='my-5 ' >
                {activity.map((item) => {
                    console.log(item, "ini apaa ini haaa");
                    return (
                        <>
                            {activity === 0 ? (
                                <>
                                    <HomeIcon />
                                </>
                            ) : (
                                <>
                                    <Col sm="3" >
                                        <Card className='d-flex flex-column border border-0 rounded shadow my-2'
                                            style=
                                            {{
                                                minHeight: "30vh"
                                            }}>
                                            <Label className=' mb-auto fw-bold fs-4 m-4' >{item.title}</Label>
                                            <Label className='fs-5 m-4' >{formatDate(item.created_at)} <FontAwesomeIcon className="icon pr-1 ms-5 ps-4 fw-bold" style={{ cursor: "pointer" }} onClick={toggle} icon={faTrash} /></Label>
                                        </Card>
                                    </Col>
                                </>

                            )}
                        </>
                    );
                })}

            </Row >
        </Col >
    )
}

export default Home