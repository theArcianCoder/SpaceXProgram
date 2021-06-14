import React, { useEffect, useState } from "react";
import Sidebar from "../comps/Sidebar";
import Cards from "../comps/Cards";
import axios from "axios";

function App() {
  const [program, setProgram] = useState([]);
  const [ogprogram,setOgprogram] =useState([]);
  const [currFilter,setCurrFilter]= useState(null);
  const [subFilterLaunch,setSubfilterLaunch]=useState(null);
  const [subFilterLand,setSubfilterLand]=useState(null);
  

  const getData = async () => {
    const res = await axios.get("https://api.spacexdata.com/v3/launches?limit=100");
    console.log(res.data);
    setProgram(res.data);
    setOgprogram(res.data);
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {

  }, [program])
  const successLaunch=(e)=>{
    const id= e.target.id;
    let status=true;
    (id==='laun_true')?status=true:status=false;
    if(subFilterLaunch===null)
    {
      setSubfilterLaunch(status);
      setProgram(program.filter((p)=>{
        return p.launch_success===status;
      }));
      
    }
    else
    {
      if(status===subFilterLaunch)
      {
        setSubfilterLaunch(null);
        (currFilter)?
        setProgram(
          ogprogram.filter((p)=>{
            return p.launch_year===currFilter;
          })
        ):setProgram(ogprogram);
      }
      else
      {
        if(currFilter!==null)
        {
          setSubfilterLaunch(status);
          setProgram(ogprogram.filter((p)=>{
            return (p.launch_year===currFilter && p.launch_success===status);
          }))
        }
        else
        {
          setSubfilterLaunch(status);
          setProgram(ogprogram.filter((p)=>{
            return (p.launch_success===status);
          }))
        }
        
      }
    }
    

  }
  const successLand=(e)=>{
    const id= e.target.id;
    let status=true;
    (id==='land_true')?status=true:status=false;
    console.log(subFilterLand,status);
    if(subFilterLand===null)
    {
      setSubfilterLand(status);
      setProgram(program.filter((p)=>{
        return p.rocket.first_stage.cores[0].land_success===status;
      }));
      
    }
    else
    {
      if(status===subFilterLand)
      {
        setSubfilterLand(null);
        (currFilter)?
        setProgram(
          ogprogram.filter((p)=>{
            return p.rocket.first_stage.cores[0].land_success===currFilter;
          })
        ):setProgram(ogprogram);
      }
      else
      {
        if(currFilter!==null)
        {
          setSubfilterLand(status);
          setProgram(ogprogram.filter((p)=>{
            return (p.launch_year===currFilter && p.rocket.first_stage.cores[0].land_success===status);
          }))
        }
        else
        {
          setSubfilterLand(status);
          setProgram(ogprogram.filter((p)=>{
            return (p.rocket.first_stage.cores[0].land_success===status);
          }))
        }
        
      }
    }
    
  }
  const filteryears =(e)=>{
    const year =e.target.id;
    setCurrFilter(year);
    if(currFilter===year)
    {
      setProgram(ogprogram);
      let btn= document.getElementById(currFilter);
      btn.classList.remove('active');
      setCurrFilter(null);
    }
    else
    {
    setProgram( ogprogram.filter((p)=>{
      return p.launch_year===year;
    }));
    let btn=document.getElementById(year);
    btn.classList.add('active');
    if(currFilter)
    {
    btn= document.getElementById(currFilter);
    btn.classList.remove('active');
    }
  }
  }

  const reset=()=>{
    window.location.reload();
  }
  return (
    <div className="App">
      <div className="head">SpaceX Launch Programs</div>
      <div className="container">
        <Sidebar filteryears={filteryears} successLand={successLand} successLaunch={successLaunch} reset={reset} />
        <Cards program={program} />
      </div>
      <div className="credits">
        <b>Developed By: </b>Vansh Raj
      </div>
    </div>
  );
}

export default App;
