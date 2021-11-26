import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Vet from '../Vet/Vet';

const Vets = () => {
    const [vets, setvets] = useState([]);

    useEffect(() => {
        fetch('./vets.json')
        .then(res => res.json())
        .then(data => setvets(data))

    }, []);
    return (
        <div>
            <h1>
                Our Vets
            </h1>
            <Row xs={1} md={3} className="g-4">
                {
                    vets.map(vet => <Vet
                    key={vet.id}
                    vet={vet}
                    >

                    </Vet>)
                }
            </Row>
        </div>
    );
};

export default Vets;