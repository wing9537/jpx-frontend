import React from "react";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";

const mangas = [
  // {
  //   title: "Manga 1",
  //   description: "A brief description of Manga 1",
  //   coverImage:
  //     "https://mhfm5us.cdndm5.com/1/432/20190719155618_180x240_21.jpeg",
  // },
  // {
  //   title: "Manga 2",
  //   description: "A brief description of Manga 2",
  //   coverImage:
  //     "https://mhfm5us.cdndm5.com/1/432/20190719155618_180x240_21.jpeg",
  // },
  // {
  //   title: "Manga 3",
  //   description: "A brief description of Manga 3",
  //   coverImage:
  //     "https://mhfm5us.cdndm5.com/1/432/20190719155618_180x240_21.jpeg",
  // },
  // {
  //   title: "Manga 4",
  //   description: "A brief description of Manga 4",
  //   coverImage:
  //     "https://mhfm5us.cdndm5.com/1/432/20190719155618_180x240_21.jpeg",
  // },
  // {
  //   title: "Manga 5",
  //   description: "A brief description of Manga 5",
  //   coverImage:
  //     "https://mhfm5us.cdndm5.com/1/432/20190719155618_180x240_21.jpeg",
  // },
];

const MangaCard = ({ manga }) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="300"
        image={manga.coverImage}
        alt={manga.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {manga.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {manga.description}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

const Manga = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Grid container spacing={3}>
          {mangas.map((manga, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <MangaCard manga={manga} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Manga;
