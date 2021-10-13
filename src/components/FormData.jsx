import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Error from './Error';

const FormData = ({ savePresupuesto, saveRestante, updateForm }) => {
  // State
  const [qty, saveQty] = useState(0);
  const [error, saveError] = useState(false);

  // Función para capturar el presupuesto
  const handleChange = (e) => {
    saveQty(parseInt(e.target.value, 10));
  };

  // Submit para definir el presupuesto
  const addPresupuesto = (e) => {
    e.preventDefault();

    // Validar
    if (qty < 1 || isNaN(qty)) {
      saveError(true);
      return;
    }
    saveError(false);
    savePresupuesto(qty);
    saveRestante(qty);
    updateForm(false);
  };

  return (
    <>
      <h2>Coloca tu Presupuesto</h2>
      {error ? <Error message='El Presupuesto es Incorrecto' /> : null}
      <Form onSubmit={addPresupuesto}>
        <Form.Group className='mb-3'>
          <Form.Control
            type='number'
            name='qty'
            placeholder='Coloca tu presupesto'
            onChange={handleChange}
          />
        </Form.Group>

        <Button className='btn btn-primary ' type='submit'>
          Enviar presupuesto
        </Button>
      </Form>
    </>
  );
};

FormData.propTypes = {
  savePresupuesto: PropTypes.func.isRequired,
  saveRestante: PropTypes.func.isRequired,
  updateForm: PropTypes.func.isRequired,
};

export default FormData;
