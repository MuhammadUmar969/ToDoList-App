import React, { useState } from "react";

const App = () => {
  const [fullName,setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    mobNo: ""
  });
 
  const inputChange = (event) => {
  //console.log(event.target.value);
  //console.log(event.target.name);

  // const value = event.target.value;
  // const name = event.target.name;
 
  //object destructuring
  const { value, name } = event.target;

  setFullName( (preValue) => {

    return{
     ...preValue,
     [name] : value,
    };

    // if(name === "fName"){
    // return{
    // fname: value,
    // lname: preValue.lname,
    // emailShow: preValue.emailShow,
    // mobNo: preValue.mobNo,
    // };
    // }else  if(name === "lName"){
    //   return{
    //   fname: preValue.fname,
    //   lname: value,
    //   emailShow: preValue.emailShow,
    //   mobNo: preValue.mobNo,
    //   };  
    // }else  if(name === "email"){
    //   return{
    //   fname: preValue.fname,
    //   lname:preValue.lname,
    //   emailShow: value,
    //   mobNo: preValue.mobNo,
    //   };  
    // }else  if(name === "mob"){
    //   return{
    //   fname: preValue.fname,
    //   lname:preValue.lname,
    //   emailShow: preValue.emailShow,
    //   mobNo: value,
    //   };  
    // }

  })
  };
  
 
  const onSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted");
  };

  return(
   <>
   <div>
   <form onSubmit={onSubmit}>
    <div>
      <h1>Hello {fullName.fname} {fullName.lname} </h1>
       <p>{fullName.email}</p>
       <p>{fullName.mobNo}</p>

      <input  name="fname" type="text" placeholder="Enter Your First Name" onChange={inputChange} value={fullName.fname} />
      <br />
      <input name="lname" type="text" placeholder="Enter Your Last Name " onChange={inputChange} value={fullName.lname} />
      <br />
      <input name="email" type="email" placeholder="Enter Your Email " onChange={inputChange} value={fullName.email} />
      <br />
      <input name="mobNo" type="number" placeholder="Enter Your Mobile Number " onChange={inputChange} value={fullName.mobNo} />
      <button type="submit">Click Me 👍</button>
    </div>
    </form>
    </div>
   </>
  );
}

export default App;