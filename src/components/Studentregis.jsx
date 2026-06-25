import React from 'react'
import{useState} from "react"

const Studentregis = () => {
    const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [cpass, setcpass] = useState('');
  const [age, setage] = useState('');
  const [mobile, setmobile] = useState('');
  const [course, setcourse] = useState('');
  const [skills, setskills] = useState([]);
  const [address, setaddress] = useState('');
  const [terms, setterms] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        if(fname === "" || fname.includes(Number) || fname.length<3){
            alert("fname required")
        }
        // if (email === ""){
        //     alert("email required")
        // }
        // if (password === ""){
        //     alert("password required")
        // }
    }
    

  return (
    <div>
        <h1>Student Registrartion</h1>
        <form>
            <input type = "text" placeholder="enter ur first name" value={fname} onChange={(e)=>setfname(e.target.value)}/>
            <br/>
            <input type = "text" placeholder="enter ur last name" value={lname} onChange={(e)=>setlname(e.target.value)}/>
            <br/><br/>
            <input type = "email" placeholder="enter ur email" value={email} onChange={(e)=>setemail(e.target.value)}/>
            <br/><br/>
            <input type = "password" placeholder="enter ur password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
            <br/>
            <input type = "password" placeholder="enter ur password again" value={cpass} onChange={(e)=>setcpass(e.target.value)}/>
            <br/><br/>
            <input type = "number" placeholder="enter ur age" value={age} onChange={(e)=>setage(e.target.value)}/>
            <br/><br/>
            <input type = "number" placeholder="enter ur mobile number" value={mobile} onChange={(e)=>setmobile(e.target.value)}/>
            <br/><br/>

            <h4 style={{margin:0}}>Select Gender</h4>
            <input type="radio" name="gender" value="male" />
            <label>Male</label>
            <input type="radio" name="gender" value="female" />
            <label>Female</label>
            <input type="radio" name="gender" value="other" />
            <label>Other</label>

            <br/><br/>
            
            <h4 style={{margin:0}}>Select Course</h4>
            <select>
                 <option value="" disabled selected>Select Course</option>
                 <option value="course1">React</option>
                 <option value="course2">Node</option>
                 <option value="course3">Mern</option>
                 <option value="course3">Java </option>
            </select>

            <br/><br/>

            <h4 style={{margin:0}}>Select Skills</h4>
            <input type="checkbox" /> <label>HTML</label>
            <input type="checkbox" /> <label>CSS</label>
            <input type="checkbox" /> <label>JavaScript</label>
            <input type="checkbox" /> <label>React</label>

            <br/><br/>

            <input type = "text" placeholder="enter ur address" value={address} onChange={(e)=>setaddress(e.target.value)}/>
            <br/><br/>
            <input type="checkbox" /> <label>I agree to the terms and conditions</label>
            <br/>
            <button onClick={handleSubmit}>Submit</button>
        </form>
        <hr/>
    </div>

  )
}

export default Studentregis