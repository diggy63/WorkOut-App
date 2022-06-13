import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Grid, Header, Image, Segment, TextArea, Dropdown } from 'semantic-ui-react'
import * as excerciseService from "../../utils/excerciseServices"

export default function WorkoutDBCreate(){
  const workoutOptions = [
    {
      key: "Abs",
      text: "Abs",
      value: "Abs",
    },
    {
      key: "Arms",
      text: "Arms",
      value: "Arms",
    },
    {
      key: "Back",
      text: "Back",
      value: "Back",
    },
    {
      key: "Calves",
      text: "Calves",
      value: "Calves",
    },
    {
      key: "Chest",
      text: "Chest",
      value: "Chest",
    },
    {
      key: "Legs",
      text: "Legs",
      value: "Legs",
    },
    {
      key: "Shoudlers",
      text: "Shoulders",
      value: "Shoulders",
    },
  ];
    const navigate = useNavigate();
    const [ex, setEx] = useState({
        name: '',
        description: '',
        bodyPart: 'Chest',
    })
    async function handleSubmit(e){
      console.log("click")
        e.preventDefault();
      const newExx = await excerciseService.createEx(ex)
      console.log(newExx)
      
       
    }

    function handleChange(e){
      console.log(e.target.name)
        setEx({...ex,
        [e.target.name]:e.target.value})
    }

    function handleDropdownChange(e){
      console.log(e.target.innerText)
      setEx({...ex,
      bodyPart:e.target.innerText})
    }
    return(
        <Grid className="flexcenter" textAlign="center" style={{ height: "25vh" }} verticalAlign="middle">
        <div className="flexcenter">
          <Segment className="flexcenter">
      <Grid.Column style={{ maxWidth: 600 }}>
        <Header as="h2" textAlign="center">
          <Header.Content>Create Your Excercise</Header.Content>
        </Header>
        <Form autoComplete="off" onSubmit={handleSubmit}>
            <Form.Input
              name="name"
              placeholder="Excercise Name"
              // value={ex.name}
              onChange={handleChange}
              required
            />
            <TextArea
              type="text"
              name="description"
              placeholder="Description"
              // value={ex.description}
              onChange={handleChange}
              required
            />
            <Dropdown
            name="bodypart"
            placeholder="Select Zone"
            value={ex.bodypart}
            fluid
            selection
            options={workoutOptions}
            onChange={handleDropdownChange}
          />
            <Button type="submit" className="btn">
              Create Excercise
            </Button>
          {/* {error ? <ErrorMessage error={error} /> : null} */}
        </Form>
      </Grid.Column>
      </Segment>
      </div>
    </Grid>
    )
}









// import React, {useState} from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Button,
//   Form,
//   Grid,
//   Header,
//   Image,
//   Segment,
//   TextArea,
// } from "semantic-ui-react";

// export default function createExcerciseInDb(){
//   const [exs, setExs] = useState({})


//   function handleChange(e) {
//       console.log(e.target.value);
//   }

//   function handleSubmit(e) {
//     e.preventDefault()
//     console.log(e.target);
//   }
//   return (
//       <Grid
//         className="flexcenter"
//         textAlign="center"
//         style={{ height: "25vh" }}
//         verticalAlign="middle"
//       >
//         <div className="flexcenter">
//           <Segment className="flexcenter">
//             <Grid.Column style={{ maxWidth: 450 }}>
//               <Header as="h2" textAlign="center">
//                 <Header.Content>Name Your Workout</Header.Content>
//               </Header>
//               <Form autoComplete="off" onSubmit={handleSubmit}>
//                 <Form.Input
//                   name="workoutName"
//                   placeholder="Workout Name"
//                   onChange={handleChange}
//                   required
//                 />
//                 <TextArea
//                   type="text"
//                   name="description"
//                   placeholder="Description"
//                   onChange={handleChange}
//                   required
//                 />
//                 <Button type="submit" className="btn">
//                   Create Workout
//                 </Button>
//                 {/* {error ? <ErrorMessage error={error} /> : null} */}
//               </Form>
//             </Grid.Column>
//           </Segment>
//         </div>
//       </Grid>
//   );
// }
