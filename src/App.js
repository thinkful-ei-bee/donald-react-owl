import React, { Component } from 'react';
import Chat from './Chat'

class App extends Component {
  static defaultProps = {
    store: {
      participants: [],
    }
  };

  render() {
    const { store } = this.props
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Dummy owl</h1>
        </header>
        <div className='Chat-list'>
          {store.participants.map(participant => (
            <Chat
              key={participant.id}
              name={participant.name}
              avatar={participant.avatar}
              inSession={participant.inSession}
              onStage={participant.onStage}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;