//import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 

function ReportForm() {
    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3000/items")
    .then((response)=>{
      setProducts(response.data);
      setAllProducts(response.data);
    })
  },[])

  const [startDate,setStartDate]= useState(new Date());
  const [endDate,setEndDate]= useState(new Date());

 
  const handleSelect = (date) =>{
    let filtered = allProducts.filter((product)=>{
        let productDate = new Date(product["setDate"]);
        return(productDate>= date.selection.startDate &&
        productDate<= date.selection.endDate);
        })
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate); 
    setProducts(filtered);
  };

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  }
  
  return (
    <div className="App">
      <header className="App-header">
      <header id="page-Header">Expenses Tracker</header>
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect}/>
    
        <table>
          <thead id="table">
            <tr>
              <th className="use-inline date header-color">ID</th>
              <th className="use-inline date header-color">Payee Name</th>
              <th className="use-inline date header-color">Product</th>
              <th className="use-inline price header-color">Price</th>
              <th className="use-inline date header-color">Date</th>
            </tr>
          </thead>
          <tbody>
          {products.map((product)=>{
            let date = new Date(product["setDate"])
            return(
                <tr>
                <td className="use-inline date">{product["id"]}</td>
                <td className="use-inline date">{product["product"]}</td>
                <td className="use-inline date">{product["price"]}</td>
                <td className="use-inline date">{product["payeeName"]}</td>
                <td className="use-inline date">{date.toLocaleDateString()}</td>
                </tr>
                );
            })}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default ReportForm;