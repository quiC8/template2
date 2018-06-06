import $ from 'jquery'
import bowser from 'bowser'
const UserAgent = (() => {
  const $html = $('html')
  const checkDevice = () => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      $html.addClass('touch')
    } else {
      $html.addClass('no-touch')
    }
  }
  const detectBrowser = () => {
    var browserName = bowser.name
    var $body = $('html')
    if (browserName === 'Chrome') {
      $body.addClass('chrome')
    }
    if (browserName === 'Firefox') {
      $body.addClass('firefox')
    }
    if (browserName === 'Internet Explorer') {
      $body.addClass('ie')
    }
    if (browserName === 'Microsoft Edge') {
      $body.addClass('edge')
    }
    if (browserName === 'Safari') {
      $body.addClass('safari')
    }
  }
  const selectpicker = () => {
    $('.selectpicker').selectpicker({
      template: {
        caret: '<i class="fa fa-angle-down caret" aria-hidden="true"></i>'
      }
    })
  }
  checkDevice()
  detectBrowser()
  selectpicker()
})()
export default UserAgent
