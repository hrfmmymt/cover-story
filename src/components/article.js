import React from 'react'
import ScrollAnim from 'rc-scroll-anim'

const ScrollParallax = ScrollAnim.Parallax
const ScrollElement = ScrollAnim.Element

export default class Article extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {
      css: {
        backgroundColor: '#174270',
        height: 920
      },
      cssNoPosition: true
    }
  }

  onComplete = (e) => {
    console.log(e)
  }

  setCss = (e) => {
    const css = this.state.css
    console.log(e)
    if (this.state.cssNoPosition) {
      css.position = 'fixed'
      css.top = 0
    } else {
      css.position = ''
      css.top = ''
    }
    this.setState({
      css,
      cssNoPosition: !this.state.cssNoPosition
    })
  }

  componentWillMount() {
    if (this.props.didMount) {
      this.props.actions.meta.set({
        title: 'Home Components',
        description: 'This is write by /src/components/home.js actions',
        img: 'home_components.jpeg',
        url: '/src/components/home.js'
      })
    }
  }

  componentDidMount() {
    const resizeBanner = () => {
      const coverHeight = window.innerHeight * 0.80
      document.getElementById('head').setAttribute('style', 'height: ' + Math.floor(coverHeight) + 'px;')
      document.body.setAttribute('style', 'min-height: ' + Math.floor(coverHeight * 2) + 'px;')
    }
    window.onresize = () => {
      if (window.innerWidth < 768) return
      resizeBanner()
    }
    resizeBanner()

    document.querySelector('h1').classList.add('onScreen')

    let stickWithPositionFixed = true

    const handleHeader = () => {
      const scrolled = window.scrollY
      if (stickWithPositionFixed) {
        if (scrolled > document.getElementById('head').offsetHeight) {
          document.getElementById('nav').classList.add('sticked')
        } else {
          document.getElementById('nav').classList.remove('sticked')
        }
      }
    }
    window.addEventListener('scroll', e => {
      handleHeader()
    })
    handleHeader()
  }

  render() {
    return (
      <div className="home">

        {
        /****
         Static view
        ****/ }

        <div id="head" className="static header">
          <h1>hrfmmymt</h1>
        </div>

        <ul id="nav" className="static nav">
          <li><a href="">career</a></li>
          <li><a href="">about</a></li>
        </ul>

        {
        /****
         Scroll Effects 1st. view
        ****/ }

        <div
          className="scrll career"
          style={{
            height: ''
          }}
        >

        <div className="timeline">
          <ul>
            <li>
              <span className="eyebrow">Jan 15th, 2016</span>
              <h1>Some headline</h1>
              <p>This is where we would include some awesome sub-text or description text. This is where we would include some awesome sub-text or description text</p>
              <p>Multiple paragraphs can even be a neat thing we use here.</p>
            </li>
            <li>
              <span className="eyebrow">Jan 15th, 2016</span>
              <h1>Some headline, with an image</h1>
              <p>
                <img src="http://cdn3.vox-cdn.com/thumbor/7VRz3ePD_FUFyQ9FjAWMEyl1LLw=/1600x900/smart/farm8.staticflickr.com/7533/15210464363_28c306612c_k.jpg" />
              </p>
              <p>This is where we would include some awesome sub-text or description text</p></li>
            <li>
              <span className="eyebrow">Jan 15th, 2016, with a longer title to see how it works when it breaks.</span>
              <h1>Item One, some headline</h1>
              <p>This is where we would include some awesome sub-text or description text</p></li>
            <li>
              <span className="eyebrow">Jan 15th, 2016</span>
              <h1>Some headline, with video!</h1>
              <div className="m-video">
                <div className="m-video__inner">
                  <div className="embed">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/-JXfUU7-4JI" frameborder="0" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
              <p>This is where we would include some awesome sub-text or description text</p></li>
            <li>
              <span className="eyebrow">Card Test</span>
              <div className="card">
                <h1>Some headline, but this particular headline is much longer than the other headlines to text character length.</h1>
                <p>This is where we would include some awesome sub-text or description text</p>
              </div>
            </li>
            <li>
              <span className="eyebrow">Jan 15th, 2016</span>
              <h1>Some headline</h1>
              <p>This is where we would include some awesome sub-text or description text. This is where we would include some awesome sub-text or description text</p>
              <p>Multiple paragraphs can even be a neat thing we use here.</p>
            </li>
          </ul>
          <h2 className="break">This is where a section header or timeline breaker would go</h2>
          <ul>
            <li>
              <span className="eyebrow">Card test</span>
              <div className="card">
                <h1>Some headline, with an image</h1>
                <p>
                  <img src="http://cdn3.vox-cdn.com/thumbor/7VRz3ePD_FUFyQ9FjAWMEyl1LLw=/1600x900/smart/farm8.staticflickr.com/7533/15210464363_28c306612c_k.jpg" />
                </p>
                <p>This is where we would include some awesome sub-text or description text</p>
              </div>
            </li>
            <li>
              <span className="eyebrow">Jan 15th, 2016, with a longer title to see how it works when it breaks.</span>
              <h1>Item One, some headline</h1>
              <p>This is where we would include some awesome sub-text or description text</p></li>
            <li>
              <span className="eyebrow">Jan 15th, 2016</span>
              <h1>Some headline, with video!</h1>
              <div className="m-video">
                <div className="m-video__inner">
                  <div className="embed">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/-JXfUU7-4JI" frameborder="0" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
              <p>This is where we would include some awesome sub-text or description text</p></li>
            <li>
              <span className="eyebrow">Jan 15th, 2016 — 3:04pm</span>
              <h1>Some headline, but this particular headline is much longer than the other headlines to text character length.</h1><p>This is where we would include some awesome sub-text or description text</p></li>
          </ul>
        </div>

        </div>
        {/*
          /scrll
        */}

        <div
          className="scrll"
          style={{
            backgroundColor: '#fefcf9',
            position: 'relative',
            overflow: 'hidden',
            height: '100vh'
          }}
        >

          <ScrollParallax
            animation={{ opacity: 1 }}
            always={false}
            style={{ opacity: 0, paddingTop: 60 }}
            className="tween-one"
          >
            ボヤーン
          </ScrollParallax>

          <ScrollParallax
            animation={{ opacity: 1 }}
            style={{ opacity: 0, paddingTop: 0, fontSize: 24 }}
            className="tween-one"
          >
            ボヤーン
          </ScrollParallax>

          <ScrollParallax
            animation={{ scaleX: 1, scaleY: 1 }}
            style={{ transform: 'scale(0)', color: '#fff' }}
            className="demo career__prllx"
          >
            ドーン
          </ScrollParallax>

          <ScrollParallax
            animation={{ rotate: 360 }}
            style={{ transform: 'rotate(0)' }}
            className="demo2 career__prllx"
          >
            ぐるぐる
          </ScrollParallax>

          <ScrollParallax
            animation={{ x: 0, opacity: 1 }}
            style={{
              transform: 'translateX(-200px)',
              opacity: 0,
              backgroundColor: '#133252',
              color: '#fff'
            }}
            className="demo2 career__prllx"
          >
            スッ
          </ScrollParallax>

          <ScrollParallax
            animation={{ rotateY: 360 }}
            style={{ transform: 'perspective(100px) rotateY(0)', backgroundColor: '#0098CE' }}
            className="demo2 career__prllx"
          >
            ヒュン
          </ScrollParallax>

          <ScrollParallax
            animation={{ opacity: 1 }}
            style={{ opacity: 0, paddingTop: 60, fontSize: 24 }}
            className="tween-one"
          >
            aaaaa
          </ScrollParallax>

          <ScrollParallax
            animation={{ blur: '0px', playScale: [0.5, 0.8], opacity: 1 }}
            style={{ filter: 'blur(20px)', opacity: 0, color: '#fff' }}
            className="demo career__prllx"
          >
            モヤア
          </ScrollParallax>

          <ScrollParallax
            animation={{ color: '#fff000', backgroundColor: '#F38EAD', playScale: [0.3, 0.8] }}
            style={{ filter: 'blur(0px)', color: '#fff' }}
            className="demo career__prllx"
          >
            変色
          </ScrollParallax>

          <ScrollParallax
            animation={{ opacity: 1 }}
            style={{ opacity: 0, paddingTop: 60, fontSize: 24 }}
            className="tween-one"
          >
            bbbbb
          </ScrollParallax>

          <ScrollParallax
            animation={[
              { opacity: 1, playScale: [0, 0.2] },
              { blur: '0px', backgroundColor: '#F38EAD', playScale: [0, 0.2] },
              {
                translateX: -100,
                boxShadow: '5px 5px 5px #000',
                color: '#fff000',
                playScale: [0, 0.2]
              },
              { translateX: 100, playScale: [0, 0.2] },
              { translateX: 0, playScale: [0, 0.2] }
            ]}
            style={{ filter: 'blur(10px)', transform: 'translateX(0px)', opacity: 0, color: '#fff' }}
            className="demo career__prllx"
          >
            ヘイヘイ
          </ScrollParallax>
        </div>

        {
        /****
         Scroll Effects 2nd. view
        ****/ }
        <div className="scrll"
          style={{
            backgroundColor: '#0097D0',
            position: 'relative',
            textAlign: 'center',
            fontSize: 36
          }}
        >
          <h2 className="scrll__title">Title 2</h2>
          <ScrollParallax
            animation={{ translateY: 120, opacity: 1, ease: 'linear', playScale: [0, 2] }}
            style={{ transform: 'translateY(420px) scale(.8)', color: '#fff' }}
          >
            <img
              src="//os.alipayobjects.com/rmsportal/CrVCkwvtTQQvQHL.png"
              style={{ width: 100 }}
            />
          </ScrollParallax>
          <ScrollParallax
            animation={{ translateY: 20, opacity: 1, ease: 'linear', playScale: [0, 1.5] }}
            style={{ transform: 'translateY(380px) scale(.9)', color: '#fff' }}
          >
            <img
              src="//os.alipayobjects.com/rmsportal/sfmdyWNlweIvfUh.png"
              style={{ width: 150 }}
            />
          </ScrollParallax>
          <ScrollParallax
            animation={{ translateY: -100, opacity: 1, ease: 'linear', playScale: [0, 1] }}
            style={{ transform: 'translateY(320px)', color: '#fff' }}
          >
            <img
              src="//os.alipayobjects.com/rmsportal/sfmdyWNlweIvfUh.png"
              style={{ width: 200 }}
            />
          </ScrollParallax>
        </div>

        {
        /****
         Scroll Effects last view
        ****/ }
        <ScrollElement
          style={{ height: 2000 }}
          id="Scroll-Pack"
          className="last"
        >
          <ScrollParallax
            className="scrll"
            location="Scroll-Pack"
            animation={{
              backgroundColor: '#0097D0',
              playScale: [1, 2],
              onStart: () => {
                this.setCss('start')
              },
              onCompleteBack: () => {
                this.setCss('back complete')
              },
              onComplete: () => {
                this.onComplete('complete')
              },
              onStartBack: () => {
                this.onComplete('back start')
              }
            }}
            style={this.state.css}
            className="last__inner"
          >
            <ScrollParallax
              animation={{ translateX: '0%', playScale: [1, 2] }}
              style={{
                transform: 'translateX(-100%)',
                backgroundColor: '#F38EAD',
                width: '100vw',
                height: '100vh',
                position: 'absolute'
              }}
              location="Scroll-Pack"
            />
            <ScrollParallax
              animation={[{ translateY: 0 }, { translateY: '450px' }]}
              location="Scroll-Pack"
              style={{
                transform: 'translateY(300px)',
                color: '#fff',
                fontSize: 36,
                textAlign: 'center'
              }}
            >
              <h2 className="scrll__title">Title 3</h2>
            </ScrollParallax>
          </ScrollParallax>
        </ScrollElement>
      </div>
    )
  }
}
