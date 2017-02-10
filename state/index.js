import { routerMiddleware, push } from 'react-router-redux'

module.exports = {
 letters: {
   hi:{
     soundFile: 'mp3',
     imageFile: 'img',
   },
   te:{
     soundFile: 'mp3',
     imageFile: 'img',
   },
   ka:{
     soundFile: 'mp3',
     imageFile: 'img',
   },
   me:{
     soundFile: 'mp3',
     imageFile: 'img',
   },
   he:{
     soundFile: 'mp3',
     imageFile: 'img',
   },
   ph:{
     soundFile: 'mp3',
     imageFile: 'img',
   }
 },
 soundPage :{
     1:['hi','te','ka'],
     2:['me','he','ph'],
     3:['ka','hi','te'],
     4:['ph','me','te'],
     5:['hi','me','ph']
   }
}
