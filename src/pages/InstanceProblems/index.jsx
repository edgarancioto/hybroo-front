import React from 'react'

import MenuHeader from '../../components/MenuHeader'

export default function InstaceProblems() {
  return (
    <div id="wrapper">
      <MenuHeader />

      <section
        data-bgimage="url(images/background/9.png) bottom"
        className="full-height vertical-center"
      >
        <div
          className="container wow fadeIn"
          id="first-container"
          data-wow-delay=".2s"
        >
          <div className="box-rounded padding40 m-0" data-bgcolor="#ffffff">
            <h3 className="mb10">Funções e Problemas</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
