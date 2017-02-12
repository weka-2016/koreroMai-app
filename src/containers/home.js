const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

function Home(props) {
  return (
    <div className='homepage-div'>

      <div className='row main-heading'>
        <div className='columns small-centered small-12 medium-6 large-4'>
          <h1 className="h1-home">Kōrero Mai</h1>
        </div>
      </div>
      <div className='row sub-heading'>
        <div className='columns small-centered small-12 medium-6 large-4'>
          <h2 className="h2-home">Learn Te Reo!</h2>
        </div>
      </div>
      <div className='row main-button'>
        <div className='columns small-centered small-12 medium-6 large-4'>
          <Link to="activity"><button className="play-button" >PLAY!</button></Link>
        </div>
      </div>

    </div>
  )
}

module.exports = connect((state) => state)(Home)

        // </div>
