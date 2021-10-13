import React from 'react';
import { verifyPresupuesto } from '../Helpers';
import PropTypes from 'prop-types';

const Presupuesto = ({ presupuesto, restante }) => {
  return (
    <>
      <div className='alert alert-primary'>Presupuesto:${presupuesto}</div>
      <div className={verifyPresupuesto(presupuesto, restante)}>
        Restante:${restante}
      </div>
    </>
  );
};
Presupuesto.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired,
};
export default Presupuesto;
