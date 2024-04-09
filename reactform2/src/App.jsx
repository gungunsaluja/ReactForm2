import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: "",
  });
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally printing the value of the form");
  }

  return (
    <div className="flex flex-col items-center mt-2">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First name</label>
        <br></br>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="love"
          value={formData.firstName}
          onChnage={changeHandler}
          className="outline"
        ></input>
        <br></br>
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="babbar"
          value={formData.lastName}
          onChange={changeHandler}
          className="outline"
        ></input>
        <br></br>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="love@123.gmail.com"
          value={formData.email}
          onChange={changeHandler}
          className="outline"
        ></input>
        <label htmlFor="country">Contry</label>
        <br></br>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="outline"
        >
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
        <br></br>
        <label htmlFor="streetAddress">Street Address</label>
        <br></br>
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="B-25C"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="outline"
        ></input>
        <br></br>
        <label htmlFor="city">City</label>
        <br></br>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="B-25C"
          value={formData.city}
          onChange={changeHandler}
          className="outline"
        ></input>
        <br></br>
        <label htmlFor="state">State/Province</label>
        <br></br>
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Punjab"
          value={formData.state}
          onChange={changeHandler}
          className="outline"
        ></input>
        <label htmlFor="postalCode">State/Province</label>
        <br></br>
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="110077"
          value={formData.postalCode}
          onChange={changeHandler}
          className="outline"
        ></input>
        <fieldset>
          <legend>By Email</legend>
          <div className="flex">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              value={formData.comments}
              onChange={changeHandler}
            ></input>

            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someone posts a comment on a posting.</p>
            </div>
          </div>
          <div className="flex">
            <input
              id="candidates"
              name="candidates"
              type="checkbox"
              value={formData.candidates}
              onChange={changeHandler}
            ></input>
            <div>
              <label htmlFor="candidates">Candidates</label>
              <p>Get notifies when a candidate applies for a job.</p>
            </div>
          </div>
          <div className="flex">
            <input
              id="offers"
              name="offers"
              type="checkbox"
              checked={formData.offers}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="offers">Offers</label>
              <p>Get notified when a candidate accepts or rejects an offer.</p>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone.</p>
          <input
            type="radio"
            id="pushEverything"
            name="pushNotifications"
            value="Everything"
            onChange={changeHandler}
          />
          <label htmlFor="pushEverything">Everything</label>
          <br></br>
          <input
            type="radio"
            id="pushEmail"
            name="pushNotifications"
            value="Same as email"
            onChange={changeHandler}
          />
          <br></br>
          <label htmlFor="pushEmail">Same as email</label>
          <input
            type="radio"
            id="pushNothing"
            name="pushNotifications"
            value="No Push Notifications"
            onChange={changeHandler}
          />
          <label htmlFor="pushNothing">No Push Notifications</label>
        </fieldset>
        <button className="bg-blue text-white font-bold rounded">Save</button>
      </form>
    </div>
  );
}

export default App;
