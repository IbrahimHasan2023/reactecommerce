import { useState } from "react";
import { Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";

export default function Products() {
  const [product, setProduct] = useState([]);

  // const [search, setSearch] = useState("");
  // const filterData = product.data.filter((item) =>
  //   item.Title.toLowerCase().includes(search.toLowerCase())
  // );
  // //function to handle with search
  // function handleSearch(e) {
  //   setSearch(e.target.value);
  // }

  const ShowProducts = product.map((user, key) => (
    <tr key={key}>
      <td>{key + 1}</td>
      <td>{user.Title}</td>
      <td>{user.Img}</td>
    </tr>
  ));

  return (
    <div className=" w-100 m-3">
      <h2>Products</h2>

      <Form.Control
        style={{ width: "300px" }}
        className="my-2"
        type="serch"
        placeholder="Search"
        // onChange={handleSearch}
      />

      <Table striped bordered hover>
        <thead >
          <tr>
            <th>id</th>
            <th>Title</th>
            <th> Img</th>
          </tr>
        </thead>
        <tbody>
          {product.length === 0 ? (
            <tr>
              <td colSpan={12} className="text-center">
                There is no Products
              </td>
            </tr>
          ) : (
            ShowProducts
          )}
        </tbody>
      </Table>
    </div>
  );
}
