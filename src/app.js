const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const Nav = require('./components/nav')
const Footer = require('./components/footer')


const App = ({children}) => (
  <div>
    <Nav />
    {children}
    <Footer />
  </div>
)

module.exports = connect((state) => state)(App)
