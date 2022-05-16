import React from 'react'
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const Profile = ({name,bio,profession,children,img}) => {
  return (
    <div>
      <div className="text-center">
    
                  <img src={img} style={{width:"150px", borderRadius:"30px"}}  alt=""/>
                </div>
          <h5 className="mt-2 mb-0">{name}</h5>
          <div className="px-4 mt-1">
            <p className="fonts"><strong>{profession}</strong></p>
        </div>
          <div className="px-4 mt-1">
            <p className="fonts">{bio}</p>
        </div>
          
          
           
          <h5 className="mt-2 mb-0">{children}</h5>  
         
         <Button variant="outline-secondary" size="lg" onClick={() => alert(name)}>click</Button>{' '}
    </div>
  )
}

    Profile.defaultProps = {
    name: "name",
    bio: "bio",
    profession: "profession"
  }

    Profile.propTypes = {
    name: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    children: PropTypes.element,
    consolelog: PropTypes.func
  };
export default Profile