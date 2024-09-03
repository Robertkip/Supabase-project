import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container, Nav, Form, Row, Col, Button } from 'react-bootstrap'
import './App.css'
import Productcard from './Productcard'
import { supabase } from './SupabaseClient'

function App() {
  const [country_name, setCountry_Name] = useState('')
  const [iso_two, setIso_two] = useState('')
  const [iso_three, setIso_three] = useState('')
  const [Iso_number, setIso_number] = useState('')
  const [region, setRegion] = useState('')
  const [record_year, setRecord_year] = useState('')
  const [total_population, setTotal_population] = useState('')
  const [prev_all_forms, setPrev_all_forms] = useState('')
  const [estimates, setEstimates] = useState([]);
  

  console.log(country_name)
  console.log(iso_two)

  useEffect(() => {
    getEstimates();


  }, [])



  async function getEstimates() {
    try {
      const { data, error } = await supabase
        .from("tb_estimates")
        .select('*')
        .limit(100);
      if (error) throw error;
      if (data != null) {
        setEstimates(data);
      }
    } catch (error) {
      alert(error.message);
    }
  }
  async function createEstimates() {
        try {
      const { data, error } = await supabase
        .from("tb_estimates")
        .insert([
          {
            country_name: country_name,
            iso_two: iso_two,
            iso_three: iso_three,
            iso_number: Iso_number,
            region: region,
            record_year: record_year,
            total_population: total_population,
            prev_all_forms: prev_all_forms
          },
        ]);
      if (error) throw error;
      alert("TB Estimate created!");
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }
   console.log(estimates);

  return (
    <>
<Navbar>
  {/* {products.map((product) => {
    return (
      <Productcard product={product} />
    )
  })} */}
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
  <Form.Label>Country Name</Form.Label>
  <Form.Control type="text" id='country_name' placeholder="Country_name" onChange={(e) => setCountry_Name(e.target.value)} />
  <Form.Label>Iso_two </Form.Label>
  <Form.Control type="text" id='iso_two' placeholder="Iso_two" onChange={(e) => setIso_two(e.target.value)} />
    <Form.Label>Iso_three </Form.Label>
    <Form.Control type="text" id='iso_three' placeholder="Iso_three" onChange={(e) => setIso_three(e.target.value)} />
      <Form.Label>Iso_number </Form.Label>
      <Form.Control type="number" id='iso_number' placeholder="Iso_number" onChange={(e) => setIso_number(e.target.value)} />
      <Form.Label>Region </Form.Label>
      <Form.Control type="text" id='region' placeholder="Region" onChange={(e) => setRegion(e.target.value)} />
      <Form.Label>Record Year </Form.Label>
      <Form.Control type="number" id='record_year' placeholder="Record Year" onChange={(e) => setRecord_year(e.target.value)} />
        <Form.Label>Total Population </Form.Label>
        <Form.Control type="number" id='total_population' placeholder="Total Population" onChange={(e) => setTotal_population(e.target.value)} />
          <Form.Label>Prev all Forms</Form.Label>
          <Form.Control type="number" id='prev_all_forms' placeholder="Prev all Forms" onChange={(e) => setPrev_all_forms(e.target.value)} />
  <br></br>
  <Button variant="primary" onClick={() => createEstimates()}>Create an Element</Button>
  </Col>
</Row>
<hr></hr>
<h3>Current Database Items</h3>
<Row xs={1} lg={3} className='g-4'>
{estimates.map((estimate) => {
    return (
      <Productcard estimate={estimate} />
    )
  })}

</Row>
</Container>

    </>
  )
}

export default App
