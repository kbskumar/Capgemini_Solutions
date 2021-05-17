import React, {useEffect, useState} from 'react';
import {Card, Container} from "react-bootstrap";

export default function Score(){
    const [dataa, setMatchData] = useState([]);
    const [scoreData, setScoreData] = useState([]);
    const apikey = "n0tt9vIlCDNuhGYwKRhkUhQ3rSD2";
    useEffect(()=>{
        const getMatchData = async () =>{
            await fetch("https://cricapi.com/api/matches?apikey="+apikey,{
                method: "GET",
            }).then(function (response) {
                if (response.status !== 200) {
                    console.log(
                        "Looks like there was a problem. Status Code: " + response.status,
                    );
                    return;
                }
                response.json().then(function (data){
                    let sample = data.matches.filter(arr=>arr.matchStarted===true)
                    setMatchData(sample);
                    console.log("filtered:",dataa);
                    obtainScores(sample);
                    console.log("sample=",sample);
                })
            });

        }
        const obtainScores = async (dataa) => {
            let temp = []
            console.log("inn obtain scores",dataa)
            for (let i = 0; i < dataa.length; i++) {
                await fetch("https://cricapi.com/api/cricketScore?unique_id="+dataa[i].unique_id,{
                    method:"POST",
                    headers: { "Content-Type": "application/json" },
                    body:JSON.stringify({apikey})
                }).then(function (response) {
                    if (response.status !== 200) {
                        console.log(
                            "Looks like there was a problem. Status Code: " + response.status,
                        );
                        return;
                    }
                    response.json().then(function (data) {
                        temp.push(data);
                        console.log("Data=",data);
                    })
                })
            }
            console.log("temp=",temp);
            setScoreData(temp);
        }
        getMatchData();
    },[])

    return(

        <Container
            className="my-3 d-flex justify-content-center flex-wrap"
            style={{ minHeight: "min-content" }}
        >
            <>
                {scoreData.map((val) => {
                    console.log("val=",val)
                        return (
                            <Card
                                className={`d-flex justify-content-center align-items-center flex-column text-center col-lg-2 col-md-4 col-sm-6 col-sm-6 m-3 myCard`}
                                style={{
                                    minWidth: "fit-content",
                                }}
                                // key={val.unique_id}
                            >
                                {/*{console.log("in card",val)}*/}
                                {/*<Card.Img variant="top"*/}
                                {/*          className=" mt-3 w-50"*/}
                                {/*          src={*/}
                                {/*              val.urlToImage*/}
                                {/*          }/>*/}
                                <Card.Body>
                                    <Card.Title className="text-monospace fw-bold bg-light py-2 px-2 mb-3">{val["team-1"]} vs {val["team-2"]}</Card.Title>
                                    <Card.Text>
                                        {val.score}
                                    </Card.Text>
                                    {/*<Card.Link href={val.url}>Go somewhere</Card.Link>*/}
                                </Card.Body>
                            </Card>
                        );
                })}
            </>
        </Container>
    )
}