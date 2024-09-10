import styled, { createGlobalStyle } from 'styled-components';

// Global Style
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background: #F9F9F9;
    color: #333;
  }
`;

// Main color palette
const colors = {
  primary: '#E0A4F0', // Soft pink for primary elements
  hover: '#CF85D9', // Darker pink for hover
  background: '#FFFFFF', // White for backgrounds
  text: '#575757', // Soft black for text
  inputBorder: '#DADADA', // Light gray border
  inputFocus: '#B17ACC', // Focus color for input fields
};

// Container for the entire application, with better centering and spacing
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 40px;
  background-color: ${colors.background};
`;

// Header styling for title
export const Header = styled.h1`
  color: ${colors.primary};
  font-size: 3rem;
  margin-bottom: 30px;
`;

// Timer Display Styling
export const TimerDisplay = styled.div`
  font-size: 4rem;
  color: #333;
  background: ${colors.background};
  border: 2px solid ${colors.primary};
  padding: 20px 50px;
  border-radius: 10px;
  margin-bottom: 30px;
  display: inline-block;
`;

// Input field for adding new tasks, ensuring proper width and padding
export const Input = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 15px;
  margin-bottom: 20px;
  margin-top: 30px;

  font-size: 16px;
  border: 2px solid ${colors.inputBorder};
  border-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  outline: none;
  transition: border 0.3s ease, box-shadow 0.3s ease;

  &::placeholder {
    color: #AFAFAF;
  }

  &:focus {
    border-color: ${colors.inputFocus};
    box-shadow: 0 6px 15px rgba(146, 114, 202, 0.2);
  }
`;

// Button styling for a consistent look
export const Button = styled.button`
  background: ${colors.primary};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 12px 25px;
  margin-left: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background-color: ${colors.hover};
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

// Wrapping container for the input field and the Add Task button
export const InputButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
  width: 100%;
  max-width: 600px;
`;

// List container for tasks, with better spacing and padding
export const ListContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin-top: 20px;
`;

// Task List Item Styling
export const ListItem = styled.div`
  background: ${colors.background};
  color: ${colors.text};
  padding: 20px;
  margin: 10px 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

// Checkbox for tasks
export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 15px;
  cursor: pointer;
`;

// Task Text Styling with line-through for completed tasks
export const TaskText = styled.span`
  flex-grow: 1;
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  color: ${props => props.completed ? '#AAA' : colors.text};
`;

// Button specifically for removing tasks
export const RemoveButton = styled(Button)`
  padding: 10px 20px;
  font-size: 14px;
`;
