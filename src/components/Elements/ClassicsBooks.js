import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
//import Button from 'react-bootstrap/Button';
import DefaultButton from '../Buttons/DefaultButton';

function LatestBooks() {
    const [posts, setPosts] = useState([])
    const [errorMessage, seterrorMessage] = useState("")
    const navigate = useNavigate()


    useEffect(() => {
        axios
            .get('https://gutendex.com/books/?&topic=Psychological&author_year_start=2000&author_year_end=2010')
            .then(res => {
                //console.log(res.data.results)
                setPosts(res.data.results)
                console.log(posts)
            })
            .catch(err => {
                console.log(err)
                seterrorMessage('Error retrieving data')
            })
    }, []) //only do get request on load

    return (
        <> 
        
        <br></br>
            {posts[0] ?
                <Grid container spacing={1}>
                    
                    {posts.slice(0, 6).map((post, index) => (

                        <Grid item xs={5} sm={4}>

                            <Card style={{ background: 'transparent', boxShadow: 'none' }}
                                sx={{
                                    p: 1,
                                    display: 'flex',
                                    flexDirection: { xs: 'column', md: 'row', sm: 'column' },
                                }}
                            >
                                < div className='latest-book'>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="auto"
                                        image={post.formats['image/jpeg']}
                                        sx={{
                                            borderRadius: 0.5,
                                            width: 'clamp(100px, (304px - 100%) * 999 , 100%)',
                                        }}
                                    />
                                </div>

                                <br></br>
                                <Box sx={{ alignSelf: 'center', px: { xs: 0, sm: 4, md: 3 } }}>
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
                                            sx={{ textAlign: { xm: 'center', sm: 'start' } }}
                                        >
                                            {author.name}
                                        </Typography>

                                    ))}
                                    <br></br>
                                    <DefaultButton onClick={() => { navigate(`${post.id}`) }} name="Learn More"></DefaultButton>


                                </Box>
                            </Card>

                        </Grid>

                    ))}

                </Grid>
                : null}
            {errorMessage ? <div>{errorMessage}</div> : null}
        </>
    )
}
export default LatestBooks