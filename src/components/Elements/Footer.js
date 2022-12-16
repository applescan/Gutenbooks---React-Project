import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3 text-light' style={{ backgroundColor: '#E54F6D' }}>
        &copy;{new Date().getFullYear()} Copyright: Gutenbooks.com
      </div>
    </MDBFooter>
  );
}