import { useState } from "react";
import { Card, Button, Form } from "react-bootstrap"
const Productcard = (props) => {
  const estimate = props.estimate;
  console.log(estimate);

    const [ editing, setEditing ] = useState(false)
    const [country_name, setCountry_Name] = useState('')
    const [iso_two, setIso_two] = useState('')
    const [iso_three, setIso_three] = useState('')
    const [Iso_number, setIso_number] = useState('')
    const [region, setRegion] = useState('')
    const [record_year, setRecord_year] = useState('')
    const [total_population, setTotal_population] = useState('')
    const [prev_all_forms, setPrev_all_forms] = useState('')

async function updateEstimate(e) {

}

async function deleteEstimate(e) {

}

  return (
    <Card style={{width: "18rem"}}>
        <Card.Body>
            { editing == false ?
            <>
            <Card.Title>Country Name : {estimate.country_name}</Card.Title>
            <Card.Text>Iso_Two : {estimate.iso_two} </Card.Text>
            <Card.Text>Iso_Three :  {estimate.iso_three} </Card.Text>
            <Card.Text>Iso_Number :  {estimate.iso_number} </Card.Text>
            <Card.Text>Region :  {estimate.region} </Card.Text>
            <Card.Text>Record_Year : {estimate.record_year} </Card.Text>
            <Card.Text>Total_Population :  {estimate.total_population} </Card.Text>
            <Card.Text>Preview Forms :  {estimate.prev_all_forms} </Card.Text>
            <Button variant="danger">Delete</Button>
            <Button variant="secondary" onClick={() => setEditing(true)}>Edit</Button>
            </>
            :
            <>
            <h4>Editing</h4>
            <Button size="sm" onClick={() => setEditing(false)}>Cancel</Button>
            <br></br>
            <Form.Label>Elements Country Name</Form.Label>
  <Form.Control type="text" id='country_name' defaultValue={estimate.country_name} placeholder="Country" onChange={(e) => setCountry_Name(e.target.value)} />
  <Form.Label>Elements Iso Two</Form.Label>
  <Form.Control type="text" id='iso_two' defaultValue={estimate.iso_two} placeholder="Iso_two" onChange={(e) => setIso_two(e.target.value)} />
    <Form.Label>Elements Iso Three</Form.Label>
    <Form.Control type="text" id='iso_three' defaultValue={estimate.iso_three} placeholder="Iso_three" onChange={(e) => setIso_three(e.target.value)} />
      <Form.Label>Elements Iso Number</Form.Label>
      <Form.Control type="text" id='iso_number' defaultValue={estimate.iso_number} placeholder="Iso_number" onChange={(e) => setIso_number(e.target.value)} />
        <Form.Label>Elements Region</Form.Label>
        <Form.Control type="text" id='region' defaultValue={estimate.region} placeholder="Region" onChange={(e) => setRegion(e.target.value)} />
          <Form.Label>Elements Record Year</Form.Label>
          <Form.Control type="text" id='record_year' defaultValue={estimate.record_year} placeholder="Record_year" onChange={(e) => setRecord_year(e.target.value)} />
            <Form.Label>Elements Total Population</Form.Label>
            <Form.Control type="text" id='total_population' defaultValue={estimate.total_population} placeholder="Total_population" onChange={(e) => setTotal_population(e.target.value)} />
              <Form.Label>Elements Prev All Forms</Form.Label>
              <Form.Control type="text" id='prev_all_forms' defaultValue={estimate.prev_all_forms} placeholder="Prev_all_forms" onChange={(e) => setPrev_all_forms(e.target.value)} />
  <br></br>


            </>
            }
        </Card.Body>
    </Card>
  )
}

export default Productcard