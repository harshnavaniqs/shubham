import React from 'react';
// import Card from './Card';
import ButtonGroup from './ButtonGroup';
import './App.css';
import KanbanBoard from './Kanban';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tickets: [],
      DataisLoaded: false,
      groupOption: 'status',
      orderOption: 'priority',
    };
  }

  componentDidMount() {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          tickets: json.tickets,
          DataisLoaded: true,
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    const { DataisLoaded, tickets, groupOption, orderOption } = this.state;

    if (!DataisLoaded) return <div>Loading...</div>;

    return (
      <div className="App">
        <h1>Kanban Cards</h1>
        <ButtonGroup
          groupOption={groupOption}
          setGroupOption={(option) => this.setState({ groupOption: option })}
          orderOption={orderOption}
          setOrderOption={(option) => this.setState({ orderOption: option })}
        />
        <KanbanBoard
          tickets={tickets}
          groupOption={groupOption}
          orderOption={orderOption}
        />
      </div>
    );
  }
}

export default App;
