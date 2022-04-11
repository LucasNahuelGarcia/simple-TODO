import React, { Component } from 'react';
import TodoList from './TodoList';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import AppBar from '@mui/material/AppBar';
import './maxWidth.css';
// import AppBar from './AppBar';

class App extends Component {
    render() {
        function handleAddTodo() {
            alert('clicked');
        }
        return (
            <div className="App">
                <AppBar position="static">
                    <div className='maxWidth'>
                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                TODO
                            </Typography>
                            <div className='expand'/>
                            <IconButton
                                size="large"
                                aria-label="Add another TODO"
                                edge="end"
                                color="inherit"
                                onClick={handleAddTodo}                        >
                                <AddIcon />
                            </IconButton>
                        </Toolbar>
                    </div>
                </AppBar>

                <div className='maxWidth'>
                    <TodoList />
                </div>
            </div>
        );
    }
}

export default App;
