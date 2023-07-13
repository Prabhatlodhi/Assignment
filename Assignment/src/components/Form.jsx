import { useState } from "react";
import "./Form.css";

const Form = () => {
  const [formData, setformData] = useState([]);
  const [username, setUserName] = useState("");
  const [country, setCountry] = useState("");
  const [availability, setAvailability] = useState("");

  const [hobbies, setHobbies] = useState([]);
  const [userHobby, setUserHobby] = useState("");
  // console.log(userHobby)
  const updateData = () => {
    const update = [
      ...formData,
      {
        id: Math.round(Math.random() * 999999),
        name: username,
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
    if (!username) {
      alert("Name cannot be empty");
      return;
    } else if (!availability) {
      alert("Please select availabitity");
      return;
    }else if (hobbies.length === 0 ) {
        alert("Please enter at least one hobby");
        return;
      }
    updateData();
    setUserName("");
    setHobbies([])
  };

  const handleHobby = (e) => {
      e.preventDefault()
     if (userHobby === "") {
        alert("Please enter at least one hobby");
        return;
      }

    const updateHobby = [...hobbies, userHobby];
    setHobbies(updateHobby);
    setUserHobby("");
  };

  const handleAvailabilityChange = (event) => {
    setAvailability(event.target.value);
  };

  return (
    <div className="main_wrapper">
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Username :</label>
          <input
            type="text"
            placeholder="Please enter username..."
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Country :</label>
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
          <span>Availability : </span>
          <div className="radio_btn">
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
        <div>
          <label htmlFor="">Hobbies :</label>
          <div>
            <input
              type="text"
              placeholder="Enter Hobbies"
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
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
