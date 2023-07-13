import { useState, useEffect } from "react";
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
  const [validHobby, setvalidHobby] = useState(false);
  //setting dark mode & show hide hobby input box
  const [darkmode, setDarkMode] = useState(false);
  const [showHobbyInput, setshowHobbyInput] = useState(false);

  //for storing the data-input by the user in Array
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

  // show error message if the username input field is empty
  function checkUserError() {
    setShowUserError(true);
    const timer = setTimeout(() => {
      setShowUserError(false);
    }, 1500);
    return () => {
      timer;
    };
  }

  // show error message if the hobby input field is empty
  function checkValidHobby() {
    setvalidHobby(true);
    const hideHobbyError = setTimeout(() => {
      setvalidHobby(false);
    }, 1500);
    return () => {
      hideHobbyError;
    };
  }

  //submit the data and perform input field check
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || username === "" || username.trim() === "") {
      checkUserError();
    } else if (hobbies.length === 0) {
      checkValidHobby();
      return;
    } else {
      updateData();
      setUserName("");
      setHobbies([]);
      alert("Data submitted successfully");
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  //submit the data and perform input field check for hobby
  const handleHobby = (e) => {
    e.preventDefault();
    if (!userHobby || userHobby === "" || userHobby.trim() === "") {
      checkValidHobby();
      return;
    } else {
      const updateHobby = [...hobbies, userHobby.trim()];
      setHobbies(updateHobby);
      setUserHobby("");
      setshowHobbyInput(false);
    }
  };

  const handleAvailabilityChange = (event) => {
    setAvailability(event.target.value);
  };

  //switch between light and dark mode
  const switchDarkmode = () => {
    setDarkMode(!darkmode);
  };

  //Add hobbies
  const showHobbyInputtoggle = (e) => {
    e.preventDefault();
    setshowHobbyInput(!showHobbyInput);
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
          {/* username input field */}
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
          {/* Country input field */}
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
            {/* Availability radio button */}
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
          {/* Hobbies input field */}
          <div>
            <div className="hobby_wrapper">
              <label htmlFor="hobby_input">
                <b>Hobbies</b>
              </label>
              <button className="plus_button" onClick={showHobbyInputtoggle}>
                +
              </button>
            </div>
            <br />
            {/* Hobby input field toggles */}
            {showHobbyInput && (
              <div>
                <input
                  type="text"
                  id="hobby_input"
                  placeholder="Eg. Listening to Music"
                  value={userHobby}
                  onChange={(e) => setUserHobby(e.target.value)}
                />
                <button onClick={handleHobby}>Add </button>
              </div>
            )}
            {/* rendering list of hobbied */}
            {hobbies.map((hobby, id) => {
              return (
                <div key={id}>
                  <span>{id + 1}. </span>
                  {hobby}
                </div>
              );
            })}
            {/* Error message for hobby */}
            {validHobby && (
              <span className="error_message">
                Please enter hobby and press the {"Add"} button*
              </span>
            )}
          </div>
          <button className="submit_btn">Submit</button>
        </form>
      </div>
      <div className="bottom_empty_div"></div>
    </div>
  );
};

export default Form;
