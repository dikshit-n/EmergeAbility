import React, { useEffect, useRef, useState } from "react";
import "./SignUp.css";
import TextBox from "../UI/TextBox/TextBox";
import CheckBox from "../UI/CheckBox/CheckBox";
import MagneticButton from "../UI/MagneticButton/MagneticButton";
import Select from "../UI/Select/Select";
import ScrollButton from "../UI/ScrollButton/ScrollButton";
import RadioButton from "../UI/RadioButton/RadioButton";
const interestedAsOptions = [
  { name: "Parent", displayName: "Parent" },
  { name: "Guardian", displayName: "Guardian" },
  { name: "Educator", displayName: "Educator" },
  { name: "Learner", displayName: "Learner" },
  { name: "Advocate", displayName: "Advocate" },
  { name: "Other", displayName: "Other" },
];

const genderOptions = [
  { name: "Male", displayName: "Male" },
  { name: "Female", displayName: "Female" },
  { name: "Non Binary", displayName: "Non Binary" },
  {
    name: "Do not prefer to reveal",
    displayName: "Do not prefer to reveal",
  },
];

const neroDivergent = [
  { name: "Yes", displayName: "Yes" },
  { name: "No", displayName: "No" },
  {
    name: "Do Not Prefer To Reveal",
    displayName: "Do Not Prefer To Reveal",
  },
];

const disability = [
  { name: "Yes ", displayName: "Yes " },
  { name: "No ", displayName: "No " },
  {
    name: "Do Not Prefer To Reveal ",
    displayName: "Do Not Prefer To Reveal ",
  },
];

const SignUp = (props) => {
  const [signUpRef] = useState(props.getSignUpRef());
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    interestedAs: [],
    location: "",
    whyChampion: "",
    whatChallenges: "",
    gender: "",
    website: "",
    identifyNero: "",
    neroReason: "",
    disability: "",
    disabilityReason: "",
  });
  const [other, setOther] = useState("");
  const [locationOptions, setLocationOptions] = useState([]);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setTouched(true);
      setEmailValid(validateEmail(event.target.value));
    }
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateEmail = (emailAddr) => {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return pattern.test(emailAddr);
  };

  const valid = () => {
    let requiredValues = [
      formData.firstName,
      formData.lastName,
      formData.email,
      formData.location,
      formData.gender,
      formData.identifyNero,
      formData.disability,
    ];
    return (
      requiredValues.every((el) => el.trim() !== "") &&
      requiredValues.length !== 0
    );
  };

  useEffect(async () => {
    const countryList = require("country-list");
    await setLocationOptions([...countryList.getNames()]);
  }, []);

  const changeDropdown = (el) => {
    setFormData((prev) => {
      return {
        ...prev,
        interestedAs: prev.interestedAs.includes(el)
          ? prev.interestedAs.filter((ele) => ele !== el)
          : [...prev.interestedAs, el],
      };
    });
  };

  const submitHandler = (e) => {
    // https://script.google.com/macros/s/AKfycbxDu1SUh3M9ECXpsz2rNIcaLfad1Zb2ascJHv5dPzWN_4F-3ZcU/exec
    e.preventDefault();
    if (!valid()) {
      props.setStatus("Error");
      props.setMessage(
        "Please fill out all the required fields and Try again !"
      );
    } else {
      let submitData = {
        ...formData,
        interestedAs: [...formData.interestedAs, other],
      };
      // console.log(submitData);
      setLoading(true);
      props.setStatus("Error");
      props.setMessage("Signing up... Please Wait......");
      const form = document.forms["submit-to-google-sheet"];
      fetch(
        "https://script.google.com/macros/s/AKfycbyvwWlk7TJw9HIuDUN50EPhr41qb6O1zE6VRQ0darAUuPa6oaFO/exec",
        { method: "POST", body: new FormData(form) }
      )
        .then((res) => {
          // console.log(res);
          setLoading(false);
          props.setStatus("Success");
          props.setMessage("Success");
        })
        .catch((err) => {
          setLoading(false);
          props.setStatus("Error");
          props.setMessage("Error");
          // console.log("error: " + err);
          // console.log("Something Went Wrong");
        });
    }
  };

  useEffect(() => {
    if (props.status === "Success" || props.status === "Error") {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        interestedAs: [],
        location: "",
        whyChampion: "",
        whatChallenges: "",
        gender: "",
        website: "",
        identifyNero: "",
        neroReason: "",
        disability: "",
        disabilityReason: "",
      });
    }
  }, [props.status]);

  return (
    <div ref={signUpRef} id="signup">
      <div className="heading-with-background">
        <h1 className="green">Sign Up</h1>
        <h2 className="mini-heading green">Sign Up</h2>
      </div>
      <div style={{ marginTop: -40 }}>
        <h1
          className="capitalise mini-heading mani-p"
          style={{ maxWidth: 700, margin: "auto" }}
        >
          Join our community of innovative educators and changemakers as an
          EmergeAbility champion.
        </h1>
      </div>
      <div style={{ position: "relative" }}>
        <div className="each-contact-row d-flex justify-content-left">
          <div className="emp"></div>
          <div style={{ margin: "0 10px" }}>
            <h1 className="contact-us-number green" style={{ opacity: 0.3 }}>
              01
            </h1>
          </div>
          <div className="para text-left contact-us-para">
            <p className="bold">
              Are you interested in driving change in education? If you are
              interested in collaborating with us, please fill in the form
              below. The more detail you can share, the better.
            </p>
          </div>
        </div>

        <div className="each-contact-row d-flex justify-content-end odd-one">
          <div style={{ margin: 10 }}>
            <h1 className="contact-us-number green" style={{ opacity: 0.3 }}>
              02
            </h1>
          </div>
          <div className="para text-left contact-us-para">
            <p className="bold">
              This will help us learn which hubs we could launch, where and
              when, as well as put Champions in touch with each other to build
              learning ecosystems. We will share this information later in the
              year.
            </p>
          </div>
          <div className="emp"></div>
        </div>

        <div className="each-contact-row d-flex justify-content-left">
          <div className="emp"></div>
          <div style={{ margin: 10 }}>
            <h1 className="contact-us-number green" style={{ opacity: 0.3 }}>
              03
            </h1>
          </div>
          <div className="para text-left contact-us-para">
            <p className="bold" style={{ position: "relative" }}>
              In the meantime, please let us know if you ’d like to receive news
              and updates about EmergeAbility ’s growth and evolution.
            </p>
          </div>
        </div>
        <div className="signup-scroll">
          {/* <MagneticButton
                  rotate="30deg"
                  hoverColor="#7ac054"
                  name="S C R O L L &nbsp; F U R T H E R"
                  id="signup-scroll-button"
                  onClick={() => {
                    window.scroll(
                      0,
                      formRef.current.offsetTop
                      // props.ref.current.getBoundingClientRect().height + window.scrollY
                    );
                  }}
                /> */}
          <ScrollButton
            onClick={() => {
              window.scroll(
                0,
                formRef.current.offsetTop - 60
                // props.ref.current.getBoundingClientRect().height + window.scrollY
              );
            }}
            name="Sign Up form"
            color="green"
            textColor="#7ac054"
          />
        </div>
      </div>
      <br />
      <br />
      <form
        name="submit-to-google-sheet"
        ref={formRef}
        id="form"
        onSubmit={submitHandler}
        className="signUp"
        style={{ position: "relative" }}
        ref={formRef}
      >
        <TextBox
          value={formData.firstName}
          placeholder="First Name"
          onChange={changeHandler}
          label="FirstName"
          textboxName="firstName"
          required
          borderColor="#357FF7"
          color="#357FF7"
          width="30vw"
          height="50px"
        />
        <TextBox
          value={formData.lastName}
          placeholder="Last Name"
          onChange={changeHandler}
          label="Last Name"
          textboxName="lastName"
          required
          borderColor="#357FF7"
          color="#357FF7"
          width="30vw"
          height="50px"
        />
        <div>
          <TextBox
            value={formData.email}
            type="email"
            placeholder="Email"
            onChange={changeHandler}
            label="Email"
            textboxName="email"
            required
            borderColor="violet"
            color="#EE82EE"
            width="80vw"
            height="50px"
          />
          {touched && !emailValid ? (
            <p className="visual-correction">⚠️Please enter a valid email !</p>
          ) : null}
          <br />
        </div>
        <br />
        <div className="text-left select-container">
          <label className="label">
            <p className="red">*</p>
            <h1 className={`textbox-label`} style={{ color: "#81C35E" }}>
              I am interested as a
            </h1>
          </label>
          <input
            style={{ display: "none" }}
            name="interestedAs"
            value={formData.interestedAs.join(", ")}
          />
          <p>&nbsp;&nbsp;Please Select an Option</p>
          {interestedAsOptions.map((el, index) => (
            <CheckBox
              key={index}
              name={el.name}
              onChange={() => changeDropdown(el.name)}
              checked={formData.interestedAs.includes(el.name)}
              displayName={el.displayName}
            />
          ))}
          {formData.interestedAs.includes("Other") ? (
            <TextBox
              value={other}
              type="text"
              placeholder="Your Answer"
              onChange={(event) => setOther(event.target.value)}
              textboxName="other"
              required
              borderColor="violet"
              color="#EE82EE"
              width="80vw"
              height="50px"
            />
          ) : null}
        </div>
        <div className="text-left select-container">
          <br />
          <label className="label">
            <p className="red">*</p>
            <h1 className={`textbox-label`} style={{ color: "#fa6a18" }}>
              Gender
            </h1>
          </label>
          <input
            style={{ display: "none" }}
            name="gender"
            value={formData.gender}
          />
          {genderOptions.map((el, index) => (
            <RadioButton
              key={index}
              name={el.name}
              onChange={() =>
                setFormData((prev) => ({
                  ...prev,
                  gender: el.name,
                }))
              }
              checked={formData.gender === el.name}
              displayName={el.displayName}
            />
          ))}
        </div>
        <div className="text-left select-container">
          <br />
          <label className="label">
            <p className="red">*</p>
            <h1 className={`textbox-label`} style={{ color: "blue" }}>
              Do you identify as a neurodivergent ?
            </h1>
          </label>
          <input
            style={{ display: "none" }}
            name="Do You Identify As nerodivergent ?"
            value={formData.identifyNero}
          />
          {neroDivergent.map((el, index) => (
            <RadioButton
              key={index}
              name={el.name}
              onChange={() =>
                setFormData((prev) => ({
                  ...prev,
                  identifyNero: el.name,
                }))
              }
              checked={formData.identifyNero === el.name}
              displayName={el.displayName}
            />
          ))}
        </div>
        {formData.identifyNero === "Yes" ? (
          <div>
            <TextBox
              value={formData.neroReason}
              type="text"
              placeholder="Specify if you prefer to reveal"
              onChange={changeHandler}
              label="Please mention your condition"
              textboxName="neroReason"
              borderColor="#ffc16a"
              color="#ffc16a"
              width="80vw"
              height="50px"
            />
          </div>
        ) : (
          () =>
            setFormData((prev) => ({
              ...prev,
              neroReason: "Would not prefer to reveal",
            }))
        )}
        <br />
        <div className="text-left select-container">
          <br />
          <label className="label">
            <p className="red">*</p>
            <h1 className={`textbox-label`} style={{ color: "#BC34E8" }}>
              Do you have any disability ?
            </h1>
          </label>
          <input
            style={{ display: "none" }}
            name="Do you have any disability"
            value={formData.disability}
          />
          {disability.map((el, index) => (
            <RadioButton
              key={index}
              name={el.name}
              onChange={() =>
                setFormData((prev) => ({
                  ...prev,
                  disability: el.name,
                }))
              }
              checked={formData.disability === el.name}
              displayName={el.displayName}
            />
          ))}
        </div>
        {formData.disability === "Yes " ? (
          <div>
            <TextBox
              value={formData.disabilityReason}
              type="text"
              placeholder="Specify if you prefer to reveal"
              onChange={changeHandler}
              label="Please mention your disability"
              textboxName="disabilityReason"
              borderColor="#FF6082"
              color="#FF6082"
              width="80vw"
              height="50px"
            />
          </div>
        ) : (
          () =>
            setFormData((prev) => ({
              ...prev,
              disabilityReason: "Would not prefer to reveal",
            }))
        )}
        <br />
        <div style={{ width: "80vw", textAlign: "left", marginTop: 50 }}>
          <label className="label">
            <h1 className="textbox-label orange">*Country</h1>
          </label>
          {/* <p>What's your location?</p> */}
          <input
            style={{ display: "none" }}
            name="location"
            value={formData.location}
          />
          <Select
            boxShadox="#cc5417"
            value={formData.location}
            placeholder="What's your location?"
            options={[...locationOptions]}
            name="location"
            onChange={(value, name) => {
              setFormData((prev) => ({
                ...prev,
                location: value,
              }));
            }}
          />
          <br />
        </div>
        <TextBox
          value={formData.whyChampion}
          type="text"
          onChange={changeHandler}
          label="Why would you like to become an EmergeAbility Champion? (maximum 100 words)"
          textboxName="whyChampion"
          borderColor="#421F0B"
          color="#421F0B"
          width="80vw"
          height="70px"
        />
        <TextBox
          value={formData.whatChallenges}
          type="text"
          onChange={changeHandler}
          label="What challenges are you trying to address?"
          textboxName="whatChallenges"
          borderColor="#00B500"
          color="#00B500"
          width="80vw"
          height="70px"
        />
        <TextBox
          value={formData.website}
          type="url"
          pattern="https?://.+"
          onChange={changeHandler}
          label="Enter the URL of Your website"
          textboxName="website"
          borderColor="blue"
          color="blue"
          width="80vw"
          height="70px"
        />

        <div className="signup-button">
          <MagneticButton
            id="signup-magnetic-button"
            // disabled={!valid()}
            type="submit"
            color="green"
            hoverColor="#7ac054"
            name="S I G N &nbsp; U P"
            rotate="-30deg"
            onClick={submitHandler}
            align="right"
            width="150px"
            height="150px"
            align="center"
          />
          <div className="warning-2">
            ⚠️ Your personal information will be kept strictly confidential and
            will not be sold, reused, rented, loaned or otherwise disclosed. Any
            information you give us will be treated with the utmost care and
            will not be used in ways that you have not consented to, unless you
            have used our website in an unlawful manner.
          </div>
        </div>
      </form>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default SignUp;
