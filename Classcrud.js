import React from 'react';
import axios from 'axios';



export class Classcrud extends React.Component {

    constructor(props) {
        super(props)
        this.state = { data: [], inp1: "", inp2: "", inp3: "" };
        this.update = this.update.bind(this);
        this.deleteme = this.deleteme.bind(this);
        this.addrecord = this.addrecord.bind(this);
        //this.inp1 = this.inp1.bind(this);
        //this.inp2 = this.inp2.bind(this);
        //this.inp3 = this.inp3.bind(this);


    }

    apiGet(e) {
        axios.get("http://localhost:4000/students")
            .then((res) => this.setState({ data: res.data }))
            .catch(err => console.log(err.data))


    }

    addrecord(e) {
        axios("http://localhost:4000/students", {
            method: 'POST',
            data: { first_name: this.state.inp1, last_name: this.state.inp2, email: this.state.inp3 },
            headers: ({ "content-type": "application/json;charset=utf-8" })
        })
        // .then(res => res.json())
        // .then((data)=>{console.log(data)}).catch(console.log)

    }

    update(id) {
        axios(`http://localhost:4000/students/${id}`, {
            method: 'PUT',
            data: { first_name: this.state.inp1, last_name: this.state.inp2, email: this.state.inp3 },
            headers: ({ "content-type": "application/json;charset=utf-8" })
        })
            .then(res => res.json())
            .then((data) => { console.log(data) }).catch(console.log)
    }

    deleteme(id) {
        axios(`http://localhost:4000/students/${id}`, {
            method: 'DELETE',
            //data:{ first_name: this.state.inp1, last_name: this.state.inp2, email: this.state.inp3 },
            // headers: ({ "content-type": "application/json;charset=utf-8" })
        })
            .then(res => res.json())
            .then((data) => { console.log(data) }).catch(console.log)
    }

    render() {
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>FIRST NAME</th>
                            <th>LAST NAME</th>
                            <th>EMAIL</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.data.map((item) =>
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.email}</td><button type="button" onClick={() => this.update(item.id)} class="btn btn-primary">EDIT</button>&nbsp;<button type="button" onClick={() => this.deleteme(item.id)} class="btn btn-primary">DELETE</button>
                            </tr>
                        )}
                    </tbody>
                </table><br />
                <button onClick={(e) => this.apiGet(e)}>Fetch API</button>

                {/* FORM INPUT START================================================================== */}

                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <form>

                                <lable>FIRST NAME</lable>
                                <input type='text' class='form-control' onChange={(e) => this.setState({ inp1: e.target.value })} placeholder="FIRST_NAME" />
                                <lable>LAST NAME</lable>
                                <input type='text' class='form-control' onChange={(e) => this.setState({ inp2: e.target.value })} placeholder="LAST_NAME" />

                                <lable>EMAIL</lable>
                                <input type='text' class='form-control' onChange={(e) => this.setState({ inp3: e.target.value })} placeholder="EMAIL" />

                                <button type="button" onClick={(e) => this.addrecord(e)} class="btn btn-primary">Add Record</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}