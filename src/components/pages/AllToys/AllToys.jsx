import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const AllToys = () => {
  useTitle('All Toys')
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch(`https://naina-toys-server.vercel.app/toys`)
      .then(res => res.json())
      .then(data => setToys(data));
  }, [])
  return (
    <Container className='my-5'>
      <Table bordered hover>
        <thead className="table-success text-center">
          <tr>
            <th>Seller</th>
            <th> Toy Name</th>
            <th>Sub-category</th>
            <th> Price</th>
            <th> Available quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        {
          toys.map(toy =>
            <tbody>
              <tr>
                <td>{toy.seller_name}</td>
                <td>{toy.toy_name}</td>
                <td>{toy.sub_category}</td>
                <td>{toy.price}</td>
                <td>{toy.available_quantity}</td>
                <td><Link to={`/toy/${toy._id}`}><Button variant="success">View Details</Button></Link></td>
              </tr>

            </tbody>)
        }

      </Table>
    </Container>
  );
};

export default AllToys;