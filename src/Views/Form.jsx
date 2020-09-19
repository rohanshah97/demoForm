import React, { useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import { Button, TextField, Typography } from "@material-ui/core";
import "./Form.css";

function Form() {
  const [activeForm, setActiveForm] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const forms = ["Name Details", "Email Details", "Age Details", "Preview"];

  const formSubmit1 = (event) => {
    event.preventDefault();
    console.log("First Form Submit", name);
    setActiveForm(1);
  };

  const formSubmit2 = (event) => {
    event.preventDefault();
    console.log("Second Form Submit", email);
    setActiveForm(2);
  };

  const formSubmit3 = (event) => {
    event.preventDefault();
    console.log("Third Form Submit", age);
    setActiveForm(3);
  };

  const formSubmit4 = (event) => {
    event.preventDefault();
    console.log("Final Form Submit", name, email, age);
    setName("");
    setEmail("");
    setAge(0);
    setActiveForm(0);
  };

  return (
    <div className="form">
      <Stepper
        activeStep={activeForm}
        styleConfig={{ activeBgColor: "skyblue", completedBgColor: "darkblue" }}
      >
        {forms.map((form, index) => (
          <Step key={index} label={form} onClick={() => setActiveForm(index)} />
        ))}
      </Stepper>
      {(activeForm === 0 && (
        <form
          className="form__formContainer"
          onSubmit={(event) => event.preventDefault()}
        >
          <TextField
            className="form_formInput"
            label="Name"
            variant="outlined"
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <div className="form__formNavigation">
            <Button variant="contained" color="primary" disabled>
              {" "}
              Prev{" "}
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={formSubmit1}
              type="submit"
              disabled={name.length > 0 ? false : true}
            >
              {" "}
              Next{" "}
            </Button>
          </div>
        </form>
      )) ||
        (activeForm === 1 && (
          <form
            className="form__formContainer"
            onSubmit={(event) => event.preventDefault()}
          >
            <TextField
              className="form_formInput"
              label="Email"
              variant="outlined"
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <div className="form__formNavigation">
              <Button variant="contained" onClick={() => setActiveForm(0)}>
                {" "}
                Prev{" "}
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={formSubmit2}
                type="submit"
                disabled={email.length > 0 ? false : true}
              >
                {" "}
                Next{" "}
              </Button>
            </div>
          </form>
        )) ||
        (activeForm === 2 && (
          <form
            className="form__formContainer"
            onSubmit={(event) => event.preventDefault()}
          >
            <TextField
              className="form_formInput"
              label="Age"
              variant="outlined"
              type="number"
              InputProps={{ inputProps: { min: 0 } }}
              value={age}
              onChange={(event) => {
                setAge(event.target.value);
              }}
            />
            <div className="form__formNavigation">
              <Button variant="contained" onClick={() => setActiveForm(1)}>
                {" "}
                Prev{" "}
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={formSubmit3}
                type="submit"
                disabled={age > 0 ? false : true}
              >
                {" "}
                Preview{" "}
              </Button>
            </div>
          </form>
        )) ||
        (activeForm === 3 && (
          <form
            className="form__formContainer"
            onSubmit={(event) => event.preventDefault()}
          >
            <div>
              <Typography variant="h5" component="h5" gutterBottom>
                Name : {name}
              </Typography>
              <Typography variant="h5" component="h5" gutterBottom>
                Email : {email}
              </Typography>
              <Typography variant="h5" component="h5" gutterBottom>
                Age : {age}
              </Typography>
            </div>
            <div className="form__formNavigation">
              <Button variant="contained" onClick={() => setActiveForm(2)}>
                {" "}
                Edit{" "}
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={formSubmit4}
                type="submit"
              >
                {" "}
                Submit{" "}
              </Button>
            </div>
          </form>
        ))}
    </div>
  );
}

export default Form;
