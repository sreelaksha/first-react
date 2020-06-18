import React, { useEffect } from 'react';
import styles from './cockpit.module.css';

const cockpit = (props) => {
    useEffect(() => {
        console.log('Cockpit.js useEffect');
    });


        const classes =[] ;
        let btnClass = '';

            if(props.showPersons){
                btnClass = styles.Red;
            }

            if(props.persons.length <= 2){
                classes.push(styles.green); //classes = ['green']
            }
            if(props.persons.length <= 1){
                classes.push(styles.bold); //classes = ['red', 'bold']
            }
    return(
            <div className = {styles.Cockpit}>
            <h1> {props.title}</h1>
            <p className = {classes.join('')}  >Hi, This is a React App</p>
               <button className = {btnClass}
                    onClick =  {props.toggle}> Toggle Persons List
                </button >
            </div>
    );
}

export default cockpit;