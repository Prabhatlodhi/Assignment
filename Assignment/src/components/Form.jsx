import { useState } from "react";
import "./Form.css";

const Form = () => {
  const [formData, setformData] = useState([]);
  const [username, setUserName] = useState("");
  const [country, setCountry] = useState("India");
  const [availability, setAvailability] = useState("Yes");
  //state for handling hobby part
  const [hobbies, setHobbies] = useState([]);
  const [userHobby, setUserHobby] = useState("");
  //state for handling error part
  const [showUserError, setShowUserError] = useState(false);
  const [ validHobby, setvalidHobby] = useState(false);

  const [darkmode, setDarkMode] = useState(false);
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
  

  function checkUserError() {
    setShowUserError(true);
    const timer = setTimeout(() => {
      setShowUserError(false);
    }, 1500);
    return () => {
      timer;
    };
  }

  function checkValidHobby() {
    setvalidHobby(true);
    const hideHobbyError = setTimeout(() => {
        setvalidHobby(false);
    }, 1500);
    return () => {
        hideHobbyError;
    };
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || username === "" || username.trim() === "") {
        checkUserError();
    } else if (hobbies.length === 0) {
        checkValidHobby()
      return;
    } else {
      updateData();
      setUserName("");
      setHobbies([]);
      alert("Data submitted successfully");
    }
    console.log(formData);
};


  const handleHobby = (e) => {
    e.preventDefault();
    if (!username || username === "" || username.trim() === "") {
        checkUserError();
      return;
    } else if (userHobby === "") {
        checkValidHobby()
      return;
    }
    const updateHobby = [...hobbies, userHobby.trim()];
    setHobbies(updateHobby);
    setUserHobby("");
  };

  const handleAvailabilityChange = (event) => {
    setAvailability(event.target.value);
  };

  const switchDarkmode = () => {
    setDarkMode(!darkmode);
  };

  return (
    <div className={darkmode ? "dark_mode" : "main_wrapper"}>
      {darkmode ? (
        <button onClick={switchDarkmode} className="darkmode_btn">
          Light Mode
        </button>
      ) : (
        <button onClick={switchDarkmode} className="darkmode_btn">
          Dark Mode
        </button>
      )}
      <div className="top_empty_div"></div>
      <div className="form_wrapper">
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">
              <b>Username</b>
            </label>
            <br />
            <input
              type="text"
              placeholder="Eg. John Doe"
              value={username}
              id="username"
              onChange={(e) => setUserName(e.target.value)}
            />
            {showUserError && (
              <span className="error_message">Username cannot be empty*</span>
            )}
          </div>
          <div className="wrapper_radio_btn">
            <div>
              <label htmlFor="country">
                <b>Country</b> 
              </label>
              <br />
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
                <span>
                  <b>Availability</b>
                </span>
                <div>
                  <label htmlFor="availability-yes"> Yes </label>
                  <input
                    type="radio"
                    id="availability-yes"
                    name="availability"
                    value="Yes"
                    checked={availability === "Yes"}
                    onChange={handleAvailabilityChange}
                  />
                  <label htmlFor="availability-no"> No </label>
                  <input
                    type="radio"
                    id="availability-no"
                    name="availability"
                    value="No"
                    checked={availability === "No"}
                    onChange={handleAvailabilityChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="hobby_input">
              <b>Hobbies</b>{" "}
            </label>
            <br />
            <input
              type="text"
              id="hobby_input"
              placeholder="Eg. Listening to Music"
              value={userHobby}
              onChange={(e) => setUserHobby(e.target.value)}
            />
            <button onClick={handleHobby}>Add </button>
            {validHobby && (
              <span className="error_message">Please enter hobby and press the {"Add"} button*</span>
            )}
            {hobbies.map((hobby, id) => {
              return (
                <div key={id}>
                  <span>{id + 1}. </span>
                  {hobby}
                </div>
              );
            })}
          </div>
          <button className="submit_btn">Submit</button>
        </form>
      </div>
      <div className="bottom_empty_div"></div>
    </div>
  );
};

export default Form;
