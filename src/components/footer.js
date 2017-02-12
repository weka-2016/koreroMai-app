const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

function Footer(props) {

  return (
    <div>
    <footer id="footer">
  				<div class="row text-center">
  					<div class="footer-content">
  							<p>newsletter signup</p>
  							<p>&copy; 2017 Contact us - koreromaiapp@gmail.com</p>
  						</div>
  					</div>
  		</footer>
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
