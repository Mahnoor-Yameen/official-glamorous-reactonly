import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AccountContextVariable } from '../../context/AccountContext';

export default function Sidebar() {
    const location = useLocation();
    const { account_dispatch } = useContext(AccountContextVariable);

    // Navigation items
    const navItems = [
        {
            tab: 'Orders',
            url: "/",
        },
        {
            tab: 'Users',
            url: "/users",
        },
        {
          tab: 'User Queries',
          url: "/queries",
      },
    ];

    return (
        <>
        
        
        <div className=" d-flex justify-content-between align-items-center p-3  ">
        <h2 className='text-light px-2'>Dashboard</h2>
      
      </div>

      {/* <ul className="nav flex-column">
        {
          navItems.map((val,index)=> //curly bracket + backtick = expression
          <li className={`nav-item my-1 mx-2 ${location.pathname==val.url ? 'bg-light rounded' : null}`} key={index}>  
          <Link to={val.url} className='nav-link pb-3 gap-2  mt-3 text-light' style={{fontSize:"18px"}}>
          <button className='btn '>{val.tab}</button>
          
          </Link>

        </li>
        
        )
        }
      </ul> */}

      <ul className="nav flex-column">
        {
          navItems.map((val,index)=> //curly bracket + backtick = expression
          <li className={`nav-item my-1 mx-2 ${location.pathname==val.url ? 'bg-light rounded' : null}`} key={index}>  
          <Link to={val.url} className='nav-link d-flex align-items-center gap-2' style={{fontSize:"18px"}}>
          {/* <span>{val.icon}</span> */}
          {val.tab}
          </Link>

        </li>
        
        )
        }
      </ul>
        
        
        </>
    );
}
