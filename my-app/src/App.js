import React, { Component } from 'react';
import './App.css';
//import Radium , {StyleRoot} from 'radium';
import styled from 'styled-components';
import Person from './Person/Person.js';

    const StyledButton = styled.button`
                            background-color: green;
                            color : white;
                            font: inherit;
                            border: 1px solid blue;
                            padding: 8px;
                            cursor: pointers;

                            &:hover {
                                background-color : lightgreen;
                                color : black;
                            }
                 `;


    class App extends Component {
        state = {
            persons : [
                    {id:'aa1', name:"Duggu", age: 9 },
                    {id:'bb1', name:"Revi", age : 46 },
                    {id:'cc1' ,name:"LAKSHA", age : 27 },
            ],
            otherState : 'some other value',
            showPersons : false
        }


    deletePersonHandler = (personIndex) => {
        //const deletedPersons =this.state.persons.slice();
        const deletedPersons =[...this.state.persons];
        deletedPersons.splice( personIndex , 1);
        this.setState({ persons : deletedPersons})
    }

/*switchNameHandler = (newName) => {
            console.log ('This was clicked!');
            this.setState({
                    persons : [
                        {name:"Duggu", age: 9 },
                        {name:"REVATHI", age : 46 },
                        {name:newName, age : 27 },
                    ]
            })
        }*/


        nameChangeHandler = (event, id) => {

            const personIndex = this.state.persons.findIndex(p => {
                return p.id ===id;
            })

            const newPersonsList = {
            ...this.state.persons[personIndex]
            }

        //const updatedPersons = Object.assign({},this.state.persons[personIndex];

            newPersonsList.name = event.target.value;

            const updatedPersons =[...this.state.persons] ;
            updatedPersons[personIndex] = newPersonsList;

            this.setState({ persons : updatedPersons})
         }

         togglePersonsHandler = () => {
            const doesShow = this.state.showPersons;
            this.setState({ showPersons : !doesShow});
         }

    render() {
    const style = {

    };

    let jsPersons = null;
    if(this.state.showPersons){
        jsPersons= (
                            <div>
                                {this.state.persons.map((personList,index) => {
                                    return <Person
                                                clickMe = {this.deletePersonHandler.bind(this,index)}
                                                name = {personList.name}
                                                age = {personList.age}
                                                key = {personList.id}
                                                changed = {(event) => this.nameChangeHandler(event,personList.id)}
                                            />
                                    })
                                }
                            </div>

                );
        style.backgroundColor = 'Red';
        style[':hover'] = {
                backgroundColor : 'salmon',
                color: 'black'
        }
    }


        const classes =[] ;
        if(this.state.persons.length <= 2){
            classes.push('green'); //classes = ['green']
        }
        if(this.state.persons.length <= 1){
            classes.push('bold'); //classes = ['red', 'bold']
        }
        return (
            //<StyleRoot>
                <div className="App">
                    <p className = {classes.join(' ')} >Hi, This is a React App</p>
                   <StyledButton
                        onClick =  {this.togglePersonsHandler}> Toggle Persons List
                    </StyledButton>
                    {jsPersons}
                </div>
           // </StyleRoot>
        );
    //return React.createElement('div', null, React.createElement('div', { className: "App" }, React.createElement('h1', null, 'Hi, This is a React App')))
    }
}
export default App;

//export default Radium(App);





