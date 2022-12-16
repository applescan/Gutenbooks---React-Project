import styled from "styled-components";
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';
import DefaultButton from '../Buttons/DefaultButton';
import { useNavigate } from 'react-router-dom';


export default function BookDetail() {

  const [posts, setPosts] = useState(null)
  const [errorMessage, seterrorMessage] = useState("")
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`http://gutendex.com/books?ids=${id}`)
      .then(res => {
        //console.log(res.data.results)
        setPosts(res.data.results[0])
      
      })
      .catch(err => {
        console.log(err)
        seterrorMessage('Error retrieving data')
      })
  }, []) //only do get request on load


  return (
    <>
      {posts ?

        <Wrapper id="home" className="container flexSpaceCenter">

          <LeftSide className="flexCenter">
            <div>
              <h1>{posts.title}</h1>
              <h5>
                {posts.authors[0].name}
              </h5>

              <span><b>Theme: </b></span>
              {posts.subjects.slice(0, -1).map((subject, index) => (
                <span id={index}>{subject}, </span>
              ))}

              {posts.subjects.slice(-1).map((subject, index) => (
                <span id={index}>{subject}. </span>
              ))}

              <br></br>
              <span><b>Languages: </b></span>
              {posts.languages.slice(0, -1).map((language, index) => (
                <span>{language}, </span>
              ))}

              {posts.languages.slice(-1).map((language, index) => (
                <span>{language}. | </span>
              ))}
              <span><b>Downloads: </b></span>
              <span>{posts.download_count}.</span>

              <br></br>
              <br></br>
              <table>
                <tr>
                  <th>Download this book in these formats:</th>
                </tr>
                <tr>
                  <td><a className="link" href={posts.formats['application/x-mobipocket-ebook']} target="_blank">Application/x-mobipocket-ebook</a></td>
                </tr>
                <tr>
                  <td><a className="link" href={posts.formats['text/html']} target="_blank">Text/HTML</a></td>
                </tr>
                <tr>
                  <td><a className="link" href={posts.formats['application/epub+zip']} target="_blank">Application/epub+zip</a></td>
                </tr>
                <tr>
                  <td><a className="link" href={posts.formats['application/rdf+xml']} target="_blank">Application/rdf+xml</a></td>
                </tr>
              </table>

              <br></br>
              <DefaultButton onClick={() => { navigate(-1) }} name="Back"></DefaultButton>

            </div>
          </LeftSide>
          <RightSide>

            <Grid container spacing={2}>
              <Grid item xs={10} sm={8} md={10}>
                < div className='book-detail'>
                  <CardMedia
                    component="img"
                    alt="book cover"
                    height="auto"
                    image={posts.formats['image/jpeg']}
                    sx={{
                      borderRadius: 0.5,
                      width: '300',
                    }}
                  />
                </div>
              </Grid>
            </Grid >

          </RightSide>


        </Wrapper>

        : null
      }
      {errorMessage ? <div>{errorMessage}</div> : null}
    </>
  );
}


const Wrapper = styled.section`
          padding: 100px 0;
          width: auto;
          display: flex;
          height: 100%;
          @media (max-width: 960px) {
            display: flex;
            flex-direction:column; 
  }
          `;
const LeftSide = styled.div`
          width: 80%;
          height: 100%;
          margin-right:50px;
          @media (max-width: 960px) {
            width: auto;
            margin: 0 10%;
            order: 2;
          text-align: left;
  }
          @media (max-width: 860px) {
            margin: 0 10%;
  }
          `;
const RightSide = styled.div`
          width: 30%;
          height: 100%;
          @media (max-width: 960px) {
            width: auto;
            margin-bottom:  10%;
            margin-left: 10%;
            margin-right: 10%;
  }
          `;







