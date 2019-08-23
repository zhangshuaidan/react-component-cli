import  React from 'react';
import { render } from 'react-dom';
import { Button, Switch } from '../../src';
const App = () =>(
    <div>
    <Button>按钮</Button>
    <Switch/>
    </div>
    );
render(<App/>,document.getElementById('root'));