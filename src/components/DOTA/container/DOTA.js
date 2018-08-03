import React from 'react';

const API_KEY ="Some API here";

class DOTA extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      info: {},
    };
  }

  componentDidMount() {
    fetch(API_KEY)
      .then(response => response.json(console.log(response)))
      .then((result) => {
     console.log('DOTA INFO', result)    
          this.setState({
            isLoaded: true,
            info: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

  }



render() {
	const { error, isLoaded, info } = this.state;
	

	console.log('returned info', info)
	if (error) {
	  return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
	  return <div>Loading...</div>;
	} else {
	  return (
	    <ul>
	     
	        <div key={ info.key}>

	        	<p>There are currently	<b>{info.user_players}</b> players in DOTA 2</p>
	        	<p>There have been	<b>{info.matches_last_hour}</b> matches played in the last hour</p>
	        </div>
	    
	    </ul>
	  );
	}
  }
}

export default DOTA