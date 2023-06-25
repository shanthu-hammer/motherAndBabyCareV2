import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
const CustomTable = (probs) => {
  const tableData = probs.tableData;
  //console.log(probs);

  const handleEditClick = (data) => {
    console.log(data);
    probs.editData(data)//passing to parent
  };

  return (
    <>
      <Table striped bordered hover>
        {/* {console.log(probs.tableData)} */}
        <thead>
          <tr>
            <th>name</th>
            <th>color</th>

            <th>id</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.color}</td>
              <td>{data.id}</td>
              <td>{data.price}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-dark"
                  onClick={() => {
                    handleEditClick(data);
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default CustomTable;
