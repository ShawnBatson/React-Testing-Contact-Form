import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });
  const { register, errors, handleSubmit, reset } = useForm({
    mode: "onBlur"
  });
  const onSubmit = data => {
    setData(data);
  };

  const changeHandler = event => {
    setData({
      ...data,
      [event.target.firstName]: event.target.value,
      [event.target.lastName]: event.target.value,
      [event.target.email]: event.target.value,
      [event.target.message]: event.target.value
    });
  };
  // const handleChange = event => {
  //   setData(event.target.value);
  // };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="firstName">First Name*</label>
          <input
            data-testid="firstName"
            name="firstName"
            placeholder="bill"
            value=""
            onChange={changeHandler}
            ref={register({ required: true, maxLength: 3 })}
          />
          {errors.firstName && (
            <p>Looks like there was an error: {errors.firstName.type}</p>
          )}
        </div>

        <div>
          <label className="lastName">Last Name*</label>
          <input
            data-testid="lastName"
            name="lastName"
            placeholder="luo"
            value=""
            onChange={changeHandler}
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <p>Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label className="email" placeholder="bluebill1049@hotmail.com">
            Email*
          </label>
          <input
            data-testid="email"
            name="email"
            value=""
            onChange={changeHandler}
            ref={register({ required: true })}
          />
          {errors.email && (
            <p>Looks like there was an error: {errors.email.type}</p>
          )}
        </div>
        <div>
          <label className="message">Message</label>
          <textarea
            data-testid="message"
            name="message"
            value=""
            onChange={changeHandler}
            ref={register({ required: false })}
          />
        </div>
        {data && (
          <pre style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <button data-testid="button" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
