import React from 'react';
import Voting from './Voting'

class App extends React.Component {

  state = {
    options: [
      {
        id: 1,
        name: 'React',
        count: 0,
        url: 'https://www.import.io/wp-content/uploads/2017/10/React-logo-1.png'
      },
      {
        id: 2,
        name: 'Angular',
        count: 0,
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/AngularJS_logo.svg/1280px-AngularJS_logo.svg.png'
      },
      {
        id: 3,
        name: 'Vue',
        count: 0,
        url: 'https://dwglogo.com/wp-content/uploads/2017/09/Vue-logo-001.svg'
      },
      {
        id: 4,
        name: 'Ember',
        count: 0,
        url: 'https://signagelive.com/wp-content/uploads/2015/06/ember-logo.png'
      },
      {
        id: 5,
        name: 'jQuery',
        count: 0,
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/JQuery-Logo.svg/512px-JQuery-Logo.svg.png'
      },
    ]
  }

  handleChange = (input, type) => {
    if (type === 'add') {
      this.setState({
        options: this.state.options.map(item => {
          if (item.name === input.name) {
            return Object.assign({}, item, {
              count: input.count + 1
            })
          } else {
            return item;
          }
        }).sort(function (a, b) { return b.count - a.count })
      })

    } else if (type === 'minus') {
      this.setState({
        options: this.state.options.map(item => {
          if (item.name === input.name) {
            return Object.assign({}, item, {
              count: input.count - 1
            })
          } else {
            return item;
          }
        }).sort((a, b) => b.count - a.count)
      })
    }


  }

  render() {
    return (
      <div className='App'>
        <h1>JavaScript Voting App</h1>

        {this.state.options.map(item => {
          return (
            <div className='item'>
              <div className='border'>
                <h3 className='left'><button onClick={() => { this.handleChange(item, 'minus') }} >-</button>{item.count}<button id='button2' onClick={() => { this.handleChange(item, 'add') }} >+</button></h3>
                <Voting key={item.id} name={item.name} url={item.url} />

              </div></div>
          )
        })}
      </div>
    );
  }
}
export default App;
