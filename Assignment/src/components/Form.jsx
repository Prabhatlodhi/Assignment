import "./Form.css";

const Form = () => {
  return (
    <div className="main_wrapper">
      <form action="">
        <div>
          <label htmlFor="">Username :</label>
          <input type="text" placeholder="Please enter username..." />
        </div>
        <div>
          <label htmlFor="">Country :</label>
          <select name="country" id="country">
            <option value="India">India</option>
            <option value="South Korea">South Korea</option>
            <option value="Japan">Japan</option>
          </select>
        </div>
        <div>
          <span>Availability :</span>
          <label htmlFor="availability-yes">Yes</label>
          <input
            type="radio"
            id="availability-yes"
            name="availability"
            value="yes"
          />
          <label htmlFor="availability-no">No</label>
          <input
            type="radio"
            id="availability-no"
            name="availability"
            value="no"
          />
        </div>
        <div>
          <label htmlFor="">Hobbies :</label>
          <div>
            <span>1. </span>
            <input type="text" />
            <button>Add </button>
          </div>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
