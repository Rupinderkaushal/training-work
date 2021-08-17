import React from "react";
import { Button} from "reactstrap";
import { Alert } from "reactstrap";
import { Badge } from "reactstrap";
import { Breadcrumb , BreadcrumbItem } from "reactstrap";
import "../Newfolder/abc.css";
const Btn1 = () =>{
    window.alert ("button pressed")
}
const Btn =() =>{
    return(
        <>
        <div>
         <h1>Heading new<Badge color="danger">New</Badge></h1>

        </div>
        <Button className="btn-pro" onClick={Btn1} style={{padding:"10px",margin:"5px",color:"black"}} color="primary">Press Here</Button>
         <h1>Alert</h1>
         <Alert>This is alert!</Alert>
         <Alert color="secondary">This is alert!</Alert>  
         <Alert color="danger">This is alert!</Alert>  
        <div>
            <h1>Breadcrumb</h1>
            <Breadcrumb>
            <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
            <BreadcrumbItem active>Home</BreadcrumbItem>
            </Breadcrumb>
        </div>
         </>
        )
};
export default Btn;
