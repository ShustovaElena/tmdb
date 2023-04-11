import { Component, ReactNode } from "react";
import { Box, Button, Typography } from "@mui/material";
import { getMovies } from "../../api/movie";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";

export class ErrorBoundary extends Component<{children: ReactNode}, { hasError: boolean }> {
  public state = {
    hasError: false
  };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  handleHomeButtonClick = () => {
    const dispatch = useAppDispatch();
    dispatch(getMovies('popularity.desc'));
  };

  render() {
    if (this.state.hasError) {
      return (
        <Box sx={{ 
          backgroundColor: 'var(--background-color)', 
          paddingTop: '200px', 
          width: '100vw', 
          height: '100vh', 
          textAlign: 'center' 
        }}>
        <Typography 
          variant="h1" 
          component="h1" 
          sx={{ 
            margin: '0 auto', 
            color: 'var(--title-color)', 
            textTransform: 'uppercase', 
            fontWeight: 900, 
            minWidth: 400, 
            maxWidth: 800, 
            letterSpacing: '4px', 
            fontSize: '5rem' 
          }}
        >
          Oops, something went wrong!
        </Typography>
        <Button 
          variant="contained" 
          color="secondary" 
          sx={{ marginTop: '30px' }} 
          component={Link} 
          to="/" 
          onClick={this.handleHomeButtonClick}>
            HOME
          </Button>
        </Box>
      );
    }

    return this.props.children; 
  }
}