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

    const u = document.querySelector;

    let stickWithPositionFixed = true
    if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
      stickWithPositionFixed = false
      const stickyElements = document.getElementsByClassName('sticky')
      for (let i = stickyElements.length - 1; i >= 0; i--) {
        Stickyfill.add(stickyElements[i])
      }
    }

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
            backgroundColor: '#fefcf9',
            position: 'relative',
            overflow: 'hidden',
            height: ''
          }}
        >

          <header>
            <div className="category"><span>Lorem ipsum dolor sit amet, consectetur</span></div>
            <i className="fa fa-arrow-left fa-3x" />
          </header>
          <div className="career__wrapper">

            <aside>
              <div className="chapter">
                <h1>2014</h1>
              </div>
            </aside>
            <article>
              <div className="chapter">
                <h1>2014</h1>
              </div>
              <h2 className="title">Lorem ipsum dolor robero, <br />sit maime error illum ullam aspernatur</h2>
              <div className="cover-img"><img src="https://unsplash.it/640/330" alt="cover image" /></div>
              <div className="content first">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime error illum, eum placeat quae molestias repudiandae ipsa odit, ab incidunt molestiae, repellendus quam perspiciatis laborum praesentium id doloremque nostrum sit cum fugit. Vero incidunt
                  iste ipsam, explicabo illum libero, enim ullam tenetur id, quaerat sapiente.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ratione asperiores, quam labore ullam dolore a neque molestiae! Facere atque nobis voluptas! Blanditiis tempora adipisci quis nemo expedita voluptate a aspernatur suscipit reiciendis nesciunt possimus illum, assumenda sequi eius voluptas neque! Libero, laborum quos ut corporis totam ducimus magnam quasi, quod pariatur distinctio, alias commodi enim dolores earum obcaecati! Numquam.</p>

                <ul>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eveniet dolor sequi accusantium, voluptatum mollitia, dolores voluptates omnis officia praesentium veritatis? Dolorum, delectus expedita!</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum voluptatum deserunt facere voluptas similique ullam doloremque minus harum praesentium, veritatis vel obcaecati fuga dicta molestias error! Sequi.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quod.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea sapiente molestias quam iste dolorem non itaque vitae ullam.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque magni beatae, eligendi distinctio. Cum, tempora atque inventore repellat ipsum dolore ipsam maxime mollitia sequi earum odit enim consectetur possimus quasi, iusto deleniti et ad. Consectetur vero reiciendis soluta sint, itaque, repellendus molestias consequatur dolorem iure.</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, fugit, repudiandae. Ad facilis, possimus enim, voluptatum aperiam facere nihil totam!</p>
              </div>
              <hr className="flourish" />
              <div className="content">
                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et deserunt beatae assumenda saepe dolorem molestiae voluptatem quisquam commodi consequatur tempora. In quisquam rerum repellendus. Cumque architecto atque, maiores necessitatibus. Expedita commodi dolores quos reprehenderit, possimus vel aliquid ducimus ea doloremque nulla beatae harum blanditiis minus officiis eius fuga quod error facilis debitis rem. Sapiente commodi, maiores accusamus earum, animi nihil eos dicta eveniet impedit pariatur eius perspiciatis quis officia quia eligendi ducimus enim possimus nam iusto ipsa itaque sunt rerum quo reiciendis. Tenetur consequuntur quasi numquam omnis perspiciatis laudantium quisquam magnam, labore voluptas, autem ipsam. Consequatur eaque provident molestias doloremque.</p>
                <blockquote className="right">
                  Now this is a story all about how my life got flipped - turned upside down. And I'd like to take a minute just sit right there, I'll tell you how I became the prince of a town called Bel-Air.
                </blockquote>
                <p>
                  <img className="right" src="https://unsplash.it/400/300" alt="image" />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae consequatur est sit non, laboriosam odit quidem mollitia minus. Doloremque eum, atque sunt. Quisquam, totam. Quidem perspiciatis cumque facere blanditiis aspernatur corrupti ut alias et odio aut at consectetur voluptatibus possimus rerum animi sapiente quibusdam suscipit, id modi ex deserunt omnis ipsum architecto nam. Consequuntur, quam culpa. Nisi quidem accusamus voluptates enim cupiditate ullam adipisci dolorem.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis voluptatem, in ad consequuntur inventore voluptatum excepturi amet corporis vel, sed magnam nulla, id. Quam voluptatem quae ipsa corporis tenetur nisi eius amet sint magnam eligendi. Error sequi distinctio officia quia laborum maiores delectus provident vero, architecto qui cupiditate harum totam ea, facilis quas quae non earum ab eveniet quo nulla quis porro vitae. Rem minus nam quas nesciunt eos sed corporis nostrum neque, quia praesentium aperiam! Consectetur optio magnam ab!</p>
                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
                <p><img src="https://unsplash.it/220/400" alt="" className="left" />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam modi sed minima consequuntur laborum porro doloribus unde alias, eligendi vel voluptas optio ipsum quae!</p>
                <h4>Lorem ipsum dolor sit amet, consectetur.</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nihil eaque quaerat, facilis dolorum suscipit, saepe maiores, optio libero dignissimos nam iure. Quaerat itaque, reprehenderit possimus cumque fuga, maxime nihil earum accusantium natus veritatis culpa quisquam optio. Harum, facilis. Quas impedit voluptates quia repellat suscipit officia quis, doloremque, beatae consequatur, quaerat commodi! Necessitatibus dolore, ipsum laudantium aperiam placeat doloribus cum. Itaque a unde totam nam sequi provident accusamus, tenetur impedit temporibus. Rerum velit voluptas eum natus cupiditate quos harum nesciunt.</p>
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, illum. Mollitia molestiae recusandae fugit dignissimos quae fugiat necessitatibus aperiam quaerat sapiente, officiis labore ullam rerum ex accusamus ratione assumenda consectetur velit ipsa odit dolorem voluptatibus nihil. Atque sunt, eveniet mollitia repellat deserunt nesciunt repellendus minus! In itaque, rerum voluptatum eum deleniti neque quis harum ipsam enim! Ex ab quas consequatur provident debitis. Facilis dignissimos laboriosam corporis, quam ipsam, sint officiis, sunt nam temporibus magni quae quisquam nihil animi minima ab! Fugiat blanditiis necessitatibus pariatur modi dolorum itaque sunt quibusdam amet quisquam corrupti similique voluptate in, quas fuga veniam harum ex.</p>
                <blockquote className="full left">
                  I had a dream I could buy my way to heaven, <br />
                  when I awoke, I spent that on a necklace <br />
                  I told God I'd be back in a second; <br />
                  Man it's so hard not to act reckless.
                </blockquote>
                <hr className="flourish" />
                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
                <p><img src="https://unsplash.it/1100/500/" alt="cover-image-2" /></p>
              </div>
              <div className="content two col">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae nisi reiciendis illo odio soluta iusto eos quo ab numquam error nam aliquid quidem facere aperiam commodi aliquam, non excepturi, repellat expedita in alias quaerat eligendi! Illo omnis ipsam maiores porro eos voluptatum, ea distinctio perferendis:</p>
                <blockquote className="full right">
                  1, 2, 3 and to the 4 -
                  Snoop Doggy Dogg and Dr. Dre is at the door.
                  Ready to make an entrance so back on up,
                  'cause you know we're about to rip shit up.
                </blockquote>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing.</h4>
                <ul>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit temporibus mollitia voluptate!</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis error earum ipsa recusandae, cupiditate magnam.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quis facilis fuga modi voluptate.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt aliquid quaerat quo voluptatibus excepturi, neque assumenda!</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis reiciendis suscipit dolores deleniti!</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo soluta, fugiat sunt cum non aspernatur tempora praesentium exercitationem aliquid magnam.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum itaque laudantium suscipit, id ratione in tempore voluptatum.</p>
              </div>
            </article>
          </div>

          <ScrollParallax
            animation={{ rotate: 360 }}
            style={{ transform: 'rotate(0)' }}
            className="career__prllx is-rotate"
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
            className="career__prllx is-trnsx"
          >
            スッ
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
            className="career__prllx is-trnsxy"
          >
            ヘイヘイ
          </ScrollParallax>
        </div>

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
