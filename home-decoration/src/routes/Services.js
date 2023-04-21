import { Link } from "react-router-dom";

import { useLocation } from 'react-router-dom';
function Services () {
    return(
        <>
        <h1>
            This is Service
         </h1>
        </>
    )
}
function ServiceDropdown() {
    const location = useLocation();
    
    const Services = [
      { name: 'Marketing', path: './routes/Services.js' },
      { name: 'Engineering', path: './routes/Services.js' },
      { name: 'Sales', path: './routes/Services.js' },
      { name: 'Support', path: './routes/Services.js' },
    ];
  
    return (
      <div className="Services-dropdown">
        {Services.map(Services => (
          <Link key={Services.name} to={Services.path} className={location.pathname === Services.path ? 'active' : ''}>{Services.name}</Link>
        ))}
      </div>
    );
  }

export default Services;