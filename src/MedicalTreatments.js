import react from 'react';
function MedicalTreatments(props){

  return (
    <div>
      <div>{props.treatId}</div>
      <div>Course ID: {props.treatCourseId}</div>
      <div>Type: {props.type}</div>
      <div>Catagory: {props.catagory}</div>
      <div>Name: {props.name}</div>
      <div>Start Date: {props.startDate}</div>
  
      
      </div>

  );
}
export default MedicalTreatments;