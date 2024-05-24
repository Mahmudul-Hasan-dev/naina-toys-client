import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import useTitle from '../../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <Container className='mb-5'>
            <h1 className='py-3'>Blog Page</h1>
            <ListGroup variant="flush" as="ol" numbered >
                <ListGroup.Item variant="primary">
                    <span className='fw-bold'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</span>
                    <p>
                        <span className='fw-bold'>Ans: </span>
                        Access tokens are temporary credentials that grant access to a protected resource, while refresh tokens are used to obtain new access tokens once the current ones expire.Access token use: The access token is used for accessing protected resources until it expires. Access token expiry: Upon expiration, the client will use the refresh token to obtain a new access token.we cannot store them in local storage.so we need to store them in cookies.
                    </p>
                    </ListGroup.Item>
                <ListGroup.Item variant="info">
                    <span className='fw-bold'>Compare SQL and NoSQL databases?</span>
                    <p>
                    <span className='fw-bold'>Ans: </span>
                        SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                    </p>
                </ListGroup.Item>
                <ListGroup.Item variant="primary">
                    <span className='fw-bold'>What is express js? What is Nest JS?</span>
                    <p>
                     <span className='fw-bold'>Ans: </span>
                     ExpressJS: ExpressJS is unopinionated, providing developers with the freedom to implement code according to their specific needs. It lacks a set of pre-defined rules, allowing for multiple possibilities in coding approaches. NestJS: In contrast, NestJS is opinionated, adhering to SOLID Principles.

                    </p>
                </ListGroup.Item>
                <ListGroup.Item variant="info">
                    <span className='fw-bold'>What is MongoDB aggregate and how does it work?</span>
                    <p>
                    <span className='fw-bold'>Ans: </span>
                    Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
                    </p>
                </ListGroup.Item>
            </ListGroup>
        </Container>
    );
};

export default Blog;