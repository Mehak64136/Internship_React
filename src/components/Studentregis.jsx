import React from 'react';
import { useState } from "react";

const Studentregis = () => {
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [cpass, setcpass] = useState('');
  const [age, setage] = useState('');
  const [mobile, setmobile] = useState('');
  const [gender, setgender] = useState('');
  const [course, setcourse] = useState('');
  const [skills, setskills] = useState([]);
  const [address, setaddress] = useState('');
  const [terms, setterms] = useState(false);

  const [errors, setErrors] = useState({});

  const isOnlyAlphabets = (str) => {
    if (str === "") return false;
    for (let i = 0; i < str.length; i++) {
      const char = str[i].toLowerCase();
      if (char < 'a' || char > 'z') {
        return false; 
      }
    }
    return true;
  };

  const isOnlyNumbers = (str) => {
    if (str === "") return false;
    for (let i = 0; i < str.length; i++) {
      if (str[i] < '0' || str[i] > '9') {
        return false;
      }
    }
    return true;
  };

  const handleSkillChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setskills([...skills, value]);
    } else {
      setskills(skills.filter((skill) => skill !== value));
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    let validationErrors = {};

    if (!fname) {
      validationErrors.fname = "First name is required.";
    } else if (fname.length < 3) {
      validationErrors.fname = "Minimum 3 characters required.";
    } else if (!isOnlyAlphabets(fname)) {
      validationErrors.fname = "Only alphabets are allowed.";
    }

    if (!lname) {
      validationErrors.lname = "Last name is required.";
    } else if (lname.length < 2) {
      validationErrors.lname = "Minimum 2 characters required.";
    } else if (!isOnlyAlphabets(lname)) {
      validationErrors.lname = "Numbers or special characters are not allowed.";
    }

    if (!email) {
      validationErrors.email = "Email is required.";
    } else {
      const hasAt = email.includes("@");
      const endsWithCom = email.endsWith(".com");
      const endsWithIn = email.endsWith(".in");
      if (!hasAt || (!endsWithCom && !endsWithIn)) {
        validationErrors.email = "Must contain @ and end with .com or .in.";
      }
    }

    if (!password) {
      validationErrors.password = "Password is required.";
    } else if (password.length < 8) {
      validationErrors.password = "Minimum 8 characters required.";
    } else {
      let hasUppercase = false;
      let hasLowercase = false;
      let hasNumber = false;
      let hasSpecial = false;
      const specialCharacters = "!@#$%^&*()_+-=[]{}|;':\",./<>?";

      for (let i = 0; i < password.length; i++) {
        const char = password[i];
        if (char >= 'A' && char <= 'Z') hasUppercase = true;
        else if (char >= 'a' && char <= 'z') hasLowercase = true;
        else if (char >= '0' && char <= '9') hasNumber = true;
        else if (specialCharacters.includes(char)) hasSpecial = true;
      }

      if (!hasUppercase || !hasLowercase || !hasNumber || !hasSpecial) {
        validationErrors.password = "Must include 1 uppercase, 1 lowercase, 1 number, and 1 special character.";
      }
    }

    if (!cpass) {
      validationErrors.cpass = "Confirm password is required.";
    } else if (cpass.includes(" ")) {
      validationErrors.cpass = "Spaces are not allowed.";
    } else if (password !== cpass) {
      validationErrors.cpass = "Passwords do not match.";
    }

    const ageNum = Number(age);
    if (!age) {
      validationErrors.age = "Age is required.";
    } else if (isNaN(ageNum) || ageNum <= 18 || ageNum >= 60) {
      validationErrors.age = "Age must be greater than 18 and less than 60.";
    }

    if (!mobile) {
      validationErrors.mobile = "Mobile number is required.";
    } else if (mobile.length !== 10) {
      validationErrors.mobile = "Must be exactly 10 digits.";
    } else if (!isOnlyNumbers(mobile)) {
      validationErrors.mobile = "Only numbers are allowed.";
    } else {
      const firstDigit = mobile[0];
      if (firstDigit !== '6' && firstDigit !== '7' && firstDigit !== '8' && firstDigit !== '9') {
        validationErrors.mobile = "Must start with 6, 7, 8, or 9.";
      }
    }

    if (!gender) {
      validationErrors.gender = "Please select your gender.";
    }

    const validCourses = ["course1", "course2", "course3", "course4"];
    if (!course || !validCourses.includes(course)) {
      validationErrors.course = "Selecting a course is compulsory.";
    }

    if (skills.length === 0) {
      validationErrors.skills = "Skills cannot be empty.";
    } else if (skills.length < 2 || skills.length > 4) {
      validationErrors.skills = "Please select between 2 and 4 skills.";
    }

    if (!address) {
      validationErrors.address = "Address is required.";
    } else if (address.length < 20 || address.length > 150) {
      validationErrors.address = "Address must be between 20 and 150 characters.";
    }

    if (!terms) {
      validationErrors.terms = "You must agree to the terms and conditions.";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Registration Successful!");
    }
  }

  const errorStyle = { color: 'red', fontSize: '13px', display: 'block', marginTop: 0, marginBottom: 0 };

  return (
    <div>
      <h1>Student Registration</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="enter ur first name" value={fname} onChange={(e) => setfname(e.target.value)} />
        {errors.fname && <span style={errorStyle}>{errors.fname}</span>}
        <br />
        
        <input type="text" placeholder="enter ur last name" value={lname} onChange={(e) => setlname(e.target.value)} />
        {errors.lname && <span style={errorStyle}>{errors.lname}</span>}
        <br /><br />
        
        <input type="email" placeholder="enter ur email" value={email} onChange={(e) => setemail(e.target.value)} />
        {errors.email && <span style={errorStyle}>{errors.email}</span>}
        <br /><br />
        
        <input type="password" placeholder="enter ur password" value={password} onChange={(e) => setpassword(e.target.value)} />
        {errors.password && <span style={errorStyle}>{errors.password}</span>}
        <br />
        
        <input type="password" placeholder="enter ur password again" value={cpass} onChange={(e) => setcpass(e.target.value)} />
        {errors.cpass && <span style={errorStyle}>{errors.cpass}</span>}
        <br /><br />
        
        <input type="number" placeholder="enter ur age" value={age} onChange={(e) => setage(e.target.value)} />
        {errors.age && <span style={errorStyle}>{errors.age}</span>}
        <br /><br />
        
        <input type="text" placeholder="enter ur mobile number" value={mobile} onChange={(e) => setmobile(e.target.value)} />
        {errors.mobile && <span style={errorStyle}>{errors.mobile}</span>}
        <br /><br />

        <h4 style={{ margin: 0 }}>Select Gender</h4>
        <input type="radio" name="gender" value="male" checked={gender === "male"} onChange={(e) => setgender(e.target.value)} />
        <label>Male</label>
        <input type="radio" name="gender" value="female" checked={gender === "female"} onChange={(e) => setgender(e.target.value)} />
        <label>Female</label>
        <input type="radio" name="gender" value="other" checked={gender === "other"} onChange={(e) => setgender(e.target.value)} />
        <label>Other</label>
        {errors.gender && <span style={errorStyle}>{errors.gender}</span>}
        <br /><br />
        
        <h4 style={{ margin: 0 }}>Select Course</h4>
        <select value={course} onChange={(e) => setcourse(e.target.value)}>
          <option value="" disabled>Select Course</option>
          <option value="course1">React</option>
          <option value="course2">Node</option>
          <option value="course3">Mern</option>
          <option value="course4">Java </option>
        </select>
        {errors.course && <span style={errorStyle}>{errors.course}</span>}
        <br /><br />

        <h4 style={{ margin: 0 }}>Select Skills</h4>
        <input type="checkbox" value="HTML" checked={skills.includes("HTML")} onChange={handleSkillChange} /> <label>HTML</label>
        <input type="checkbox" value="CSS" checked={skills.includes("CSS")} onChange={handleSkillChange} /> <label>CSS</label>
        <input type="checkbox" value="JavaScript" checked={skills.includes("JavaScript")} onChange={handleSkillChange} /> <label>JavaScript</label>
        <input type="checkbox" value="React" checked={skills.includes("React")} onChange={handleSkillChange} /> <label>React</label>
        {errors.skills && <span style={errorStyle}>{errors.skills}</span>}
        <br /><br />

        <input type="text" placeholder="enter ur address" value={address} onChange={(e) => setaddress(e.target.value)} />
        {errors.address && <span style={errorStyle}>{errors.address}</span>}
        <br /><br />
        <input
  type="checkbox"
  checked={terms}
  onChange={(e) => setterms(e.target.checked)}
/>
<label> I agree to the terms and conditions</label>

{errors.terms && (
  <p style={{ color: "red" }}>{errors.terms}</p>
)}

<br />

<button onClick={handleSubmit}>Submit</button>

</form>
<hr/>
</div>
);
};

export default Studentregis;