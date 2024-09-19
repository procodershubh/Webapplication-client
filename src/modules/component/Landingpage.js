import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidenavbar from "../shares/Sidenavbar";

function Landingpage() {
  return (
    <div className="container-fluid fullbgc">
      <div className="row">
        <aside className="col-md-2 asidebgcol fsidebar">
          <Sidenavbar />
        </aside>
        <main className="col-md-10 offset-md-2" style={{ backgroundColor: 'rgb(30, 30, 46)' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Landingpage;
