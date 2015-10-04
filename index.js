var React = require('react')
var style = require('./style.css')

var Emoji = require('./components/emoji')

var App = React.createClass({
  render: function () {
    return (
      <div>
        <div className={style.pink}>
          I love pink. It reminds me of <Emoji emoji='💖' />
        </div>
        <div className={style.green}>
          I love green. It reminds me of <Emoji emoji='🌴' />
        </div>
      </div>
    )
  }
})

React.render(<App />, document.getElementById('container'))
