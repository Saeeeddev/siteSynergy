import {useState} from 'react'
import './App.css'


///////////////////////////////////
// props

// function App() {
//   return <div className='app'>
//     <Jobs salary={50000} position='software engineer' company='Tech Corp'/>
//     <Jobs salary={50000} position='software engineer' company='Tech Corp'/>

//   </div>;
// }


// const Jobs = (props) => {
//   return (
//     <div>
//       <h1>{props.salary}</h1>
//       <h1>{props.position}</h1>
//       <h1>{props.company}</h1>
//     </div>
//   )
// }


//////////////////////////////////////
// condentianal rendering

// function App() {
//   const name =12;
//   const isGreen= true;

//   return <div className='app'>
//     {name>12 ? <h1>underagne</h1> : <h1> not under age</h1>}

//     {isGreen && <h1> Lorem, ipsum dolor.</h1>}
//   </div>


// }



/////////////////////////////////////////////////
// how to work with lists

// function App(){
// const names = ['ajiga','dagjrgja','dgaiggra'];

// return <div className='app'>
//  {names.map((name, key)=>{
//   return <h1 key={key}>{name}</h1>
//  })}

// </div>

// }


// import {User} from './user'
// function App(){
//   const users =[{name : 'agriga',age:12},
//                 {name : 'agriga',age:12},
//                 {name : 'agriga',age:12}]

//   return (<div className='app'>
//     {users.map((user,key)=>{
//       return (
//         <User name={user.name} age={user.age}/>
//             );
//     })}
//   </div>
// )

// };


// const User=(props)=>{
//   return (<div>
//     {props.name}
//     {props.age}
//   </div>);
// };

// function App(){
//   const planets = [
//     { name: "Mars", isGasPlanet: false },
//     { name: "Earth", isGasPlanet: false },
//     { name: "Jupiter", isGasPlanet: true },
//     { name: "Venus", isGasPlanet: false },
//     { name: "Neptune", isGasPlanet: true },
//     { name: "Uranus", isGasPlanet: true },
//   ];

//   return (
//     <div className='app'>
//       {planets.map((plant, key)=>{
//         return plant.isGasPlanet ? (<div key={key}>
//           <h3>
//             {plant.name}
//           </h3>
//         </div>) : null
//       })}
//     </div>
//   );
// };




function App(){

    const users = [{name:"saeed", age:12
    },{name:"saeed", age:12
    },{name:"saeed", age:12
    },
];
    return (
        <div className='app'>
            {users.map((user,key)=>{
                return (
                    <Users name={user.name} age={user.age}/>
                )
            })}
        </div>
    );
}


const Users=(props)=>{
    return(
        <div>
          <h2> {props.name}</h2> 
            <h2>{props.age}</h2>
        </div>
    )
}
















export default App
