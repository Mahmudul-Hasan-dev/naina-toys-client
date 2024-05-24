import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { AuthContext } from '../../../providers/AuthProviders';

const AddToy = () => {
    const { user } = useContext(AuthContext);
    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;

        const toy_name = form.toy_name.value;
        const sub_category = form.sub_category.value;
        const picture = form.picture.value;
        const seller_name = form.seller_name.value;
        const seller_email = form.seller_email.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const available_quantity = form.available_quantity.value;
        const description = form.description.value;


        const newToy = { toy_name, sub_category, picture, seller_name, seller_email, price, rating, available_quantity, description }

        console.log(newToy);

        // send data to the server
        fetch('https://naina-toys-server.vercel.app/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Toy added successfully')
                }
            })
    }
    return (
        <Container className='w-50 my-5 mx-auto  px-5 py-4 bg-light'>
            <h1 className='text-center text-primary fst-italic '>Add a Toy</h1>
            <Form onSubmit={handleAddToy} className='px-3 pt-3' >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold fs-4'>Toy Name :</Form.Label>
                    <Form.Control type="text" name='toy_name' placeholder="Toy Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold fs-4'>Sub-category :</Form.Label>
                    <Form.Control type="text" name='sub_category' placeholder="Sub-category" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold fs-4'>Picture  URL :</Form.Label>
                    <Form.Control type="text" name='picture' placeholder="Photo URL" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold fs-4'>Seller Name :</Form.Label>
                    <Form.Control type="text" defaultValue={user?.displayName} name='seller_name' placeholder="Seller Name" required />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label className='fw-bold fs-4'>Seller Email </Form.Label>
                    <Form.Control type="email" name="seller_email" defaultValue={user?.email} placeholder="Enter email" />
                </Form.Group>



                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold fs-4'>Price :</Form.Label>
                    <Form.Control type="number" name='price' placeholder="Price" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold fs-4'>Rating :</Form.Label>
                    <Form.Control type="number" name='rating' placeholder="Rating" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold fs-4'>Available quantity:</Form.Label>
                    <Form.Control type="number" name='available_quantity' placeholder="Quantity" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold fs-4'>Detail description :</Form.Label>
                    <Form.Control type="text" name='description' placeholder="Description" required />
                </Form.Group>

                <div className="d-grid mt-4">
                    <Button className='mb-4' variant="primary" type="submit">
                        Add a Toy
                    </Button>
                </div>
                <br />

            </Form>




            <br />
            <Form.Text className="text-danger">
                {/* {error} */}
            </Form.Text>


        </Container>
    );
};

export default AddToy;