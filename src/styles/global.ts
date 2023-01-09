import { createGlobalStyle } from "styled-components";
import {
    Container, 
    Logo, 
    Flag, 
    Text, 
    Wrapper, 
    Searchbox,
    Select,
    SearchIconWrapper
} from "styles"

export default createGlobalStyle`
	* {
        margin: 0;
        padding: 0;
		outline: 0;
		box-sizing: border-box;
		font-family: 'Roboto', 'Open Sans', sans-serif;
    }
	#root {
		margin: 0 auto;
	}
`