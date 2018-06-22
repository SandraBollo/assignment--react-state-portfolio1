import React, { Component } from 'react';


/*  Note:
   if you find a add/remove 'techlist--hidden' from the div element's class,
   the techlist box will appear/disappear

*/

class ShowHideTech extends Component {
  constructor(){
    super()
    this.state = {
      openObj: true
    }
  }
  _toggleShowTech () {
     console.log("ummm hi", this.state)
     let newState

     if (this.state.openObj === true) {
       newState = { openObj : false }

     }
     else {
       newState = { openObj : true}

     }
     this.setState(newState)
  }

  render() {

    let techlistStatus
    let msjButton

     if (this.state.openObj) {
       techlistStatus =  `techlist--hidden`
       msjButton = "+ Show tech"
     }
     else{
       techlistStatus = ''
       msjButton = "- Hide Tech"
     }

    return (
      <section>
        <h4>Technologies</h4>
        <button onClick = { ()=> { this._toggleShowTech() } } className="toggle-techlist">{ msjButton} </button>

        <div className={`techlist ${techlistStatus}`}>
          <span className="techlist__icon devicons devicons-github_badge"/>
          <span className="techlist__icon devicons devicons-git"/>
          <span className="techlist__icon devicons devicons-html5"/>
          <span className="techlist__icon devicons devicons devicons-css3"/>
          <span className="techlist__icon devicons devicons-sass"/>
          <span className="techlist__icon devicons devicons-linux"/>
          <span className="techlist__icon devicons devicons devicons-nodejs"/>
          <span className="techlist__icon devicons devicons devicons-react"/>
          <span className="techlist__icon devicons devicons devicons-illustrator"/>
        </div>
      </section>
    );
  }
}

export default ShowHideTech;
