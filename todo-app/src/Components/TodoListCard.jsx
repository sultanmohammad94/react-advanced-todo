import TodoListItem from "./TodoListItem";
import React, {useState} from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PenPlus from "./PenPlusButton";
import { Avatar, Stack } from "@mui/material";


export default function TodoListCard(props) {
  const [state, setState] = useState({
    title:"",
    subheader:"",
    isCreator:false,
  });

  return (
    <Card elevation={4} style={{padding:"3", minWidth:"20vw"}}>
      <CardHeader 
        title={<Typography className="card-header" variant="h4">{props.title?props.title:"No Title"}</Typography>}
        subheader={props.subheader?props.subheader:"No Subheader"}
        action={
          (props.isCreator?props.isCreator:state.isCreator)&&(<PenPlus avatarbgColor="#00BC27" svgColor="#ffff" />)
        }
        />
      <CardContent>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <TodoListItem text={"Something I have to do but I don't have time"} />
          <TodoListItem text={"Some work Arrangements"} />
        </Stack>
      </CardContent>
    </Card>
  );
}
