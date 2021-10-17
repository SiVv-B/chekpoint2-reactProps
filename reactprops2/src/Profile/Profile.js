import React from 'react'
import propTypes from 'prop-types'

function Profile(props) {
  return (
    <div style={{ display: 'flex', alignContent: 'space-between' }}>
      <img
        src={props.Pic}
        alt="my rofiles picture"
        style={{
          width: '30%',
          height: '40%',
          marginLeft: '5%',
          marginTop: '5%',
        }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '5%',
          borderStyle: 'solid',
          marginLeft: '5%',
          width: '50%',
        }}
      >
        <h1> {props.FullName}</h1>
        <p>{props.Bio}</p>
        <h2>{props.Profession}</h2>
        <button
          onClick={props.Message}
          style={{ width: '25%', marginLeft: '37%' }}
        >
          Click me
        </button>
      </div>
    </div>
  )
}

Profile.propTypes = {
  FullName: propTypes.string,
  Bio: propTypes.string,
  Profession: propTypes.string,
  Message: propTypes.string
}

export default Profile
