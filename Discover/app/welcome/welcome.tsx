// @ts-ignore
import {Footer, Header, Button, Cards, TaskInput, Pokemon} from "../components";
import {index} from "@react-router/dev/routes";
import {useState} from "react";

function Welcome() {

    const [tasks , setTasks ] = useState ([]) ;

    const addTask = (text: any) => {
        // Logique pour ajouter une tache
        const id = tasks[tasks.length];
        setTasks(tasks[id, text]);
    };

    return (
    // @ts-ignore
    <div align="center">
        <Header/>
        data
        <Button text={"Click here"}></Button>

        <h1 >Ma Todo List </h1 >
        <TaskInput onAddTask ={ addTask } />
        <ul >{tasks} </ul >

        <Pokemon/>

        <Cards></Cards>

        <Footer/>
    </div>
    );
}

export default Welcome
