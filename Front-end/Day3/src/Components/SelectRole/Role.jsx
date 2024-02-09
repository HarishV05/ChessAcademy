// // eslint-disable-next-line no-unused-vars
// import React from 'react';
// import './Role.css'; 
// function Role() {

//   return (
//     <div className='rb'>
//       <h1>Select Your Role!</h1>

//       <button name="hover-button" value="admin" href="#">Admin</button>

//       <input type='radio' name="hover-button" value="user"  href="#">Competitor</input>
//     </div>
//   );
// }
// export default Role;

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Role.css';

const Role = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the selected role, e.g., send it to the server or perform some action
    console.log('Selected Role:', selectedRole);
  };

  return (
    <form className="role-selector-form" onSubmit={handleSubmit}>
      <div>
        <label className="radio-label">
          <input
            type="radio"
            value="admin"
            checked={selectedRole === 'admin'}
            onChange={handleRoleChange}
          />
          Admin
        </label>
      </div>
      <div>
        <label className="radio-label">
          <input
            type="radio"
            value="user"
            checked={selectedRole === 'user'}
            onChange={handleRoleChange}
          />
          User
        </label>
      </div>
      <div>
      </div>
    </form>
  );
};

export default Role;
