import React from 'react'
import { IconContext } from 'react-icons'
import { AiFillInfoCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import "./statement.css"

const statementHearder = (props) => {
  return (
    <div className="d-flex p-2">
      <div>
        <div className="d-flex biztool-header-text-div mb-2">
          <div className="biztool-header-text">{props.title}</div>
          <Link to={props.infoPath}>
            &nbsp;
            <IconContext.Provider value={{ color: "#9fa7c2" }}>
              <AiFillInfoCircle />
            </IconContext.Provider>
          </Link>
        </div>
    
        <div className="line-hr mt-2 mb-2"></div>
      </div>
    </div>
  );
};

export default statementHearder;
