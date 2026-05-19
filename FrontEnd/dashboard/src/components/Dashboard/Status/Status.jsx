import React from 'react'
import CardStatus from "../../ui/CardStatus/CardStatus"
function Status() {
  return (
    <div>
      <section className='py-4'>
        <div className="container">
          <div className='row'>

            <div className='col-12 col-md-3'>
              <CardStatus counter="120" title="Projects" icon="fa-solid fa-building"/>
            </div>

            <div className='col-12 col-md-3'>
             <CardStatus counter="170" title="Projects" icon="fa-solid fa-chart-bar"/>

            </div>

            <div className='col-12 col-md-3'>
              <CardStatus counter="200" title="Developers" icon="fa-solid fa-users" />

            </div>

            <div className='col-12 col-md-3'>
                <CardStatus counter="160" title="Blogs" icon="fa-brands fa-blogger-b"/>

            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Status