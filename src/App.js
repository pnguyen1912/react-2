import React from 'react';
import Voting from './Voting'

class App extends React.Component {

  state = {
    options: [
      {
        id: 1,
        name: 'React',
        count: 0
      },
      {
        id: 2,
        name: 'Angular',
        count: 0
      },
      {
        id: 3,
        name: 'Vue',
        count: 0
      },
      {
        id: 4,
        name: 'Ember',
        count: 0
      },
      {
        id: 5,
        name: 'jQuery',
        count: 0
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
        })
      })
    }


  }


  render() {
    return (
      <div className='App'>
        <h1>JavaScript Voting App</h1>

        {this.state.options.map(item => {
          return (
            <div>
              <h3>{item.count}
                <Voting name={item.name} />
                <button onClick={() => { this.handleChange(item, 'minus') }} >-</button>
                <button onClick={() => { this.handleChange(item, 'add') }} >+</button></h3>
            </div>
          )
        })}
      </div>
    );
  }
}
export default App;
