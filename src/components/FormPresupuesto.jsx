import React, { useState } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import Error from './Error';

const FormPresupuesto = ({ saveGasto, addSaveGasto }) => {
  const [name, saveName] = useState('');
  const [qty, saveQty] = useState(0);
  const [error, saveError] = useState(false);

  // Función cuando el usuario agrega un gasto
  const addGasto = (e) => {
    e.preventDefault();

    // Validar
    if (qty < 1 || isNaN(qty) || name.trim() === '') {
      saveError(true);
      return;
    }
    saveError(false);
    // Construir gasto
    const gasto = {
      name,
      qty,
      id: shortid.generate(),
    };

    // Pasar el gasto al componente principal
    saveGasto(gasto);
    addSaveGasto(true);

    // Reset
    saveName('');
    saveQty(0);
  };
  return (
    <>
      <h2>Agrega tus gastos</h2>
      {error ? (
        <Error message='Debe Llenar Todos los Campos y/o Presupuesto Incorrecto' />
      ) : null}
      <Form onSubmit={addGasto}>
        <Form.Group className='mb-3'>
          <Form.Control
            type='text'
            // name='name'
            placeholder='Ej.Transporte'
            value={name}
            onChange={(e) => saveName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control
            type='number'
            name='qty'
            placeholder='Ej.300'
            value={qty}
            onChange={(e) => saveQty(parseInt(e.target.value, 10))}
          />
        </Form.Group>

        <Button
          className='btn btn-primary '
          type='submit'
          value={'Agregar gasto'}
        >
          Agregar Gasto
        </Button>
      </Form>
    </>
  );
};
FormPresupuesto.propTypes = {
  saveGasto: PropTypes.func.isRequired,
  addSaveGasto: PropTypes.func.isRequired,
};
export default FormPresupuesto;
