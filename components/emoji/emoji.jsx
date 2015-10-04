var React = require('react')
var style = require('./style.css')

var Emoji = React.createClass({
  render: function () {
    return <span className={style.emoji}>{this.props.emoji}</span>
  }
})

module.exports = Emoji
