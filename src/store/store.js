import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import { actions } from './actions'

Vue.use(Vuex)

/**
 * Vue의 상태관리를 담당함
 * 컴포넌트 간의 통신이나 데이터 전달을 좀 더 유기적으로 관리
 * 컴포넌트 간 데이터 전달 및 이벤트 통신 등의 여러 컴포넌트의 공통 데이터 상태를 관리함
 */
export default new Vuex.Store({
  /**
   * global로 사용하는 state
   * component 간 공유될 전역 data를 관리
   * 예)
   * this.$store.state.CONSTANTS;
   */
  state: {
    isDummy : false,
    diagnose : true,
    /**
     * userinfo는 단말기(안드로이드)기에서 받아온다.
     *
     * func : getInitVariables()
     * return : {"grade":"0","name":"홈런초등테스트1","key":"1604311","device_type":"1002"}
     *
     * DEVICE_TYPE_N = "1001"    // N형 디바이스
     * DEVICE_TYPE_AI = "1002"   // AI 신형 디바이스
     * DEVICE_TYPE_LH = "1003"   // 리틀홈런 디바이스
     * DEVICE_TYPE_WEB = "1004"   // 독립웹
     * DEVICE_TYPE_MB = "1005"   // 하이브리드 앱(android or ios)
     *
     */
    userinfo: {
      name: '홈런초등테스트1',
      key: '1604311',
      grade: 0,
      device_type: "1002"
    },
    /**
     * API session options
     */
    session: {
      'user_id': 'domfamtest1110',
      'user_auth_key': 'abcdefghijklmnopqrstuvwxyz0123456789',
      'Content_Language': 'ko',
      'device_type': '1001'
    },
    subject: {},
    userGallery: {},
    UserGalleryMypicture: {},

    canvasTimer: {
      timeInitVal: null,
      time: null,
      timer: null,
      timeOver : false,
    },
    playerOptions: {
      autoplay: false,
      controls: true,
      sources: [
        {
          src: '',
          type: ''
        }
      ],
      width: 0,
      height: 0,
      liveui: false,
      Thumnail : ''
    },
    letter : {},
    bg : {
      imgUrl : '',
      subject : '',
      active : false,
      type : 'hide'
    }
  },
  /**
   * global로 사용하는 getters
   * 각 컴포넌트에서 Vuex의 데이터를 접근할 때 중복된 코드를 반복호출 하게 될 때 여기서 정의 해 중복을 없앤다.
   * 데이터 호출에 관련된 중복 공통 로직이 정의 됨
   * 예)
   * this.$store.getters.CONSTANTS
   */
  getters: {
    getUserInfo: state => {
      return state.userinfo
    },
    getSession: state => {
      return state.session
    },
    getSubject: state => {
      return state.subject
    },
    getUserGallery: state => {
      return state.userGallery
    },
    getUserGalleryMypicture: state => {
      return state.UserGalleryMypicture
    },

    getIsDummy: state => {
      return state.isDummy
    },
    getDiagnose: state => {
      return state.diagnose
    },

    getCanvasTimer: state => {
      return state.canvasTimer
    },
    getPlayerOptions: state => {
      return state.playerOptions
    },
    getLetterIntro: state => {
      return {
        stageId : state.letter.stageId,
        stageName : state.letter.stageName,
        stepSubejct : state.letter.stepSubejct,
        stepImageUrl : state.letter.stepImageUrl,
        stepAudioMainText : state.letter.stepAudioMainText,
        stepAudioSubText : state.letter.stepAudioSubText
      }
    },
    getLetterAudioList : state => {
      return state.letter.audioCharacterList
    },
    getLetterCanvasList : state => {
      return state.letter.canvasList
    },
    getBg :state => {
      return state.bg
    }
  },
  /**
   * global로 사용하는 Mutations
   */
  mutations: mutations,
  /**
   * global로 사용하는 Actions
   */
  actions: actions
})
