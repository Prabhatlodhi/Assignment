import { useState } from "react";
import "./Form.css";

const Form = () => {
  const [formData, setformData] = useState([]);
  const [username, setUserName] = useState("");
  const [country, setCountry] = useState("");
  const [availability, setAvailability] = useState("");

  const [hobbies, setHobbies] = useState([]);
  const [userHobby, setUserHobby] = useState("");

  const [darkmode, setDarkMode] = useState(false)
  // console.log(userHobby)
  const updateData = () => {
    const update = [
      ...formData,
      {
        id: Math.round(Math.random() * 999999),
        name: username.trim(),
        country: country,
        availability: availability,
        hobbies: hobbies,
      },
    ];
    setformData(update);
  };
    console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || username === "" ) {
      alert("Name cannot be empty");
      return;
    } else if (!availability) {
      alert("Please select availabitity");
      return;
    } else if (hobbies.length === 0) {
      alert(`Please add anyone hobby by ${"Clicking"} on the ${"Add"} button`);
      return;
    }
    updateData();
    setUserName("");
    setHobbies([]);
    alert("Data submitted successfully");
  };

  const handleHobby = (e) => {
    e.preventDefault();
    if (!username  ) {
      alert("Name cannot be empty");
      return;
    } else if (!availability) {
      alert("Please select availabitity");
      return;
    } else if (userHobby === "") {
      alert("Please enter at least one hobby");
      return;
    }
    const updateHobby = [...hobbies, userHobby.trim()];
    setHobbies(updateHobby);
    setUserHobby("");
  };

  const handleAvailabilityChange = (event) => {
    setAvailability(event.target.value);
  };

  const switchDarkmode = ()=>{
    setDarkMode(!darkmode)
  }

  return (
    <div className={darkmode ? 'dark_mode' : 'main_wrapper'}>
    { darkmode ?
        <button onClick={switchDarkmode} className="darkmode_btn" >Light Mode</button> : 
        <button onClick={switchDarkmode} className="darkmode_btn" >Dark Mode</button>
    }
      <div className="top_empty_div"></div>
      <div className="form_wrapper">
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor=""><b>Username</b></label><br />
            <input
              type="text"
              placeholder="Eg. John Doe"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="wrapper_radio_btn" > 
          <div  >
            <label htmlFor=""><b>Country</b> </label><br />
            <select
              name="country"
              id="country"
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="India">India</option>
              <option value="South Korea">South Korea</option>
              <option value="Japan">Japan</option>
            </select>
          </div>
          <div>
            <div className="radio_btn">
            <span><b>Availability</b> </span>
              <div>
              <label htmlFor="availability-yes"> Yes </label>
              <input
                type="radio"
                id="availability-yes"
                name="availability"
                value="yes"
                checked={availability === "yes"}
                onChange={handleAvailabilityChange}
              />
              <label htmlFor="availability-no"> No </label>
              <input
                type="radio"
                id="availability-no"
                name="availability"
                value="no"
                checked={availability === "no"}
                onChange={handleAvailabilityChange}
              />
              </div>
            </div>
          </div>
          </div>
          <div>
            <label htmlFor=""><b>Hobbies</b> </label><br />
            <input 
              type="text"
              id="hobby_input"
              placeholder="Eg. Listen to Music"
              value={userHobby}
              onChange={(e) => setUserHobby(e.target.value)}
            />
            <button onClick={handleHobby}>Add </button>
            {hobbies.map((hobby, id) => {
              return (
                <div key={id}>
                  <span>{id + 1}. </span>
                  {hobby}
                </div>
              );
            })}
          </div>
          <button className="submit_btn" >Submit</button>
        </form>
      </div>
      <div className="bottom_empty_div"></div>
    </div>
  );
};

export default Form;
