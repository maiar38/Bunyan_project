import { NavLink } from 'react-router-dom'
import React from 'react'
import styles from"./Sidebar.module.css"
function Sidebar() {
const links=[
    {icon: "fa-chart-bar",title:"Status",path:"/"},
    {icon:"fa-users",title:"USER MANAGEMENT",path:"/users"},
    {icon:"fa-building",title:"PROJECTS MANAGEMENT",path:"/projects"},
    {icon:"fa-building",title:"DEVELPOERS MANAGEMENT",path:"/developer"},
    {icon:"fa-users",title:"CMS",path:"/cms"},
    {icon:"fa-message",title:"LIVE CHAT",path:"/livechat"},
]
  return (
    <>
    <aside className={`${styles.sidebar} min-vh-100 py-4` } >
        <div className='fw-semibold px-4 mb-3 fs-4 '> Dashboard </div>
        
        <nav>
  {links.map((item, index) => (
    
    <NavLink
      key={index}
      to={item.path}
      className={`${styles.navItem} d-flex align-items-center gap-3 py-3 px-4`}
    >
      <i className={`fa-solid ${item.icon}`}></i>
      <span>{item.title}</span>
    </NavLink>

  ))}
</nav>
    </aside>
    </>
  )
}

export default Sidebar
