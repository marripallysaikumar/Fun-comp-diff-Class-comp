import {Component} from 'react'

class Welcome extends Component {
  render() {
    const {ram} = this.props

    return (
      <div>
        <h1>Sita {ram}</h1>
      </div>
    )
  }
}

export default Welcome
