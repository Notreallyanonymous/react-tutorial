//h1 means the type of header bigger than an h2 header
//li stands for list item
//<a> stands for an anchore tag which defines a hyper link
//href defines the url or link destination when set to # it means the link 
// does not have a particular destination 

function Header(){

    return(
        <header>
            <h1>Salary Reviewer</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    );
}

export default Header