// eslint-disable-next-line no-unused-vars

import './Academy.css';
import Nav_A from '../Nav_bar_A/Nav_A';
import  { useState,useEffect } from 'react';
import axios from 'axios';
import UpdateAcademy from './UpdateAcademy';
const Academy = () => {
  const [name, setname] = useState('');
    const[chessacademyname, setchessacademyname]=useState('');
    const [phonenumber, setphonenumber] = useState('');
    const [email, setemail] = useState('');
    const[open,setOpen]=useState('');
    const[ename,setEname]=useState('');
    // const [fee, setFee] = useState('');
    const handleSubmit =async (e) => {
      e.preventDefault();
      try{
        const response =await axios.post(
          "http://localhost:8080/add",{
            name,
            chessacademyname,
            email,
            phonenumber,
            
          },
        );
        window.location.href="/Academy"
        console.log("Details added Successfully");
        console.log(response.data);
        window.alert("Successfully added");
      }
      catch(error){
        console.log("Failed");
        console.log(error);
      }
    }
    const handleDelete=async (name)=>{
      try{
        await axios.delete(`http://localhost:8080/add/${name}`);
        window.location.href="/Academy"
        alert("deleted")
      }
      catch(error){
        console.log(error);
        alert("unsuccessfull");
        
      }
    }
    const handleUpdate=(ename)=>{
      setEname(ename);
      setOpen(true);
      // {open &&(<UpdateAcademy name={name} />)}
    }
    const [data,setData]=useState([])
    const playerList=data;
    useEffect(()=>{
      axios.get("http://localhost:8080/add").then((response)=>{
        setData(response.data);
      })
      .catch((error)=>{
        console.log(error);
      });
    },[]);

  return (
    <div>
        <Nav_A/>
    
    <div className="admin-page-container">
      <h1>Chess Academy Details</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={(e) => setname(e.target.value)} required />
        </label>

        <label>
          Chess Academy Name:
          <input type="text" name="chessAcademyName" value={chessacademyname} onChange={(e) => setchessacademyname(e.target.value)} required />
        </label>

        <label>
          Phone Number:
          <input type="tel" name="phoneNumber" value={phonenumber} onChange={(e) => setphonenumber(e.target.value)} required />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={email} onChange={(e) => setemail(e.target.value)} required />
        </label>

        <button type="submitii">Add Details</button>
      </form>

      <div className="player-list">
        <h2>List Of Academy</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Chess Academy</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Action1</th>
              <th>Action2</th>
            </tr>
          </thead>
          <tbody>
            {playerList.map(player  => (
              <tr key={player.id}>
                <td>{player.name}</td>
                <td>{player.chessacademyname}</td>
                <td>{player.phonenumber}</td>
                <td>{player.email}</td>
                <td>
                  <button type="submitii" onClick={() => handleDelete(player.name)}>Delete</button>
                </td>
                <td>
                  <button type="submitii" onClick={() => handleUpdate(player.name)}>Update</button>
                </td>
              </tr>
            ))}
            
          </tbody>
        </table>
        {open &&(<UpdateAcademy ename={ename} />)}
      </div>
    </div>
    </div>
  );
};

export default Academy;