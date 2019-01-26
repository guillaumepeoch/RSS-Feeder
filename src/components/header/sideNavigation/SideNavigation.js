import React, { Component } from 'react';
//import Sidebar from 'react-sidebar';

//import styles from './sideNavigation.module.css';

//import SourcesList from '../../source/SourcesList';

class SideNavigation extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
  
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
  
  render(){
    return (
      // <Sidebar
      //   sidebar={<b>RSS Sources</b>}
      //   open={this.state.sidebarOpen}
      //   onSetOpen={this.onSetSidebarOpen}
      //   styles={{ sidebar: { 
      //     background: "LightSeaGreen",
      //     zIndex: -9999,
      //     width: '30%'
      //    } 
      //   }}
      // >
      //   <SourcesList className={styles.begin}/>
      //   <button onClick={() => this.onSetSidebarOpen(true)}>
      //       Open sidebar
      //   </button>
      // </Sidebar>
      <div>
      </div>
    );
  }
}

export default SideNavigation;
