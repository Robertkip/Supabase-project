import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Productcard = ({ estimates }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [country_name, setCountry_Name] = useState('');
  const [iso_two, setIso_two] = useState('');
  const [iso_three, setIso_three] = useState('');
  const [iso_number, setIso_number] = useState('');
  const [region, setRegion] = useState('');
  const [record_year, setRecord_year] = useState('');
  const [total_population, setTotal_population] = useState('');
  const [prev_all_forms, setPrev_all_forms] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 100;

  const totalPages = Math.ceil(estimates.length / recordsPerPage);

  const currentRecords = estimates.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  async function updateEstimate(e, index) {
    // Handle update logic
  }

  async function deleteEstimate(e, index) {
    // Handle delete logic
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Country Name</th>
            <th>Iso Two</th>
            <th>Iso Three</th>
            <th>Iso Number</th>
            <th>Region</th>
            <th>Record Year</th>
            <th>Total Population</th>
            <th>Prev All Forms</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((estimate, index) => (
            <tr key={index}>
              {editingIndex === index ? (
                <>
                  <td>
                    <Form.Control
                      type="text"
                      defaultValue={estimate.country_name}
                      onChange={(e) => setCountry_Name(e.target.value)}
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="text"
                      defaultValue={estimate.iso_two}
                      onChange={(e) => setIso_two(e.target.value)}
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="text"
                      defaultValue={estimate.iso_three}
                      onChange={(e) => setIso_three(e.target.value)}
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="text"
                      defaultValue={estimate.iso_number}
                      onChange={(e) => setIso_number(e.target.value)}
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="text"
                      defaultValue={estimate.region}
                      onChange={(e) => setRegion(e.target.value)}
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="text"
                      defaultValue={estimate.record_year}
                      onChange={(e) => setRecord_year(e.target.value)}
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="text"
                      defaultValue={estimate.total_population}
                      onChange={(e) => setTotal_population(e.target.value)}
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="text"
                      defaultValue={estimate.prev_all_forms}
                      onChange={(e) => setPrev_all_forms(e.target.value)}
                    />
                  </td>
                  <td>
                    <Button variant="success" onClick={(e) => updateEstimate(e, index)}>
                      Save
                    </Button>
                    <Button variant="secondary" onClick={() => setEditingIndex(null)}>
                      Cancel
                    </Button>
                  </td>
                </>
              ) : (
                <>
                <td>{estimate.id}</td>
                  <td>{estimate.country_name}</td>
                  <td>{estimate.iso_two}</td>
                  <td>{estimate.iso_three}</td>
                  <td>{estimate.iso_number}</td>
                  <td>{estimate.region}</td>
                  <td>{estimate.record_year}</td>
                  <td>{estimate.total_population}</td>
                  <td>{estimate.prev_all_forms}</td>
                  <td>
                    <Button variant="danger" onClick={(e) => deleteEstimate(e, index)}>
                      Delete
                    </Button>
                    <Button variant="secondary" onClick={() => setEditingIndex(index)}>
                      Edit
                    </Button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-between">
        <Button variant="primary" onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </Button>
        <span>Page {currentPage} of {totalPages}</span>
        <Button variant="primary" onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </Button>
      </div>
    </>
  );
};

export default Productcard;