// defines three variables
// creates a bullet list using the ul tag
// creates three list items using li tags
// uses methods on the string values 
// remember these are methods because they are associated with objects and classes

function Careers(){

    const career1 = "backend developer"
    const career2 = "FRONTEND DEVELOPER"
    const career3 = "fullstack developer"


    return (
        <ul>
            <li>{career1.toUpperCase()}</li>
            <li>{career2.toLowerCase()}</li>
            <li>`The best kind of developer is {career3}`</li>

        </ul>
    )
}

export default Careers