import React from 'react';
import { Card, CardHeader, CardContent } from  '@material-ui/core';
import Input from './Input';
import WidthWindow from './WidthWindow'

class FormNoHooks extends React.Component{

    state = {
        name: 'Pedro',
        surname: '',
        width: 0
    };

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value,
        });
    };

    
    handleSurnameChange = (e) => {
        this.setState({
            surname: e.target.value,
        });
    };

    handleResizeWidth = () =>{
        this.setState({ width: window.innerWidth });
    };
    
    componentDidMount(){
        this.setDocumentTitle('Sem Hooks');
        window.addEventListener('resize', this.handleResizeWidth)
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.handleResizeWidth)
    }

    componentDidUpdate(prevProps, prevState){    
        this.setDocumentTitle(this.state.name);
    }

    setDocumentTitle = (name) =>{
        document.title = name;
    };

    render(){
        return(         
        <Card>
            <CardHeader title="FormNoHooks"/>
            <CardContent>
                <Input label="Name" value= { this.state.name } onChange={ this.handleNameChange }/>
                <Input label="Surname" value= { this.state.surname } onChange={ this.handleSurnameChange } />
                <WidthWindow width={this.state.width} />
            </CardContent>
        </Card>
        );
    }
}
export default FormNoHooks;