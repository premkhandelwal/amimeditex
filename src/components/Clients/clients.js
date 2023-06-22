import React from 'react';
import './Clients.css';

import tata from '../../assets/images/tata.png';
import mahindra from '../../assets/images/mahindra.png';
import bajaj from '../../assets/images/bajaj.png';
import honda from '../../assets/images/honda.png';
import mahindra2wheeler from '../../assets/images/mahindra2wheelers.png';
import force from '../../assets/images/force.png';
import eicher from '../../assets/images/eicher.png';
import atul from '../../assets/images/atul.png';
import premier from '../../assets/images/premier.png';
import jcb from '../../assets/images/jcb.png';
import suzuki from '../../assets/images/suzuki.png';

function OurClients() {
  const clients = [
    {
      id: 1,
      name: 'TATA MOTORS LTD.- PUNE & RUDRAPUR',
      logo: tata,
    },
    {
      id: 2,
      name: 'MAHINDRA & MAHINDRA – ALL PLANTS',
      logo: mahindra,
    },
    {
      id: 3,
      name: 'BAJAJ AUTO - ALL PLANTS',
      logo: bajaj,
    },
    {
      id: 4,
      name: 'HONDA MOTERCYCLE AND SCOOTERS',
      logo: honda,
    },
    {
      id: 5,
      name: 'MAHINDRA TWO WHEELER',
      logo: mahindra2wheeler,
    },
    {
      id: 6,
      name: 'FORCE MOTORS - ALL PLANTS',
      logo: force,
    },
    {
      id: 7,
      name: 'EICHER / VE COMMERCIAL VEHICLE',
      logo: eicher,
    },
    {
      id: 8,
      name: 'ATUL AUTO',
      logo: atul,
    },
    {
      id: 9,
      name: 'PREMIER',
      logo: premier,
    },
    {
      id: 10,
      name: 'JCB',
      logo: jcb,
    },
    {
      id: 11,
      name: 'SUZUKI (PARTS SUPPLY)',
      logo: suzuki,
    },
    // Add more clients as needed
  ];

  return (
    <div className="our-clients">
      <h2>Our Clients</h2>
      <div className="client-grid">
        {clients.map((client) => (
          <div key={client.id} className="client-item">
            <img src={client.logo} alt={client.name} className="client-logo" />
            <p className="client-name">{client.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurClients;
