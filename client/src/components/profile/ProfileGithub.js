// import React, { Component } from 'react'
// import PropTypes from 'prop-types';
// class ProfileGithub extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       clientId: '59b6d8f781f8cf5e8d29',
//       clientSecret:'ed9a3d87721f3fab34f8f15ae77c7560e8e0c6bb',
//       count: 5, // amount of repos
//       sort: 'created: asc',
//       repos: []
//     }
//   }
//     componentDidMount(){
//       const { username } = this.props;
//       const { count, sort, clientId, clientSecret} = this.state;

    
//       fetch(`https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`)
//       .then(res => res.json())
//       .then(data => {
//         this.setState({repos: data});
//       })
//       .catch(err => console.log(err))
//     }

  
//   render() {
//     const { repos } = this.state;

//     const repoItems = repos.map(repo => (
//       <div key = {repo.id} className = "card card-body mb-2">
//       <div className = "row">
//       <div className = "col-md-6">
//         <h4>
//           {/* Use <a></a> tag  instead of Link */}
//           <a href ={repo.html_url} className = 'text-info' target= "_blank"> {repo.name}</a>
//       </h4>
//       <p>{repo.description}</p>

//       </div>
//       <div className = "col-md-6">
//         <span className = "badge badge-info mr-1">
//           Stars: {repo.stargazers_count}
//         </span>
//         <span className = "badge badge-secondary mr-1">
//           Warchers: {repo.watchers_count}
//         </span>
//         <span className = "badge badge-success mr-1">
//           Forks: {repo.forks_count}
//         </span>
//       </div>
//       </div>
//       </div>
//     ))
//     return (
//       // <div>
//       //   <hr />
//       //   <h3 className = "mb-4">Latest Github Repos</h3>
//       //   {repoItems}
//       // </div>
//       ""
//     )
//   }
// }
// ProfileGithub.propTypes = {
//   username: PropTypes.string.isRequired

// }


// export default ProfileGithub;