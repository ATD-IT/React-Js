import React, { useState } from "react"
import "./Home.css"
import { Row, Col } from "react-bootstrap"
import students from "./Images/students.jpg"
import ssipmt from "./Images/ssipmt.jpg"
import { Container } from "react-bootstrap"
import graduate from "./Images/graduate.jpg"
function Home() {
    const [numberCount, senumbertCount] = useState(0)
    const [isGraduate, setIsgraduate] = useState(false)
    const [arr, setArr] = useState(['Ashutosh', 'Rishabh', 'Jagriti', 'Naina', 'Rashmi'])
    console.log(arr)
    return (
        <>
            <Row className="">
                <Col sm={6}>
                    numberCount?
                    <Row>
                        <Col>
                            <Row>
                                <img src={students} alt="" className="Students" />
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <img src={graduate} alt="" className="Graduate" />
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row className="homepageparatopheading">
                        IT 5th Semester
                    </Row>
                    <Row className="homepageparatoptext mt-5">

                    </Row>
                </Col>
            </Row>

            <Row >
                <img src={ssipmt} alt="" />
            </Row>
            <Row className="homepageparatoptext mt-5 mb-5">

            </Row>
            <p>
                {Count}

            </p>
            <button onClick={() => setCount(!count)}>
                Click Me</button>
        </>
    )
}
    


export default Home;