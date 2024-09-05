import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Form, Row, Col, Button, Modal } from 'react-bootstrap';
import './App.css';
import Productcard from './Productcard';
import { supabase } from './SupabaseClient';

function App() {
  const [show, setShow] = useState(false);

  const [country_name, setCountry_Name] = useState('');
  const [iso_two, setIso_two] = useState('');
  const [iso_three, setIso_three] = useState('');
  const [iso_number, setIso_number] = useState('');
  const [region, setRegion] = useState('');
  const [record_year, setRecord_year] = useState('');
  const [total_population, setTotal_population] = useState('');
  const [prev_all_forms, setPrev_all_forms] = useState('');
  const [estimates, setEstimates] = useState([]);

  // Handle modal open/close
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getEstimates();
  }, []);

  async function getEstimates() {
    try {
      let allData = [];
      let from = 0;
      const limit = 1000; // Fetch 1000 records at a time
      let fetchMore = true;

      while (fetchMore) {
        const { data, error } = await supabase
          .from('tb_estimates')
          .select('*')
          .range(from, from + limit - 1); // Fetch records in batches of `limit`

        if (error) throw error;

        if (data.length > 0) {
          allData = [...allData, ...data];
          from += limit;
        }

        // Stop fetching when fewer records are returned than the limit, meaning you've reached the end
        if (data.length < limit) {
          fetchMore = false;
        }
      }

      setEstimates(allData);
    } catch (error) {
      alert(error.message);
    }
  }

  async function createEstimates() {
    try {
      const { data, error } = await supabase
        .from('tb_estimates')
        .insert([
          {
            country_name: country_name,
            iso_two: iso_two,
            iso_three: iso_three,
            iso_number: iso_number,
            region: region,
            record_year: record_year,
            total_population: total_population,
            prev_all_forms: prev_all_forms
          }
        ]);
      if (error) throw error;
      alert('TB Estimate created!');
      getEstimates(); // Re-fetch estimates after creation
      handleClose(); // Close the modal after
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>Store Elements</Navbar.Brand>
          <Nav>
            <Nav.Item>Created by Naveile App</Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <h3>Create Elements for Supabase Database</h3>
            <Button variant="primary" onClick={handleShow}>
            Create Tb Estimates
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Create Element</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form.Label>Country Name</Form.Label>
            <Form.Control
              type="text"
              id="country_name"
              placeholder="Country_name"
              onChange={(e) => setCountry_Name(e.target.value)}
            />
            <Form.Label>Iso_two</Form.Label>
            <Form.Control
              type="text"
              id="iso_two"
              placeholder="Iso_two"
              onChange={(e) => setIso_two(e.target.value)}
            />
            <Form.Label>Iso_three</Form.Label>
            <Form.Control
              type="text"
              id="iso_three"
              placeholder="Iso_three"
              onChange={(e) => setIso_three(e.target.value)}
            />
            <Form.Label>Iso_number</Form.Label>
            <Form.Control
              type="number"
              id="iso_number"
              placeholder="Iso_number"
              onChange={(e) => setIso_number(e.target.value)}
            />
            <Form.Label>Region</Form.Label>
            <Form.Control
              type="text"
              id="region"
              placeholder="Region"
              onChange={(e) => setRegion(e.target.value)}
            />
            <Form.Label>Record Year</Form.Label>
            <Form.Control
              type="number"
              id="record_year"
              placeholder="Record Year"
              onChange={(e) => setRecord_year(e.target.value)}
            />
            <Form.Label>Total Population</Form.Label>
            <Form.Control
              type="number"
              id="total_population"
              placeholder="Total Population"
              onChange={(e) => setTotal_population(e.target.value)}
            />
            <Form.Label>Prev all Forms</Form.Label>
            <Form.Control
              type="number"
              id="prev_all_forms"
              placeholder="Prev all Forms"
              onChange={(e) => setPrev_all_forms(e.target.value)}
            />
            <br />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={createEstimates}>
                Create Tb estimate
              </Button>
            </Modal.Footer>
          </Modal>
          </Col>
        </Row>
        <hr />
        <h3>Current Database Items</h3>
        <Row xs={1} lg={3} className="g-4">
          <Productcard estimates={estimates} />
        </Row>
      </Container>
    </>
  );
}

export default App;