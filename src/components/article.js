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

          <div className="career__wrapper">

            <aside>
              { /* wide screen */ }
              <div className="chapter">
                <h1>2014</h1>
              </div>
            </aside>
            <article>
              { /* narrow screen */ }
              <div className="chapter">
                <h1>2014</h1>
              </div>

              <h2 className="title">Development of social game for smartphone</h2>
              <div className="cover-img">
                <img src="//i.huffpost.com/gen/1685103/images/o-SMARTPHONE-GAME-facebook.jpg" alt="cover image" />
              </div>

              <div className="content">
                <h3>Coding.</h3>
                <blockquote className="right">Almost, it turned into a person who implements dynamic UI with JavaScript coding. Grunt used it in a file minifi or some tasks.<br />
                I hit the wall of object-oriented programming. Currently in progressive form.
                </blockquote>
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript (jQuery, AngularJS, Grunt)</li>
                  <li>Java (Velocity)</li>
                  <li>Sublime Text / Eclipse</li>
                  <li>Subversion</li>
                </ul>

                <hr className="flourish" />

                <h3>Output at this time</h3>

                <p>
                  <img className="right" src="//s-media-cache-ak0.pinimg.com/originals/3d/e3/8c/3de38c1ab9551c4468800f13ea604386.jpg" width="400" height="" alt="image" />
                  I started writing Qiita. However, I have written almost only this time.
                </p>
                <ul>
                  <li><a href="//qiita.com/hrfmmymt/items/e3ed8138a3218ad2b794" target="_blank" rel="noreferrer noopener">AngularJSのng-optionsで自動生成するoptionタグに任意のvalueをセットする</a></li>
                  <li><a href="//qiita.com/hrfmmymt/items/350dd409bd82106e752a" target="_blank" rel="noreferrer noopener">オブジェクトの配列でkey/valueの重複したオブジェクトを削除する</a></li>
                  <li><a href="//qiita.com/hrfmmymt/items/af79e5e3ffacac3765e5" target="_blank" rel="noreferrer noopener">Re: AngularJSで連動するSELECTタグを作る</a></li>
                  <li><a href="//qiita.com/hrfmmymt/items/59aa2d9921f3432aa130" target="_blank" rel="noreferrer noopener">BrowserSync使って自IPでサーバー立ち上げてwatchしてreloadするgulpfile</a></li>
                  <li><a href="//qiita.com/hrfmmymt/items/280f140c2682f085e8fa" target="_blank" rel="noreferrer noopener">可変するtextareaの幅に合わせて広がる親div</a></li>
                </ul>

              </div>
            </article>
          </div>

          <div className="career__wrapper">
            <aside>
              { /* wide screen */ }
              <div className="chapter">
                <h1>2014</h1>
              </div>
            </aside>

            <article>
              { /* narrow screen */ }
              <div className="chapter">
                <h1>2014</h1>
              </div>

              <h2 className="title">Development of advertisement distribution system<br />management screen</h2>
              <div className="cover-img">
                <img src="//speckycdn-sdm.netdna-ssl.com/wp-content/uploads/2014/08/mthly_freebies_sept_39.jpg" alt="cover image" />
              </div>

              <div className="content">
                <h3>Coding, UI design, code review.</h3>
                <blockquote className="right">いわゆる管理画面です。FWはAngularJSのAngular-Seedをベースに使用しています。グラフはGoogle Chart Toolsを使用しています。<br />Angular難しいです。</blockquote>
                <ul>
                  <li>HTML5</li>
                  <li>CSS3 (Less、Bootstrap)</li>
                  <li>JavaScript (AngularJS, Gulp)</li>
                  <li>Sublime Text / Vim</li>
                  <li>Git (GitHub)</li>
                  <li>Redmine</li>
                </ul>

                <hr className="flourish" />

                <h3>Output at this time</h3>

                <p>
                  <img className="right" src="//s-media-cache-ak0.pinimg.com/originals/3d/e3/8c/3de38c1ab9551c4468800f13ea604386.jpg" width="400" height="" alt="image" />
                  I started writing Qiita. However, I have written almost only this time.
                </p>
                <ul>
                  <li><a href="//qiita.com/hrfmmymt/items/e3ed8138a3218ad2b794" target="_blank" rel="noreferrer noopener">AngularJSのng-optionsで自動生成するoptionタグに任意のvalueをセットする</a></li>
                  <li><a href="//qiita.com/hrfmmymt/items/350dd409bd82106e752a" target="_blank" rel="noreferrer noopener">オブジェクトの配列でkey/valueの重複したオブジェクトを削除する</a></li>
                  <li><a href="//qiita.com/hrfmmymt/items/af79e5e3ffacac3765e5" target="_blank" rel="noreferrer noopener">Re: AngularJSで連動するSELECTタグを作る</a></li>
                  <li><a href="//qiita.com/hrfmmymt/items/59aa2d9921f3432aa130" target="_blank" rel="noreferrer noopener">BrowserSync使って自IPでサーバー立ち上げてwatchしてreloadするgulpfile</a></li>
                  <li><a href="//qiita.com/hrfmmymt/items/280f140c2682f085e8fa" target="_blank" rel="noreferrer noopener">可変するtextareaの幅に合わせて広がる親div</a></li>
                </ul>

              </div>
            </article>
          </div>

          <div className="career__wrapper">

            <aside>
              { /* wide screen */ }
              <div className="chapter">
                <h1>2015</h1>
              </div>
            </aside>
            <article>
              { /* narrow screen */ }
              <div className="chapter">
                <h1>2015</h1>
              </div>

              <h2 className="title">Development of a ticket reservation site</h2>
              <div className="cover-img">
                <img src="//speckycdn-sdm.netdna-ssl.com/wp-content/uploads/2014/08/mthly_freebies_sept_39.jpg" alt="cover image" />
              </div>

              <div className="content">
                <h3>Coding, UI design, performance improvement, etc.<br />{'I' + "'" + 'm doing front-end work in general.'}</h3>
                <blockquote className="right">We performed page coding and refactoring of new and existing services, SEO improvement, performance improvement, A / B test and other related work.</blockquote>
                <ul>
                  <li>HTML5</li>
                  <li>CSS3 (Sass)</li>
                  <li>JavaScript (jQuery, Babel, Gulp)</li>
                  <li>PHP (WordPress, CakePHP)</li>
                  <li>Sublime Text / Vim</li>
                  <li>Subversion, Git</li>
                </ul>

                <hr className="flourish" />

                <h3>Output at this time</h3>

                <p>
                  <img className="right" src="https://unsplash.it/400/300" alt="image" />
                  There are many
                </p>
                <ul>
                  <li><a href="//hrfmmymt.tumblr.com/post/150112369172/tab-ui-a11y" target="_blank" rel="noreferrer noopener">Tab UI a11y</a></li>
                  <li><a href="//hrfmmymt.tumblr.com/post/153467874547/backlog-%E3%81%AE%E3%83%87%E3%82%B9%E3%82%AF%E3%83%88%E3%83%83%E3%83%97%E3%82%A2%E3%83%97%E3%83%AA" target="_blank" rel="noreferrer noopener">Backlog のデスクトップアプリ</a></li>
                  <li><a href="//hrfmmymt.tumblr.com/post/154415967187/electron-%E4%B8%80%E5%B9%B4%E6%8C%AF%E3%82%8A%E3%81%AE-%E6%89%80%E6%84%9F%E3%81%AA%E3%81%A9" target="_blank" rel="noreferrer noopener">Electron 一年振りの 所感など</a></li>
                  <li><a href="//hrfmmymt.tumblr.com/post/156709551777/%E6%9F%BF%E9%A3%9F%E3%81%88%E3%81%B0-react-babel-webpack" target="_blank" rel="noreferrer noopener">柿食えば React - Babel - Webpack</a></li>
                  <li><a href="//hrfmmymt.tumblr.com/post/157476153442/react-%E3%81%A7-wai-aria-%E5%AF%BE%E5%BF%9C%E3%81%AE-modal-dialog-window-%E3%82%92%E5%AE%9F%E8%A3%85%E3%81%97%E3%81%9F" target="_blank" rel="noreferrer noopener">React で WAI-ARIA 対応の modal dialog (window) を実装した</a></li>
                </ul>

              </div>
            </article>
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
