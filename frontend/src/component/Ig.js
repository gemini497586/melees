import React from 'react'
import '../style/ig.css'
import '../style/featureComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './FontawsomeIcons'

function Ig() {
  return (
    <>
      <div className="fintro-link">
        <div className="fintro-linkcontent">
          <FontAwesomeIcon
            className="fintro-icon"
            icon={['fab', 'instagram']}
            fixedWidth
          />
          <div className="fintro-linkfont">
            <p className="m-0 pl-1 fcolor-secondary font-400SL">
              便當調色盤 | Della & Joey
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Ig
