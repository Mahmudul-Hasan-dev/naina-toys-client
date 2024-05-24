import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { AuthContext } from '../../../providers/AuthProviders';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const MyToys = () => {
  useTitle('mytoys')
  const { user } = useContext(AuthContext)
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch(`https://naina-toys-server.vercel.app/my-toys?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setToys(data));
  }, [])

  const handleDelete = _id => {
    const messeage = confirm('Are You sure you want to delete');
    if (messeage) {
      fetch(`https://naina-toys-server.vercel.app/toy/${_id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert('deleted successful');
            const remaining = toys.filter(toy => toy._id !== _id);
            setToys(remaining);
          }
        })
    }
  }

  return (
    <Container className='my-5'>
      <Table bordered hover>
        <thead className='table-warning text-center'>
          <tr>
            <th>Picture</th>
            <th> Name</th>
            <th>Sub-category</th>
            <th> Price</th>
            <th> Available quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        {
          toys.map(toy =>
            <tbody key={toy._id}>
              <tr>
                <td><img src={toy.picture} alt="" width={100} /></td>
                <td>{toy.toy_name}</td>
                <td>{toy.sub_category}</td>
                <td>{toy.price}</td>
                <td>{toy.available_quantity}</td>
                <td>
                  <Link to={`/update-toy/${toy._id}`}><Button variant='warning'>Update</Button></Link> {'  '}
                  <Link><Button onClick={() => handleDelete(toy._id)} variant='danger'>Delete</Button></Link>
                </td>
              </tr>

            </tbody>)
        }

      </Table>
    </Container>
  );
};

export default MyToys;