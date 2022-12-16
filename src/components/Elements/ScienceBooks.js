import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import DefaultButton from '../Buttons/DefaultButton';
import { useParams } from 'react-router-dom';


function AdventureBooks() {
    const [posts, setPosts] = useState([])
    const [url, setUrl] = useState("https://gutendex.com/books/?topic=science&" + "page=" + 1)
    const [nextUrl, setnextUrl] = useState(null)
    const [prevUrl, setprevUrl] = useState(null)
    const [pgNum, setPgNum] = useState(null)
    const [errorMessage, seterrorMessage] = useState("")
    const navigate = useNavigate()


    useEffect(() => {

        if (url) {
            axios
                .get(url)
                .then(res => {
                    //console.log(res.data.results)
                    setPosts(res.data.results)
                    setnextUrl(res.data.next)
                    let x = res.data.next
                    var pageNum = x.substring(
                        x.indexOf("=") + 1,
                        x.lastIndexOf("&")
                    );
                    setPgNum(pageNum)

                    setprevUrl(res.data.previous)
                    // console.log(posts)
                })
                .catch(err => {
                    console.log(err)
                    seterrorMessage('Error retrieving data')
                })
        }
    }, [url]) //only do get request on load

    return (
        <>
            <div style={{ margin: 30 }}>
                <br></br>
                {posts[0] ?
                    <Grid container spacing={10}>

                        {posts.map((post, index) => (

                            <Grid item xs={6} sm={6} md={2}>

                                <Card style={{ background: 'transparent', boxShadow: 'none' }}>
                                    < div className='latest-book'>
                                        <CardMedia
                                            component="img"
                                            alt="book cover unavailable"
                                            height="auto"
                                            image={post.formats['image/jpeg']}
                                            sx={{
                                                borderRadius: 0.5,
                                                width: 'clamp(100px, (304px - 100%) * 999 , 100%)',
                                            }}
                                        />
                                    </div>
                                    <br></br>
                                    <Box>
                                        <Typography
                                            variant="body1"
                                            color="text.primary"
                                            fontWeight={600}
                                            sx={{
                                                textAlign: { xs: 'center', sm: 'start' },
                                                mt: { xs: 1.5, sm: 0 },

                                            }}
                                        >
                                            {post.title}
                                        </Typography>

                                        {post.authors.map((author, index) => (

                                            <Typography
                                                component="div"
                                                variant="caption"
                                                color="text.secondary"
                                                fontWeight={500}
                                                sx={{
                                                    textAlign: { xm: 'center', sm: 'start' },

                                                }}
                                            >
                                                {author.name}
                                                <br></br>
                                                <br></br>
                                                <DefaultButton onClick={() => { navigate(`detail/${post.id}`) }} name="Learn More"></DefaultButton>
                                            </Typography>

                                        ))}
                                        <br></br>



                                    </Box>
                                </Card>

                            </Grid>

                        ))}

                    </Grid>
                    : null}

            </div>
            {errorMessage ? <div>{errorMessage}</div> : null}

            <div className='pagination'>
                <div style={{ marginRight: "50px" }}>
                    <DefaultButton onClick={() => { setUrl(`${prevUrl}`); window.scrollTo({ top: 0, behavior: 'smooth' }) }} name="Prev"></DefaultButton>
                </div>
                <DefaultButton onClick={() => { setUrl(`${nextUrl}`); window.scrollTo({ top: 0, behavior: 'smooth' }); { navigate(`${pgNum}`) } }} name="Next"></DefaultButton>
            </div>
        </>
    )
}
export default AdventureBooks