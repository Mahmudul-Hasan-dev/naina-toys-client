import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const UpdateToy = () => {
    useTitle('updatetoy')
    const toy = useLoaderData();
    const { _id, toy_name, price, available_quantity, description } = toy

    const handleUpdateToy = event => {
        event.preventDefault();

        const form = event.target;


        const price = form.price.value;

        const available_quantity = form.available_quantity.value;
        const description = form.description.value;


        const updatedToy = { price, available_quantity, description }


        console.log(updatedToy);

        // send data to the server
        fetch(`https://naina-toys-server.vercel.app/toy/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('Toy Updated Successfully')

                }
            })
    }




    return (
        <Container className='w-75 my-5 mx-auto  px-5 py-4  ' style={{ backgroundColor: '#ffd0d7' }}>
            <h1 className='text-center  '>Update Your Toy</h1>
            <Form onSubmit={handleUpdateToy} className='px-3 pt-3' >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold fs-4'>Toy Name :</Form.Label>
                    <Form.Control type="text" defaultValue={toy_name} name='toy_name' placeholder="Toy Name" disabled />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold fs-4'>Price :</Form.Label>
                    <Form.Control type="number" defaultValue={price} name='price' placeholder="Price" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold fs-4'>Available quantity:</Form.Label>
                    <Form.Control type="number" defaultValue={available_quantity} name='available_quantity' placeholder="Quantity" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold fs-4'>Detail description :</Form.Label>
                    <Form.Control type="text" defaultValue={description} name='description' placeholder="Description" required />
                </Form.Group>

                <div className="d-grid mt-4">
                    <Button className='mb-4' variant="dark" type="submit">
                        Update Toy
                    </Button>
                </div>

            </Form>
        </Container>

    );
};

export default UpdateToy;