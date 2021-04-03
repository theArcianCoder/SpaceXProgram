import React from "react";
const Sidebar = ({filteryears,successLand,successLaunch,reset}) => {
  return (
    <div className="sidebar">
      <div className="sidehead">Filters</div>
      <div className="side_subtitle">Launch Year</div>
      <div className="buttons">
        <button className="btn" id="2006" onClick={filteryears}>2006</button>
        <button className="btn" id="2007" onClick={filteryears}>2007</button>
        <button className="btn" id="2008" onClick={filteryears}>2008</button>
        <button className="btn" id="2009" onClick={filteryears}>2009</button>
        <button className="btn" id="2010" onClick={filteryears}>2010</button>
        <button className="btn" id="2011" onClick={filteryears}>2011</button>
        <button className="btn" id="2012" onClick={filteryears}>2012</button>
        <button className="btn" id="2013" onClick={filteryears}>2013</button>
        <button className="btn" id="2014" onClick={filteryears}>2014</button>
        <button className="btn" id="2015" onClick={filteryears}>2015</button>
        <button className="btn" id="2016" onClick={filteryears}>2016</button>
        <button className="btn" id="2017" onClick={filteryears}>2017</button>
        <button className="btn" id="2018" onClick={filteryears}>2018</button>
        <button className="btn" id="2019" onClick={filteryears}>2019</button>
        <button className="btn" id="2020" onClick={filteryears}>2020</button>
      </div>
        <br/>
      <div className="side_subtitle">Successful Launch</div>
      <div className="buttons">
        <button className="btn" onClick={successLaunch} id="laun_true">True</button>
        <button className="btn" onClick={successLaunch} id="laun_false">False</button>
      </div>
      <br/>
      <div className="side_subtitle">Successful Landing</div>
      <div className="buttons">
        <button className="btn" onClick={successLand} id="land_true">True</button>
        <button className="btn" onClick={successLand} id="land_false">False</button>
      </div>
      <button className="btn" onClick={reset} id="land_false">Reset</button>
    </div>
  );
};

export default Sidebar;

