import React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

const lightMuiTheme = getMuiTheme(lightBaseTheme);

export default ({children}) => {
  return (
  	<MuiThemeProvider muiTheme={lightMuiTheme}>
    	<div>
    		<div>
    			<AppBar title="[openbracket"/>
    		</div>
    		<div>
    	  {children}
    	  </div>
    	</div>
    </MuiThemeProvider>
  );
}
