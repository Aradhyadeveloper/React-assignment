// import React from 'react';

//  export class PostApi extends React.Component{
//     constructor(props){
//     super(props)
//     this.state ={}

//     }
//     componentDidMount(){
//         fetch('https://jsonplaceholder.typicode.com/posts',{
//             method:'POST',
//             body:JSON.stringify({title:'check',body:'mno',userId:'1023'}),
//             headers:{"content-type": "application/json;charset=utf-8"}

//         }).then(res=>res.json())
//         .then((data)=>{console.log(data)}).catch(console.log)
//     }

//     render(){
//         return(
//             <div>
//                 <h1>POST METHOD</h1>


//             </div>
//         )
//     }
// }





// import React from 'react';
// export class PostApi extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             customers: []
//         }
//     }
//     componentDidMount() {
//         fetch("http://localhost:3000/db.json/employees")
//             .then(res => res.json())
//             .then(
//                 (data) => {
//                     this.setState({ customers: data });
//                     //console.log(items)
//                 },
//                 (error) => {
//                     alert(error);
//                 }
//             )
//     }

//     render() {
//         return (<div>
            
//          <table className="table table-hover">
//             <thead>
//                 <tr>
//                     <th>Id</th>
//                     <th>First name</th>
//                     <th>Last name</th>
//                     <th >Email</th>
                    
//                 </tr>
//             </thead>
//                     <tbody>

//                 {this.state.customers.map(item =>
//                     <tr>
//                         <td>{item.id}</td>
//                         <td>{item.first_name}</td>
//                         <td>{item.last_name}</td>
//                         <td>{item.email}</td>
//                     </tr>
//                 )}
//             </tbody>
//         </table>
//         </div>

//         );
//     }
// }


//COMPLETE CRUD WITH FUNCTIONAL COMPONENT===================================================== 


// import React, { useState } from "react";

// function PostApi() {
//     const [data, setData] = useState([]);
//     const[fname,setFname] = useState('');
//     const [lname, setLname] = useState('')
//     const [email, setEmail] = useState('')
    
//     const apiGet = () => {
//         fetch(" http://localhost:4000/students")
//             .then((response) => response.json())
//             .then((json) => {
//                 console.log(json);
//                 setData(json);
//             });
//     };

//    function  addrecord(){
//         fetch('http://localhost:4000/students',{
//             method:'POST',
//             body: JSON.stringify({ first_name: fname, last_name: lname, email: email }),
//             headers:({"content-type": "application/json;charset=utf-8"})
//         }).then(res=>res.json())
//         .then((data)=>{console.log(data)}).catch(console.log)
//     }

//     function deleteme(id){
//         fetch(`http://localhost:4000/students/${id}`,{
//             method:'DELETE',
//             //body: JSON.stringify({ first_name: fname, last_name: lname, email: email }),
//             //headers :({"content-type":"application/json;charset =utf-8"})
//         }).then(res=> res.json())
//         .then((data)=>{console.log(data)}).catch(console.log)
        
//     }


//     function update(id){
//         fetch(`http://localhost:4000/students/${id}`,{
//             method:'PUT',
//             body:JSON.stringify({first_name:fname,last_name:lname,email:email}),
//             headers:({"content-type": "application/json;charset=utf-8"})
//         }).then(res=>res.json())
//         .then((data)=>{console.log(data)}).catch(console.log)
//     }




//     return (
//         <div>
            

//                 <table className="table table-hover">
//              <thead>
//                  <tr>
//                      <th>Id</th>
//                      <th>First name</th>
//                      <th>Last name</th>
//                      <th >Email</th>
                    
//                  </tr>
//              </thead>
//                      <tbody>

//                {data.map((item) =>
//                     <tr key={item.id}>
//                         <td>{item.id}</td>
//                         <td>{item.first_name}</td>
//                         <td>{item.last_name}</td>
//                        <td>{item.email}</td><button type="button" onClick={()=>update(item.id)} class="btn btn-primary">EDIT</button>&nbsp;<button type="button" onClick ={()=>deleteme(item.id)} class="btn btn-primary">DELETE</button>
//                     </tr>
//                 )}
//             </tbody>
//         </table><br/>
//             <button onClick={apiGet}>Fetch API</button>


// {/* INPUT FORM START============================================================= */}
 
//         <div className="container">
//                 <div className="row">
//                 <div className="col-md-4">
           
            
//             <form>
//                 <lable>First Name</lable>
//             <input type="text" class="form-control" name="first_name" onChange={(e)=>setFname(e.target.value)}  placeholder="FIRST_NAME" /><br/>
//             <lable>Last Name</lable>
//             <input type="text" class="form-control" name="last_name" onChange={(e) => setLname(e.target.value)} placeholder="LAST_NAME" /><br/>
//             <lable>Email</lable>
//             <input type="text" class="form-control" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="EMAIL" /><br/>  

//             <button type="button" onClick={addrecord} class="btn btn-primary">Add Record</button>  
//             </form>
//                     </div>
//             </div>
//             </div>


//         </div>
//     );
// }

// export default PostApi; 









