import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // For unique task IDs
import { ListContainer, ListItem, Checkbox, TaskText, Button, Input, InputButtonWrapper, RemoveButton } from './styledComponents'; // Ensure InputButtonWrapper is imported

const TaskList = () => {
    const [tasks, setTasks] = useState([
        { id: uuidv4(), text: 'Complete module 4', completed: false },
        { id: uuidv4(), text: 'Read article on React Hooks', completed: false }
    ]);
    const [newTaskText, setNewTaskText] = useState('');

    // Toggle task completion status
    const toggleTask = (id) => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    // Add a new task if the input is valid
    const addTask = () => {
        if (newTaskText.trim() !== '') {
            const newTask = {
                id: uuidv4(),
                text: newTaskText,
                completed: false
            };
            setTasks([...tasks, newTask]);
            setNewTaskText(''); // Clear input field after adding
        } else {
            alert('Please enter a task');
        }
    };

    // Handle input field changes
    const handleInputChange = (event) => {
        setNewTaskText(event.target.value);
    };

    // Remove a task by ID
    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <>
            <InputButtonWrapper>
                <Input 
                    type="text"
                    value={newTaskText}
                    onChange={handleInputChange}
                    placeholder="Add new task..."
                />
                <Button onClick={addTask} disabled={!newTaskText.trim()}>
                    Add Task
                </Button>
            </InputButtonWrapper>

            {/* Show message if there are no tasks */}
            <ListContainer>
                {tasks.length === 0 ? (
                    <p>No tasks added yet.</p>
                ) : (
                    tasks.map(task => (
                        <ListItem key={task.id}>
                            <Checkbox 
                                checked={task.completed} 
                                onChange={() => toggleTask(task.id)}
                            />
                            <TaskText completed={task.completed}>
                                {task.text}
                            </TaskText>
                            <RemoveButton onClick={() => removeTask(task.id)}>Remove</RemoveButton>
                        </ListItem>
                    ))
                )}
            </ListContainer>
        </>
    );
};

export default TaskList;
