export const mutations = {
  setUserInfo (state, userInfo) {
    state.userinfo = userInfo
  },
  setSession (state, session) {
    state.session = session
    // state.session = {
    //   ...state.session,
    //   ...session
    // }
  },
  setSubject (state, subject) {
    state.subject = subject
  },
  setUserGallery (state, userGallery) {
    state.userGallery = userGallery
  },
  setUserGalleryMypicture (state, mypicture) {
    state.UserGalleryMypicture = mypicture
  },
  setUserAudio (state, userAudio) {
    state.letter = {
      ...state.letter,
      userAudio: {
        ...userAudio
      }
    }
  },


  /* timer */
  setTimeInit (state, timeInitVal) {
    state.canvasTimer.timeInitVal = timeInitVal
    state.canvasTimer.time = timeInitVal
    // console.log('\nsetTimeInit..')
    // console.log(JSON.stringify(state.canvasTimer))
  },
  setTimerStart (state) {
    state.canvasTimer.timeOver = false
    state.canvasTimer.time = state.canvasTimer.timeInitVal
    state.canvasTimer.timer = setInterval(() => {
      if (state.canvasTimer.time === 0) {
        state.canvasTimer.timeOver=true
        clearInterval(state.canvasTimer.timer)
      }
      if (state.canvasTimer.time > 0) {
        state.canvasTimer.time--
      }
    }, 1000)
  },

  setTimerReset (state) {
    state.canvasTimer.time = state.canvasTimer.timeInitVal
    clearInterval(state.canvasTimer.timer)
    state.canvasTimer.timer = null
  },

  setTimerPause (state) {
    clearInterval(state.canvasTimer.timer)
  },

  setTimerResume (state) {
    state.canvasTimer.timer = setInterval(() => {
      if (state.canvasTimer.time === 0) {
        state.canvasTimer.timeOver = true
        clearInterval(state.canvasTimer.timer)
      }
      if (state.canvasTimer.time > 0) {
        state.canvasTimer.time--
      }
    }, 1000)
  },
  /* // timer */
  setLetter(state, letter){
    state.canvasList = []
    letter.stepPictureList.forEach(function(pictureList){
      if (pictureList.drawEnded === 'N') {
        letter.canvasList.forEach(function(canvasList,j){
          if (canvasList.imageId === pictureList.canvasImageId) {
            state.canvasList.push(canvasList)
          }
        });
      }
    });
    state.letter = letter
  },
  setPlayerUrl(state, url){
    state.playerOptions = {...state.playerOptions, ...url}
  },
  setPlayerSize(state, size){
    state.playerOptions = {...state.playerOptions, ...size}
  },
  setBg(state, bg) {
    if (bg.reset) state.bg = { active : false, isShow : false}
    else state.bg = { ...state.bg, ...bg }
  },
  setSubmission(state, submission) {
    state.submission = submission
  }
}
