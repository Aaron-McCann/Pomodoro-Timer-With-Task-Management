import React from 'react';
import { Container, Header } from './components/styledComponents';
import Timer from './components/Timer';
import TaskList from './components/TaskList';

const App = () => {
    return (
        <Container>
            <Header>Pomodoro Timer</Header>
            <Timer />
            <TaskList />
        </Container>
    );
};

export default App;
