const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

function Footer(props) {

  return (
    <div className='footer'>
      <footer className="footer">
        <div className="row full-width">
          <div className="small-12 medium-3 large-4 columns">
            <i className="fi-laptop"></i>
            <p>L!</p>
          </div>
        </div>
      </footer>
      { contactInfo() }
    </div>
  )
}

module.exports = connect((state) => state)(Footer)

function contactInfo(){
  return (
    <div>
      <h4> &copy; 2017 Contact us - koreromaiapp@gmail.com
      </h4>
    </div>
  )
}
