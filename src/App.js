import React, { useState, useEffect } from 'react';
import FormData from './components/FormData';
import FormPresupuesto from './components/FormPresupuesto';
import List from './components/List';
import Presupuesto from './components/Presupuesto';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // State
  const [presupuesto, savePresupuesto] = useState(0);
  const [restante, saveRestante] = useState(0);
  const [showForm, updateForm] = useState(true);
  const [gastos, saveGastos] = useState([]);
  const [gasto, saveGasto] = useState({});
  const [addGasto, addSaveGasto] = useState(false);

  //UseEffect que actualiza el restante
  useEffect(() => {
    if (addGasto) {
      // Agrega el nuevo presupuesto
      saveGastos([...gastos, gasto]);

      // Resta del presupuesto actual
      const presupuestoRestante = restante - gasto.qty;
      saveRestante(presupuestoRestante);

      // Resetear false
      addSaveGasto(false);
    }
  }, [gasto, addGasto, gastos, restante]);

  return (
    <div className='container'>
      <header>
        <h1>Presupuesto</h1>
      </header>
      <div className='contenido-principal contenido'>
        {showForm ? (
          <FormData
            savePresupuesto={savePresupuesto}
            saveRestante={saveRestante}
            updateForm={updateForm}
          />
        ) : (
          <div className='row d-flex flex-wrap'>
            <div className='row col-md-6 col-12'>
              <FormPresupuesto
                saveGasto={saveGasto}
                addSaveGasto={addSaveGasto}
              />
            </div>
            <div className='col-md-6 col-12'>
              <List gastos={gastos} />
              <Presupuesto presupuesto={presupuesto} restante={restante} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
