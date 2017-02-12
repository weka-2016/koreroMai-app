const React = require('react')
const ReactDOM = require('react-dom')
const { Provider } = require('react-redux')
const { createStore, applyMiddleware, compose } = require('redux')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')
const URL = require('url-parse')
const { routerMiddleware, push } = require('react-router-redux')

const reducer = require('./reducers')
const initialState = require('../state')
require('./style/main.scss') // magic?

//Top Level Components
const App = require('./app')
const Home = require('./containers/home')
const ActivityChoiceBox = require('./containers/activityChoiceBox')
const LearnSounds = require('./containers/learnSounds')
const LearnWords = require('./containers/learnWords')
const PracticeSounds = require('./containers/practiceSounds')
const PracticeWords = require('./containers/practiceWords')
const AuthForm = require('./containers/auth-form')
const UserProfile = require('./containers/userProfile')
const middleware = routerMiddleware(hashHistory)

const store = createStore(reducer, initialState, applyMiddleware(middleware))

store.subscribe(()=> {
	console.log('Index.js state log', store.getState());
})

// hashHistory.listen((ev) => {
//   //listen to window.location directly?
//   const paths = ev.pathname.split('/')
//   if (paths[1] === 'users'){
    
//   }
// })

const Root = ({store}) => (
  <Provider store = {store}>
    <Router history = {hashHistory}>
      <Route path = '/' component={App} >
        <IndexRoute component={Home} />
        <Route path = '/home' component={Home} />

        <Route path = '/activity'>
          <IndexRoute component={ActivityChoiceBox} />
          <Route path ='learn/sounds/:id' component={LearnSounds} />
          <Route path ='learn/words/:id' component={LearnWords} />
          <Route path ='practice/sounds/:id' component={PracticeSounds} />
          <Route path ='practice/words/:id' component={PracticeWords} />
        </Route>

        <Route path = '/login-register' component={AuthForm} />
        <Route path = 'users/:id/profile' component={UserProfile} />
      </Route>
    </Router>
  </Provider>
)


document.addEventListener('DOMContentLoaded', () => {
	console.log('DOMContentLoaded');
	const root = document.querySelector('#app')

	ReactDOM.render(
		<Root store={store}/>,
		root
	)
})
