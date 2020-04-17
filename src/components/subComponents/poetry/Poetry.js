import React from 'react'
import {connect} from 'react-redux'

import {Container} from 'react-bootstrap';

function Poetry(props) {
// console.log(props.myPoetry);

return (
    <div>
        <Hamza mypoet={props.mypoet}/>
    </div>
)
}
function Hamza(props){
console.log(props.mypoet);
var myTableData;
myTableData = props.mypoet.length <= 0 ? <h1>Empty</h1> : props.mypoet.map((i) => { return <div key={i.id} >
<h6>{i.name}</h6>
<h6>{i.auther}</h6>
<h6>{i.Categories}</h6>
<h6>{i.semester}</h6>
<h6>{i.stars}</h6>
<h6>{i.path}</h6>
</div> })

return(
<div>
    <Container>
hy
    {myTableData}
    </Container>
</div>
)
}
const mapStateToProps=(state)=>{
    return {
        mypoet:state.myPoetryRudcer
    }
}

export default connect(mapStateToProps)(Poetry)