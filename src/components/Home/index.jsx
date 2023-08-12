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
// import { DeleteIcon, SuccessDelete } from "../../assets";
import { HomeIcon } from "../../assets";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs, getDetailJob } from "../../redux/slicer";
import moment from "moment";

const Home = () => {
  const { activity } = useSelector((state) => state.slicer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [modalDelete, setModalDelete] = useState(false);
  const toggleDelete = () => setModalDelete(!modalDelete);

  const [description, setDescription] = useState("");
  const [lokasi, setLokasi] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const activitiesPerPage = 10;

  const formatDate = (cell, row) => {
    let dateFormat = moment(cell).format("DD MMMM YYYY");
    return dateFormat;
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

  const findJobs = () => {
    dispatch(
      getAllJobs({
        description: description,
        location: lokasi,
        page: currentPage,
      })
    );
  };

  const detailJob = (e) => {
    //   console.log(e);
    dispatch(getDetailJob(e));
    navigate("/detail");
  };

  useEffect(() => {
    if (description === "" || lokasi === "") {
      dispatch(getAllJobs({ description: "", location: "", page: "" }));
    }
  }, []);
  return (
    <Container>
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
                value={description}
                onChange={(event) => setDescription(event.target.value)}
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
                value={lokasi}
                onChange={(event) => setLokasi(event.target.value)}
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
            <Button color="primary" onClick={findJobs} outline>
              Search
            </Button>
          </Col>
        </Row>
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
                  onClick={() => {
                    detailJob(item.id);
                  }}
                  className="d-flex cursor:pointer pulse border rounded shadow my-2"
                  style={{
                    minHeight: "10vh",
                    marginLeft: "12px",
                  }}
                >
                  {/* <Label
                    style={{ cursor: "pointer" }}
                    className="mb-auto fw-bold fs-4 m-4"
                  >
                    {item.title}
                  </Label> */}
                  <Row className=" mx-4 mt-2 d-flex align-items-center justify-content-between">
                    <Col>
                      <p className="fs-5 fw-bold text-info">{item.title}</p>
                      <p>
                        {item.company_url} - {item.type}
                      </p>
                    </Col>
                    <Col className="text-end">
                      <p>{item.location}</p>
                      <p>{item.created_at}</p>
                    </Col>
                  </Row>
                  {/*  <span className="fs-5 mx-4 d-flex justify-content-between">
                    {formatDate(item.created_at)}
                  </span> */}
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
