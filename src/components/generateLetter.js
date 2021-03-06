const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

function GenerateLetter(props) {
  return (
      lettersArr.map((letter,index)=>{
        if (letter === answer) {
          return (
          <div>
            <div className="row">
              <div className="columns">
                <audio ref={`${letter}`} >
                  <source src={`${letters[letter].soundFile}`} preload=''/>
                </audio>
              </div>
            </div>
            <div className="row">
              <div className="columns">
                <button onClick={() => this.playSound(letter)} className={`button radius`}>
                  {letter}
                </button>
              </div>
            </div>
          </div>
          )
        } else {
          return (
            <div>
              <div className="row">
                <div className="columns">
                  <audio ref={`${letter}`} >
                    <source src={`${letters[letter].soundFile}`} preload=''/>
                  </audio>
                </div>
              </div>
              <div className="row">
                <div className="columns" onClick={() => dispatch({type: 'INCREMENT_WRONGSOUNDS'})}>
                  <button onClick={() => this.playSound(letter)} className={`button radius`}>
                    {letter}
                  </button>
                </div>
              </div>
            </div>
          )
        }
      })
  )
}

module.exports = connect((state) => state)(GenerateLetter)
