// const divRoot = document.getElementById("root")
// const newDiv = document.createElement("div")
// newDiv.textContent = "HelloWorld"
// divRoot.appendChild(newDiv)


// 

// const divRoot = document.getElementById("root")

// const e = React.createElement("div" , {
//     children:"Hello Khaled",
// })

// ReactDOM.render(e , divRoot);


const divRoot = document.getElementById("root")

let elemnet = <>
    <title>Khaled CV &#174;</title>
    <div class="container">
        <h1>Khaled Alfawaz</h1>
        <div class="image">
            <img src="https://icon-library.com/images/person-image-icon/person-image-icon-19.jpg" alt="Placeholder Image Person"></img>
        </div>
        <div class="info">
            <h3>Email: khaled@al-fawaz.net</h3>
            <h3>Phone: 0550794942</h3>
        </div>
        <hr></hr>
        <div class="edu">
            <h2>Education:</h2>
            <ul>
                <li>King Saud University Information Systems bachelor degree</li>
                <li>GPA: 4.09/5</li>
            </ul>
        </div>
        <hr></hr>
        <div>
            <h2>Experience:</h2>
            <ol>
                <li>Coop traine in SMT technology</li>
                <li>Nanodegree Full-stack Javascript</li>
                <li>Tuwaiq Academy Javascript bootcamp</li>
            </ol>
        </div>
        <hr></hr>
        <div>
            <h2>Skills:</h2>
            <div class="grid">
                <p>
                    HTML
                </p>
                <p>
                    CSS
                </p>
                <p>
                    Javascript
                </p>
                <p>
                    Bootstrap
                </p>
                <p>
                    Typescript
                </p>
                <p>
                    React
                </p>
            </div>
        </div>
        <hr></hr>
        <div>
            <h2>Personal Projects:</h2>
            <ul>
                <li><h3>Toycel</h3>
                    <ul>
                        <li>
                            Graduation project built with flutter
                        </li>
                    </ul>
                </li>
                <li class="pr"><h3>VSource</h3>
                    <ul>
                        <li>
                            Vanilla javascript project
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <hr></hr>
        <div>
            <h2>languages:</h2>
            <h4>Arabic</h4>
            <h4>English</h4>
        </div>
    </div>
</>

ReactDOM.render(elemnet, divRoot);