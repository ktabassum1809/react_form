import { useState } from 'react'
import './App.css'
import Form from './components/Form';

function App() {
 
  const [data, setData] = useState({
    name: '',
    phone: '',
    type: '',
    email: '',
    code: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(!submitted);
    alert('Thank you for submitting the form');
  }

  return (
    <div>
   {
   (submitted) ? (<p>Thank you for submitting the form</p>) :
   
     <Form data={data} handleChange={handleChange} handleSubmit={handleSubmit} /> 
   }
    </div>
  );
}

export default App
