import { useParams, useNavigate } from "react-router-dom";
import { getMovieDetail } from "../api/authApi"
import { useEffect, useState } from "react";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";

const MovieDetails = () => {
    let { id } = useParams(); // Access the movie ID from route parameters
    const [movieDetail, setMovieDetail] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchMovieDetail = async () => {
            const movieData =  await getMovieDetail(id)
        setMovieDetail(movieData)
    }  
        fetchMovieDetail()
      },[]); 
      console.log(id)
      console.log(movieDetail)

      const handleBack = () => {
        console.log('calling handleBack')
        return navigate("/movies")
      }

    return (
        <Grid item xs={12} mb={8} mt={2} ml={50} >

{movieDetail ? (      <Paper elevation={0} sx={{ maxWidth: 300 , maxHeight: 250, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopLeftRadius:15, borderTopRightRadius:15}}>
    <img src={movieDetail.Poster} />
        <CardContent sx={{maxHeight:185, height:100}}>
          <Typography gutterBottom variant="h6" component="div">
            {movieDetail.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movieDetail.Plot}
          </Typography>
          <Button onClick={()=>handleBack()}>Go Back to Movies</Button>
        </CardContent>
      </Paper>) : (<div>Loading...</div>)}
      </Grid>
       
    )
}

export default MovieDetails