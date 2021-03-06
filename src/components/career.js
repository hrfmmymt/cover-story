import React from 'react'
import { Link } from 'react-router'
import ScrollAnim from 'rc-scroll-anim'

const ScrollParallax = ScrollAnim.Parallax
const ScrollElement = ScrollAnim.Element

export default class Career extends React.Component {
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
        title: 'Career Components',
        description: '/src/components/career.js actions',
        img: 'career_components.jpeg',
        url: '/src/components/career.js'
      })
    }
  }

  render() {
    return (
      <div className="career">
        {
        /****
         Scroll Effects 1st. view
        ****/
        }

        <div
          className="scrll"
          style={{
            height: ''
          }}
        >

          <div className="timeline">

            <Link to="/career/m-site">
              <div className="entry">
                <div className="title">
                  <h3><time>2011.06</time></h3>
                </div>
                <div className="body">
                  <h4>音楽関係 アーティスト公式Webサイト構築</h4>
                </div>
              </div>
            </Link>

            <Link to="/career/m-blog">
              <div className="entry">
                <div className="title">
                  <h3><time>2011.09</time></h3>
                </div>
                <div className="body">
                  <h4>音楽関係 アーティスト公式ブログ構築</h4>
                </div>
              </div>
            </Link>

            <Link to="/career/brrnca">
              <div className="entry">
                <div className="title">
                  <h3><time>2012.03</time></h3>
                </div>
                <div className="body">
                  <h4>結婚式場など複合施設向けWebサイト構築</h4>
                </div>
              </div>
            </Link>

            <Link to="/career/tllshs">
              <div className="entry">
                <div className="title">
                  <h3><time>2012.05</time></h3>
                </div>
                <div className="body">
                  <h4>小売業向けECサイト保守・運用</h4>
                </div>
              </div>
            </Link>

            <Link to="/career/a-sha">
              <div className="entry">
                <div className="title">
                  <h3><time>2012.08</time></h3>
                </div>
                <div className="body">
                  <h4>スマートフォン用ソーシャルゲーム</h4>
                </div>
              </div>
            </Link>

            <Link to="/career/sier-ngtch">
              <div className="entry">
                <div className="title">
                  <h3><time>2013.05</time></h3>
                </div>
                <div className="body">
                  <h4>ファイナンシャルプランナー向け業務用Webアプリ</h4>
                </div>
              </div>
            </Link>

            <Link to="/career/sier-ykhm">
              <div className="entry">
                <div className="title">
                  <h3><time>2013.11</time></h3>
                </div>
                <div className="body">
                  <h4>小売業者向け 顧客動向データ可視化Webアプリ</h4>
                </div>
              </div>
            </Link>

            <Link to="/career/intllgnc">
              <div className="entry">
                <div className="title">
                  <h3><time>2014.01</time></h3>
                </div>
                <div className="body">
                  <h4>SPサイト、PCサイト</h4>
                </div>
              </div>
            </Link>

            <Link to="/career/gcrst">
              <div className="entry">
                <div className="title">
                  <h3><time>2014.07</time></h3>
                </div>
                <div className="body">
                  <h4>スマートフォン用ソーシャルゲーム</h4>
                </div>
              </div>
            </Link>

            <Link to="/career/kl-vg">
              <div className="entry">
                <div className="title">
                  <h3><time>2014.10</time></h3>
                </div>
                <div className="body">
                  <h4>広告配信システム管理画面</h4>
                </div>
              </div>
            </Link>

            <Link to="/career/adv">
              <div className="entry">
                <div className="title">
                  <h3><time>2015.10</time></h3>
                </div>
                <div className="body">
                  <h4>航空券予約サイト</h4>
                </div>
              </div>
            </Link>

          </div>
          {/*
            /timeline
          */}

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
            style={{ transform: 'perspective(100px) rotateY(0)', backgroundColor: '#0098ce' }}
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
            animation={{ color: '#fff000', backgroundColor: '#f38ead', playScale: [0.3, 0.8] }}
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
              { blur: '0px', backgroundColor: '#f38ead', playScale: [0, 0.2] },
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
            backgroundColor: '#0097d0',
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
            className="scrll last__inner"
            location="Scroll-Pack"
            animation={{
              backgroundColor: '#0097d0',
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
          >
            <ScrollParallax
              animation={{ translateX: '0%', playScale: [1, 2] }}
              style={{
                transform: 'translateX(-100%)',
                backgroundColor: '#f38ead',
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

Career.propTypes = {
  didMount: React.PropTypes.bool,
  actions: React.PropTypes.object
}
