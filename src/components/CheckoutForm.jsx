import React, { useEffect, useState } from "react";

const emptyUserInfo = {
  name: "",
  email: "",
  street: "",
  "postal-code": "",
  city: "",
};
export default function CheckoutForm({ onSubmit, toggleDialog }) {
  const [userInfo, setUserInfo] = useState(emptyUserInfo);

  function handleChange(key, value) {
    setUserInfo((prev) => {
      return { ...prev, [key]: value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUserInfo((prev) => emptyUserInfo);
    onSubmit(userInfo);
  }
  return (
    <form className="flex flex-col gap-4 mt-4 mb-2" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2 max-w-[400px]">
        <label htmlFor="fullname">Full Name</label>
        <input
          type="text"
          id="fullname"
          className="border  p-1 "
          required
          minLength={2}
          value={userInfo.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />

        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          className="border p-1 "
          required
          value={userInfo.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />

        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          required
          className="border p-1 "
          minLength={6}
          value={userInfo.street}
          onChange={(e) => handleChange("street", e.target.value)}
        />

        <div className="flex gap-2">
          <div className="">
            <label htmlFor="postal">Postal</label>
            <input
              type="text"
              id="postal"
              className="w-full border p-1 mt-2"
              required
              minLength={5}
              value={userInfo["postal-code"]}
              onChange={(e) => handleChange("postal-code", e.target.value)}
            />
          </div>
          <div className="">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              className="w-full border p-1 mt-2"
              required
              minLength={2}
              value={userInfo.city}
              onChange={(e) => handleChange("city", e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className=" flex gap-4 mt-5 justify-end mr-5">
        <button
          className="border-b border-transparent hover:border-b hover:border-black"
          type="reset"
          onClick={toggleDialog}
        >
          Cancel
        </button>
        <button id="checkout" className="py-1.5 px-2.5" type="submit">
          Submit Order
        </button>
      </div>
    </form>
  );
}
