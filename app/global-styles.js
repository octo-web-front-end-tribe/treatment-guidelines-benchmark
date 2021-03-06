import { injectGlobal } from 'styled-components';
import '!style-loader!css-loader!rc-slider/assets/index.css';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  a {
    text-decoration: none;
  }

  a:link {
    color: inherit;
	}

	a:visited {
		color: inherit;
	}
	
	a:hover {
		color: inherit;
	}
	
	a:active {
		color: inherit;
	}

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
