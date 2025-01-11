import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const languages = [
  { id: 'html', name: 'HTML', description: 'The standard markup language for creating web pages.' },
  { id: 'css', name: 'CSS', description: 'Style sheet language for designing the appearance of web pages.' },
  { id: 'javascript', name: 'JavaScript', description: 'The language of the web, essential for front-end development.' },
  { id: 'java', name: 'Java', description: 'A popular object-oriented language for enterprise applications.' },
  { id: 'python', name: 'Python', description: 'A versatile language known for its simplicity and readability.' },
  { id: 'c++', name: 'C++', description: 'A powerful language for system programming and high-performance applications.' },
  { id: 'c', name: 'C', description: 'The foundational programming language for systems and applications.' },
  { id: 'sql', name: 'SQL', description: 'A language for managing and querying relational databases.' },
  { id: 'react', name: 'React', description: 'A JavaScript library for building dynamic user interfaces.' },
  { id: 'csharp', name: 'C#', description: 'A modern, object-oriented language for Windows and game development.' }
];

function LanguageSelection() {
  const navigate = useNavigate();

  const handleLanguageSelect = (languageId) => {
    navigate(`/course/${languageId}`);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Choose Your Programming Language
      </Typography>
      <Grid container spacing={3}>
        {languages.map((language) => (
          <Grid item xs={12} sm={6} md={4} key={language.id}>
            <Card>
              <CardActionArea onClick={() => handleLanguageSelect(language.id)}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {language.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {language.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default LanguageSelection;
