import React from 'react';
import Services from '../components/Services';

export default function ServicesPage({ onSelectVehicle }) {
  return (
    <>
      <Services onSelectVehicle={onSelectVehicle} />
    </>
  );
}
