import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import Editor from "@monaco-editor/react";

function Practice() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Practice Coding
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, height: 'calc(100vh - 200px)' }}>
        <Paper sx={{ flex: 1, p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Problem Description
          </Typography>
          <Typography variant="body1">
            Write a function that takes an array of numbers and returns the sum of all positive numbers in the array.
          </Typography>
        </Paper>
        <Paper sx={{ flex: 1 }}>
          <Editor
            height="100%"
            defaultLanguage="javascript"
            defaultValue="// Write your code here
function sumPositiveNumbers(arr) {
  // Your solution
}
"
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
            }}
          />
        </Paper>
      </Box>
    </Container>
  );
}

export default Practice;
