import React, { useEffect, useState } from "react";
import {
  Button,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  FormGroup,
  Form,
} from "reactstrap";
import { Col, Container, Row } from "react-bootstrap";
import { Card } from "reactstrap";
import {
  faBan,
  faAdd,
  faEdit,
  faAngleLeft,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DeleteIcon, SuccessDelete } from "../../assets";
import { HomeIcon } from "../../assets";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createData, deleteData, listActivity } from "../../redux/todosSlicer";
import moment from "moment";

const Home = () => {
  const { activity } = useSelector((state) => state.todosSlicer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [modalDelete, setModalDelete] = useState(false);
  const toggleDelete = () => setModalDelete(!modalDelete);
  const [idActivity, setIdActivity] = useState("");
  const [indexDel, setIndexDel] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const activitiesPerPage = 4;

  useEffect(() => {
    dispatch(listActivity());
  }, []);

  const formatDate = (cell, row) => {
    let dateFormat = moment(cell).format("DD MMMM YYYY");
    return dateFormat;
  };

  function listItem() {
    navigate("/Tambah-Activity");
  }

  const handlePost = () => {
    dispatch(createData());
  };
  const handleDelete = (e) => {
    setIdActivity(e);
    setModal(!modal);
    const tempIndex = activity.findIndex((item) => item.id === e);

    setIndexDel(tempIndex);
  };

  const indexOfLastActivity = currentPage * activitiesPerPage;
  const indexOfFirstActivity = indexOfLastActivity - activitiesPerPage;
  const currentActivities = activity.slice(
    indexOfFirstActivity,
    indexOfLastActivity
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  console.log(idActivity, "idbasdfasd");

  return (
    <Container>
      <Modal isOpen={modalDelete} toggle={toggleDelete} size="ml" centered>
        <ModalBody>
          <FormGroup className="d-flex justify-content-start pt-2">
            <SuccessDelete className="mx-2 mt-1" />
            <span className="fs-5 ">Activity berhasil dihapus</span>
          </FormGroup>
        </ModalBody>
      </Modal>
      <Modal isOpen={modal} toggle={toggle} size="ml" centered>
        <ModalBody className="my-3">
          <FormGroup className="d-flex justify-content-center">
            <DeleteIcon />
          </FormGroup>
          <FormGroup className="d-flex justify-content-center">
            <Label className="text-center fs-4 ">
              Apakah anda yakin menghapus activity
              <br />
              <Label className="fw-bold">"{activity[indexDel]?.title}"?</Label>
            </Label>
          </FormGroup>
          <FormGroup className="d-flex justify-content-center">
            <Button
              color="light"
              className="text-muted fw-bold rounded-pill px-5 p-3 mx-2"
              onClick={toggle}
            >
              Batal
            </Button>
            <Button
              color="danger"
              className="text-white  fw-bold rounded-pill px-5 p-3 mx-2"
              onClick={() => {
                dispatch(deleteData({ id: idActivity }));
                toggleDelete();
                toggle();
              }}
            >
              Hapus
            </Button>
          </FormGroup>
        </ModalBody>
      </Modal>
      <Row>
        <Row className="bg-light rounded shadow py-2 border">
          <Col md={4}>
            <FormGroup>
              <Label for="description">Job Description</Label>
              <Input
                id="description"
                name="job"
                placeholder="Web Developer"
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="location">Location</Label>
              <Input
                id="location"
                name="location"
                placeholder="Lokasi"
                type="text"
              />
            </FormGroup>
          </Col>
          <Col
            md={2}
            className="d-flex align-items-center justify-content-end pt-3"
          >
            <FormGroup check>
              <Input id="exampleCheckbox" name="checkbox" type="checkbox" />
              <Label check for="exampleCheckbox">
                Full Time Only
              </Label>
            </FormGroup>
          </Col>
          <Col
            md={2}
            className="d-flex align-items-center justify-content-end pt-3"
          >
            <Button color="primary" onClick={handlePost} outline>
              Search
            </Button>
          </Col>
        </Row>

        {/* <Col>
          <Label className="fw-bold fs-1">Activity</Label>
        </Col>
        <Col>
          <Col className="d-flex my-2 flex-row-reverse">
            <Button
              color="info"
              onClick={handlePost}
              className="rounded-pill text-white fw-bold px-4 py-2"
            >
              <FontAwesomeIcon
                className="icon pr-1 mx-1 fw-bold"
                icon={faAdd}
              />
              Tambah
            </Button>
          </Col>
        </Col> */}
      </Row>
      <Row
        className="my-5 bg-light border rounded p-3"
        style={{
          marginLeft: "-23px",
          marginRight: "5px",
        }}
      >
        {activity.length === 0 ? (
          <>
            <HomeIcon />
          </>
        ) : (
          <>
            {currentActivities.map((item) => (
              <Row key={item.id}>
                <Card
                  className="d-flex cursor:pointer pulse border rounded shadow my-2"
                  style={{
                    minHeight: "10vh",
                    marginLeft: "12px",
                  }}
                >
                  <Label
                    onClick={listItem}
                    style={{ cursor: "pointer" }}
                    className="mb-auto fw-bold fs-4 m-4"
                  >
                    {item.title}
                  </Label>
                  <span className="fs-5 mx-4 d-flex justify-content-between mb-4">
                    {formatDate(item.created_at)}
                    <FontAwesomeIcon
                      className="icon pr-1 mt-1 fw-bold"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                      icon={faTrash}
                    />
                  </span>
                </Card>
              </Row>
            ))}

            {activity.length > activitiesPerPage && (
              <div className="d-flex justify-content-center">
                {Array.from(
                  { length: Math.ceil(activity.length / activitiesPerPage) },
                  (_, index) => (
                    <Button
                      color="primary"
                      key={index}
                      onClick={() => paginate(index + 1)}
                      className={`pagination-button mx-1 ${
                        currentPage === index + 1 ? "active" : ""
                      }`}
                    >
                      {index + 1}
                    </Button>
                  )
                )}
              </div>
            )}
          </>
        )}
      </Row>
    </Container>
  );
};

export default Home;
