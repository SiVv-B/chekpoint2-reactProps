import React from 'react'
import propTypes from 'prop-types'

function Profile(props) {
  return (
    <div>
      <h1> {props.FullName}</h1>
      <p>{props.Bio}</p>
      <h2>{props.Profession}</h2>
      <img src={props.Pic} alt="my rofiles picture" />
    </div>
  )
}

Profile.propTypes = {
  FullName: propTypes.string,
  Bio: propTypes.string,
  Profession: propTypes.string,
}

export default Profile
