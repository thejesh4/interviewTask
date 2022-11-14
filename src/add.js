import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import {
  setTableItems,
  getTableItems,
  getID
} from './utils';
import {
  Navigate
} from 'react-router-dom';

function Add() {
  const [startDate, setStartDate] = useState('');
  const [sucessMess, setSuccessMess] = useState(false);
  const [inp, setInp] = useState({});
  const inputUpdate = (e) => {
    const inpVal = {
      ...inp,
      [e.target.name]: e.target.value
    }
    setInp(inpVal);
  }

  return (
    <div className='container'>
      {sucessMess && <div>Success fully added</div>}
      {sucessMess && <Navigate to='/home' replace={true} />}
      <form className='row'>
        <div className='col-4 offset-md-3'>
          <div className='form-group'>
            <input type='text' placeholder="first name" name="firstName" className='form-control' onChange={(e) => {inputUpdate(e)}} value={(inp && inp.firstName) || ''}/>
          </div>
          <div className='form-group'>
            <input type='text' placeholder="last name" name="lastName" className='form-control' onChange={(e) => {inputUpdate(e)}} value={(inp && inp.lastName) || ''}/>
          </div>
          <div className='form-group'>
            <DatePicker
              selected={startDate || ''}
              className='form-control'
              onChange={(date) => {
                  inputUpdate({ target: { name: 'DOB', value: date } });
                  setStartDate(date);
              }} name='DOB' />
          </div>
          <button type='button' 
            className='btn btn-primary'
            onClick={() => {
              const exitedData = getTableItems();
              const tableItem = (exitedData && exitedData.tableData) || [];
              const _inp = {
                id: getID(),
                  ...inp
              }
              tableItem.push(_inp);
              const data = {
                  tableData: tableItem
              }
              const setTableData = setTableItems(JSON.stringify(data));
              if (setTableData) {
                  setInp({});
                  setStartDate('');
                  setSuccessMess(true);
              }
            }
          }>add item</button>
        </div>
    </form>
  </div>
  );
}

export default Add;
