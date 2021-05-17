import React, {useEffect, useState} from 'react';
import {Card, Container} from "react-bootstrap";
const API_KEY = "9b7e5465e37b4c46a9279a454bd483c6";

export default function News(){
    const [newsData, setNewsData] = useState([]);
    useEffect(()=>{
        const getNewsData = async () =>{
            await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey="+API_KEY,{
                method: "GET"
            }).then(function (response) {
                if (response.status !== 200) {
                    console.log(
                        "Looks like there was a problem. Status Code: " + response.status,
                    );
                    return;
                }
                response.json().then(function (data){
                    let temp = [];
                    for (let i = 0; i < data.articles.length; i = i + 3) {
                        temp.push(data.articles.slice(i, i + 3));
                    }
                    setNewsData(temp);
                });
            });
        }
        getNewsData();
    },[])

    return(

        <Container
            className="my-3 d-flex justify-content-center flex-wrap"
            style={{ minHeight: "min-content" }}
        >
            {console.log("in container",newsData)}
            <>
                {newsData.map((value) => {
                    return value.map((val) => {
                        return (
                            <Card
                                className={`d-flex justify-content-center align-items-center flex-column text-center col-lg-2 col-md-4 col-sm-6 col-sm-6 m-3 myCard`}
                                style={{
                                    minWidth: "fit-content",
                                }}
                                key={val.publishedAt}
                            >
                                {/*{console.log("in card",val)}*/}
                                <Card.Img variant="top"
                                          className=" mt-3 w-50"
                                          src={
                                              val.urlToImage
                                          }/>
                                <Card.Body>
                                    <Card.Title className="text-monospace fw-bold bg-light py-2 px-2 mb-3">{val.title}</Card.Title>
                                    <Card.Text>
                                        {val.description}
                                    </Card.Text>
                                    <Card.Link href={val.url}>Go somewhere</Card.Link>
                                </Card.Body>
                            </Card>
                        );
                    });
                })}
            </>
        </Container>
    )
}