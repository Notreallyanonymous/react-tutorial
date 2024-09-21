// Here we create a simple footer that allows you to place a year 
// with the name of your website
//an HTML entity that represents the copyright symbol (©). It is used to indicate that the content on the 
//page is copyrighted. 
//The full expression inside the <p> tag is generating a line of text for the webpage that includes:
function Footer(){
    return(
        <footer>
            <p>&copy; {new Date().getFullYear()} SalaryReviewer objective</p>
        </footer>
    )
}

export default Footer;