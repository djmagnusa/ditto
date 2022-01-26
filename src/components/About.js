import React, {useState} from 'react';
import { Form, Button, Input } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const About = () => {


  const [user, setUser] = useState({
            name: ""
  });

  const [selectedDate, setSelectedDate] = useState(null);
        
  let name, value;
    
  const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
    
        setUser({...user, [name]: value})
  }
  return (
    <div className="container">
        <Form>
            <Form.Field className="form-group">
                <label>Gender</label>
                <div className="button-container">
                    <button className="ui inverted blue button my-button"><span className="icon"><i className="fa fa-mars"></i>&nbsp;&nbsp;Male</span></button>
                    <button className="ui inverted blue button my-button"><span className="icon"><i className="fa fa-venus"></i>&nbsp;&nbsp;Female</span></button>
                    <button className="ui inverted blue button my-button"><span className="icon"><i className="fa fa-transgender"></i>&nbsp;&nbsp;Others</span></button>
                </div>
                
            </Form.Field>
            <Form.Field className="form-group">
                <label>Enter full name</label>
                <input 
                    name="name"
                    value={user.name}
                    onChange={handleInputs}
                    className="input"
                    autocomplete="off"
                />
            </Form.Field>

            <Form.Field className="form-group">
                <label>Date of birth (DD/MM/YYY)</label>
                
                <DatePicker
                    selected={selectedDate}
                    onChange={date => setSelectedDate(date)}
                />
            </Form.Field> 

            <Form.Field className="form-group">
                <label>Did you smoke in last 12 months?</label>
                <div className="button-container">
                    <button className="ui inverted primary button my-button2">Yes</button>
                    <button className="ui inverted primary button my-button2">No</button>
                </div>
            </Form.Field> 
            
            <Button primary className="block">Next</Button>
            
        </Form>
    </div>
  );
};

export default About;
