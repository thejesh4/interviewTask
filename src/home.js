import React, { useEffect, useState } from "react";
import {
  Link,
  Navigate
} from 'react-router-dom';
import {
  getTableItems,
  setTableItems,
  getAge
} from './utils';

function Home(){
  const [tableData, setTableData] = useState([]);
  const [nav, setNav] = useState(false);
  const [paramID, setParamsID] = useState('');
  
  useEffect(() => {
      const data = getTableItems();
      if (Object.values(data) && Object.values(data).length) {
          setTableData(data.tableData);
      } 
  }, []);

  const deleteItem = (id) => {
      const exitedData = getTableItems();
      const finalItem = exitedData.tableData.filter((item) => item.id !== id);
      setTableData(finalItem);
      const data = {
          tableData: finalItem
      }
      setTableItems(JSON.stringify(data));
  }

  const edit = (id) => {
      setNav(true);
      setParamsID(id);
  }

  const getrows = () => {
    return tableData && tableData.length ? tableData.map((item) => {
      return (
        <tr key={item.id}>
          <td>
              {item.id}
          </td>
          <td>
              {item.firstName}
          </td>
          <td>
              {item.lastName}
          </td>
          <td>
              {getAge(item.DOB)}
          </td>
          <td>
              <button type="button" onClick={() => {
                  edit(item.id);
              }} className="btn btn-warning"> edit</button>
              <button type="button" onClick={() => {
                  deleteItem(item.id);
              }} className="btn btn-danger">delete</button>
          </td>
        </tr>
      );
    }) : null
  }

  return (
      <div className="container">
          {nav ? <Navigate to={`/edit/${paramID}`} replace={true} /> : null}
          <div className="row">
              <div className="col-lg-12">
                <Link to='/add' className="btn btn-primary">Add</Link>
              </div>
              <div className="col-lg-12">
                <table className="table table-bordered">
                  <thead>
                      <th>
                          id
                      </th>
                      <th>
                          First Name
                      </th>
                      <th>
                          Last Name
                      </th>
                      <th>
                          Age
                      </th>
                      <th>

                      </th>
                  </thead>
                  <tbody>
                    {getrows()}
                  </tbody>
                </table>
              </div>
          </div>
      </div>
  );
}

export default Home;
