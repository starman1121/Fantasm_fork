import React, { Suspense } from 'react';
import AppRouter from './router'
//scss files
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <React.Fragment>
      <Suspense fallback={null}>
        <AppRouter />
      </Suspense>
    </React.Fragment>
  );
}

export default App;
