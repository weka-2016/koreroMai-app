const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const Modal = require('react-modal');

const modalStyle = {
  content:{
    top:'20%',
    left:'50%',
    right:'auto',
    bottom:'auto',
    marginRight:'-50%',
    transform:'translate(-50%, -50%)'
  }
}

class LearnSounds extends React.Component {

  componentWillMount() {
    Modal.setAppElement('body');
  }

  playSound(index) {
    this.refs[index].load()
    this.refs[index].play()
  }

  generateLetter(lettersArr,letters){
      return lettersArr.map((letter,index)=>{
        return (
          <div className='row'>
            <div className='colums small-centered small-12 medium-6 large-4'>
              <audio ref={`${index}`} >
                <source src={`${letters[letter].soundFile}`} preload=''/>
              </audio>
              <button onClick={() => this.playSound(index)} className={`button-radius`}>
                {letter}
              </button>
          </div>
        </div>
        )
      })
    }

  render() {
    const { dispatch, params, modal, letters, learnSoundPage } = this.props
    const level = Number(params.id)
    const activityRoute = 'activity/learn/sounds/'
    const lettersArr = learnSoundPage[level]

    if (level === 1) {
      return ( levelOneButton)
    } else if (level === 5){
      return levelFiveButton
    } else return (
      return defaultBitton
    )
  }
}

module.exports = connect((state) => state)(LearnSounds)


function LevelOneButton () {
        <div>
          <h1>Learn how to pronounce Te Reo !</h1>
          <div className="playBox">
            {this.generateLetter(lettersArr, letters)}
            <div className='row'>
              <div className='colums small-centered small-10 medium-6 large-4'>
              <Link to='activity'><button className="first-back">Back</button></Link>
              <Link to={activityRoute+(level+1)}><button className="first-next">Next</button></Link>
              </div>
            </div>
          </div>
        </div>

}
