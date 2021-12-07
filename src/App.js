
import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from './App';
import MedicalTreatments from './MedicalTreatments';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

const App = ()=> {
  const medical_treatments_list = [{Id: '1342', treatCourseId: 'ACL45TG',type: 'Knee Surgery', catagory: 'Key hole', name: 'simon ball', startDate: '06/09/2021'}];

  return (
    <div>
      <MedicalTreatments
       treatId = {medical_treatments_list.Id}
       treatCourseID = {medical_treatments_list.treatCourseId}
       type = {medical_treatments_list.type}
       catagory = {medical_treatments_list.catagory}
       name = {medical_treatments_list.name}
       startDate = {medical_treatments_list.startDate}

      ></MedicalTreatments>;
  
    </div>
   );

};
export default App;