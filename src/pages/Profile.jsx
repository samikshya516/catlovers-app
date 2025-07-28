import React, { useState } from "react";
import ProfileCard from "../components/ProfileCard";
import styles from './Profile.module.css';
import MoodTracker from "../components/MoodTracker";
import Navbar from "../components/Navbar";


function Profile() {
  const [catName, setCatName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [story, setStory] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  function validateForm() {
  const errors = {};

  if (!catName.trim()) errors.catName = "Cat name is required";
  if (!age) errors.age = "Age is required";
  if (!story.trim()) errors.story = "Story is required";

  return errors;
}


  const handleSubmit = (e) => {
  e.preventDefault();

  const errors = validateForm();
  setFormErrors(errors);

  if (Object.keys(errors).length === 0) {
    setIsSubmitted(true);
  }
};


  return (
    <div>
      <Navbar />
      <div className={styles.profileContainer}>
        <h1>Create Cat Profile</h1>
        <div className={styles.formContainer}>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              {/* Form fields stay the same */}
              <div>
                <label>Cat's Name:</label>
                <input
                  type="text"
                  value={catName}
                  onChange={(e) => setCatName(e.target.value)}
                  maxLength={20}
                />
                <p>{catName.length}/20 characters</p>
                {formErrors.catName && <p style={{ color: "red" }}>{formErrors.catName}</p>}
              </div>

              <div>
                <label>Age:</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
                {formErrors.age && <p style={{ color: "red" }}>{formErrors.age}</p>}
              </div>

              <div>
                <label>Breed:</label>
                <input
                  type="text"
                  value={breed}
                  onChange={(e) => setBreed(e.target.value)}
                />
                {formErrors.breed && <p style={{ color: "red" }}>{formErrors.breed}</p>}
              </div>
              
              <div>
                <label>Photo URL:</label>
                <input
                  type="url"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                />
              </div>

              <div>
                <label>Cat’s Story:</label>
                <textarea
                  value={story}
                  onChange={(e) => setStory(e.target.value)}
                  maxLength={300}
                />
                <p>{story.length}/300 characters</p>
                {formErrors.story && <p style={{ color: "red" }}>{formErrors.story}</p>}
              </div>

              <button type="submit">Save Profile</button>
            </form>
          ) : (
            <ProfileCard
              catName={catName}
              age={age}
              breed={breed}
              photoURL={photoURL}
              story={story}
              onEdit={() => setIsSubmitted(false)} // this will toggle back to edit mode
            />
          )}
        </div>
        <MoodTracker />
      </div>
    </div>
  );

}

export default Profile;

