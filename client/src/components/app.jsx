import NavBar from './Navbar.jsx';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react';
// import FormsContainer from './FormsContainer';
// import Search from './Search';
// import Bar from './Bar';

const AppStyles = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  display: block;
`;

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <BrowserRouter>
        <AppStyles>
          <div>
            <NavBar/>
          </div>
        </AppStyles>
      </BrowserRouter>

    );
  }
}

export default App;

// import React, { Component } from 'react';
// import styled from 'styled-components';

// import Forms from './Forms';
// import Search from './Search';
// import Bar from './Bar';
// import Random from './Random';


// const AppStyles = styled.div`
//   display: flex;
//   flex-flow: column;
//   align-items: center;
//   justify-content: center;
//   margin: 0 auto;
//   display: block;
// `;

// class App extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {

//     return (
//       <AppStyles>
//         <div className='forms-container'>
//           {/* <FormsContainer /> */}
//           <Forms />
//         </div>
//         <br/>
//         <div className='recipe-search'>
//           <Search />
//         </div>
//         <br/>
//         <div className='recipe-result'>
//           <Bar />
//         </div>
//         <div>
//           <Random />
//         </div>
//       </AppStyles>
//     );
//   }
// }

// export default App;
