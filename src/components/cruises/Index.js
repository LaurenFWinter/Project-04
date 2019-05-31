// import React from 'react'
// import axios from 'axios'
// import { Link } from 'react-router-dom'
//
// import Card from './Card'
//
// class Index extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       cruise: []
//     }
//   }
//
//   componentDidMount() {
//     axios('/api/cruises')
//       .then(res => this.setState({ cruise: res.data }))
//   }
//
//
//   render() {
//     return (
//       <section className="section">
//         <div className="container">
//           <div className="columns is-multiline">
//             {this.state.cruise.map(cruise =>
//               <div key={cruise._id} className="column is-one-quarter-desktop is-one-third-tablet">
//                 <Link to={`/cruise/${cruise.id}`}>
//                   <Card {...cruise} />
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>
//     )
//   }
// }
//
//
//
// export default Index
