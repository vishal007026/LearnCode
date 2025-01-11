import React, { useEffect } from 'react';
import { Container, Typography, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Course() {
  const { languageId } = useParams();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser && languageId) {
      // Save the last visited course for this user
      localStorage.setItem(`lastCourse_${currentUser.email}`, languageId);
    }
  }, [languageId, currentUser]);

  const courseContent = {
    python: [
      { title: 'Introduction to Python', content: 'Basic syntax and data types' },
      { title: 'Control Flow', content: 'If statements, loops, and functions' },
      { title: 'Data Structures', content: 'Lists, dictionaries, and sets' }
    ],
    javascript: [
      { title: 'JavaScript Basics', content: 'Variables, types, and operators' },
      { title: 'Functions & Objects', content: 'Function declarations and object methods' },
      { title: 'DOM Manipulation', content: 'Selecting and modifying HTML elements' }
    ],
    java: [
      { title: 'Java Fundamentals', content: 'Classes, objects, and methods' },
      { title: 'Object-Oriented Programming', content: 'Inheritance and polymorphism' },
      { title: 'Exception Handling', content: 'Try-catch blocks and custom exceptions' }
    ]
  };

  const content = courseContent[languageId] || [];

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        {languageId ? languageId.charAt(0).toUpperCase() + languageId.slice(1) : ''} Course
      </Typography>
      <List>
        {content.map((lesson, index) => (
          <Card key={index} sx={{ mb: 2 }}>
            <CardContent>
              <ListItem>
                <ListItemText
                  primary={`Lesson ${index + 1}: ${lesson.title}`}
                  secondary={lesson.content}
                />
              </ListItem>
            </CardContent>
          </Card>
        ))}
      </List>
    </Container>
  );
}

export default Course;
