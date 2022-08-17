import React, {useState} from "react";
import body from './body.css'


function Body() {

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  // const [submitted , setSubmitted] = useState(false);

  const add = (e) =>{
    e.preventDefault();
    if(values.firstName === "" ||  values.lastName === "" ||  values.email === "") {
      alert('all are mandatory');
      return;
    }
    else{
      if(values.firstName !== "" ||  values.lastName !== "" ||  values.email !== "")
      // alert('Sucssesfully submitted');
      console.log('values are ', values);
      return;
    }
  }

  return (
    <div className="borders">
      <form onSubmit={add}>
        {/* {submitted ? <div>SUCCSESSFULLY SUBMITTED</div> : null} */}
        
        <div>
          <input
            type="text"
            id="fname"
            placeholder="FirstName"
            value={values.firstName}
            onChange={(e) =>
              setValues({ ...values, firstName: e.target.value })
            }
          />
          {/* {submitted && !values.firstName ? <span>please enter firstName</span> : null} */}
        </div>
        <div>
          <input
            type="text"
            id="lname"
            placeholder="LastName"
            value={values.lastName}
            onChange={(e) => setValues({ ...values, lastName: e.target.value })}
          />
          {/* <div> {submitted && !values.firstName ? <span>please enter LastName</span> : null}</div> */}
        </div>
        <div>
          <input
            type="text"
            id="lname"
            placeholder="Email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          {/* <div> {submitted && !values.firstName ? <span>please enter your Email</span> : null}</div> */}
        </div>
        <div>
          <button>submit</button>
        </div>
      </form>

      <div>
        <span>{values.firstName}</span><br/>
        <span>{values.lastName}</span><br/>
        <span>{values.email}</span>
      </div>
    </div>
  );
}

export default Body;
