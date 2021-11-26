import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router';


const Booking = () => {
    const {serviceId} = useParams();
    const [details, setDetails] = useState([])
    const [singleDetail, setSingleDetail] = useState({})
    useEffect(() => {
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setDetails(data))
      }, []);

      useEffect(()=>{
          const seeDetails = details.find(detail => detail.id == serviceId);
          setSingleDetail(seeDetails);
          console.log(seeDetails);
      },[details])
        
    return (
        <div>
            <img src={singleDetail?.image} alt="" />
            <h1>{singleDetail?.name}</h1>
            <p>{singleDetail?.description}</p>
        </div>
    );
};

export default Booking;