import $ from 'jquery'
import 'slick-carousel'

const Banner = (($) => {
  const NAME = 'banner'
  const DATA_KEY = `bs.${NAME}`
  const EVENT_KEY = `.${DATA_KEY}`
  const DATA_API_KEY = '.data-api'
  const Event = {
    LOAD_DATA_API: `load${EVENT_KEY}${DATA_API_KEY}`,
    CLICK_DATA_API: `click${EVENT_KEY}${DATA_API_KEY}`
  }
  const Default = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    speed: 1000,
    arrows: false,
    rows: 0,
    autoplay: true,
    autoplaySpeed: 5000
  }
  const Selector = {
    DATA_MODULE: `[data-module="${NAME}"]`
  }

  class Banner {
    constructor (element, config) {
      this._element = $(element)
      this._config = this._getConfig(config)
      this.callSlider()
      this.controlSlider()
    }
    // public api
    static get Default () {
      return Default
    }
    callSlider () {
      if (this._element.find('.item-banner').length > 1) {
        this._element.slick(this._config)
      } else {
        this._element.addClass('one-item')
      }
    }

    controlSlider () {
      $('.slicks-next').click(() => {
        this._element.slick('slickNext')
      })
      $('.slicks-prev').click(() => {
        this._element.slick('slickPrev')
      })
    }

    _getConfig (config) {
      config = $.extend({}, Default, config)
      return config
    }
    static _jQueryInterface (config) {
      return this.each(function () {
        const $element = $(this)
        const _config = $.extend(
          {},
          Default,
          $element.data(),
          typeof config === 'object' && config
        )
        let data = $element.data(DATA_KEY)
        if (!data) {
          data = new Banner(this, _config)
          $element.data(DATA_KEY, data)
        }
      })
    }
  }

  /**
   * Data Api implement
   */
  $(window).on(Event.LOAD_DATA_API, () => {
    Banner._jQueryInterface.call($(Selector.DATA_MODULE))
  })

  /**
   * jQuery
   */
  $.fn[NAME] = Banner._jQueryInterface
  $.fn[NAME].Constructor = Banner

  return Banner
})($)

export default Banner
