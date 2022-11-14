import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import {
  setTableItems,
  getTableItems
} from './utils';
import {
  Navigate,
  useParams
} from 'react-router-dom';

function Edit() {
  const [inp, setInp] = useState({});
  const [startDate, setStartDate] = useState('');
  const [sucessMess, setSuccessMess] = useState(false);
  const { id } = useParams();

  useEffect(() => {
      let getData = getTableItems();
      getData = getData.tableData.filter((item) => item.id == id);
      setInp(...getData);
  }, []);

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
                className='form-control'
                selected={startDate || (inp && inp.DOB && new Date(inp.DOB)) || ''}
                onChange={(date) => {
                    inputUpdate({ target: { name: 'DOB', value: date } });
                    setStartDate(date);
                }} name='DOB' />
            </div>
            <button type='button' 
              className='btn btn-primary'
              onClick={() => {
                const exitedData = getTableItems();
                const tableItem = (exitedData && exitedData.tableData && exitedData.tableData.length) ? exitedData.tableData.map((el) => {
                    if (el.id == id) {
                        el.firstName = inp.firstName,
                        el.lastName = inp.lastName,
                        el.DOB = inp.DOB
                    }
                  return el;
                }) : [];
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
              }>Edit item</button>
          </div>
      </form>
    </div>
  );
}

export default Edit;
