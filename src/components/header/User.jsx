import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Link, useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import { Typography, Button, TextField, Table, TableBody, TableCell, TableRow, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { deepOrange } from '@mui/material/colors';
import { ColorModeContext, useMode } from "../../theme";
import { ThemeProvider } from '@mui/material/styles';

const User = () => {
  const [theme, colorMode] = useMode();
  const history = useHistory();

  // Placeholder for user data, you would fetch this from your server or context
  const [user, setUser] = useState({
    username: 'John Doe',
    email: 'john.doe@example.com',
    avatarUrl: '/broken-image.jpg', // Placeholder image
    bio: 'This is a brief bio about John Doe. He loves coding, hiking, and coffee.',
  });

  const [isEditing, setIsEditing] = useState({
    username: false,
    bio: false,
  });

  const handleEditClick = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSave = (field) => {
    // Save logic here, e.g., send updated data to the server
    setIsEditing((prev) => ({ ...prev, [field]: false }));
  };

  const handleLogout = () => {
    // Perform logout logic here
    history.push('/login');
  };

  const handleChange = (field, value) => {
    setUser((prev) => ({ ...prev, [field]: value }));
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // @ts-ignore
        setUser((prev) => ({ ...prev, avatarUrl: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <ColorModeContext.Provider 
// @ts-ignore
    value={colorMode}>
      <ThemeProvider 
// @ts-ignore
      theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            position: 'absolute',
            top: '30px',
            left: '30px'
          }}
        >
          <Link to="/" style={{ alignSelf: 'flex-start' }}>
            <ArrowBackIcon fontSize='small' />
          </Link>
        </Box>
        <Box
          sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Container component="main" maxWidth="md">
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
              <Typography variant="h4" sx={{ flexGrow: 1, textAlign: 'center' }}>
                Welcome, {user.username}!
              </Typography>
              <Box>
                <Button onClick={() => history.push('/signup')} variant="outlined" color="secondary" sx={{ marginRight: 1 }}>
                    Register
                </Button>
                <Button onClick={() => history.push('/login')} variant="outlined" color="secondary" >
                  Login
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 3,
                border: '1px solid',
                // @ts-ignore
                borderColor: theme.palette.divider,
                borderRadius: 2,
                boxShadow: 1,
                // @ts-ignore
                backgroundColor: theme.palette.background.paper,
              }}
            >
              <Box sx={{ display: 'flex', width: '100%', alignItems: 'flex-start' }}>
                <Box sx={{ position: 'relative' }}>
                  <Avatar
                    src={user.avatarUrl}
                    sx={{ width: 56, height: 56, bgcolor: deepOrange[500], marginRight: 2 }}
                  />
                  <IconButton
                    component="label"
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                      backgroundColor: 'white',
                      boxShadow: 1,
                    }}
                    size='small'
                  >
                    <EditIcon />
                    <input
                      type="file"
                      accept="image/*"
                      hidden
                      onChange={handleAvatarChange}
                    />
                  </IconButton>
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          Username
                        </TableCell>
                        <TableCell>
                          {isEditing.username ? (
                            <TextField
                              margin="normal"
                              fullWidth
                              id="username"
                              label="Username"
                              name="username"
                              autoFocus
                              value={user.username}
                              onChange={(e) => handleChange('username', e.target.value)}
                            />
                          ) : (
                            <Typography>{user.username}</Typography>
                          )}
                        </TableCell>
                        <TableCell>
                          <IconButton onClick={() => handleEditClick('username')}>
                            {isEditing.username ? <SaveIcon onClick={() => handleSave('username')} /> : <EditIcon />}
                          </IconButton>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          Email
                        </TableCell>
                        <TableCell>
                          <Typography>{user.email}</Typography>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          Bio
                        </TableCell>
                        <TableCell>
                          {isEditing.bio ? (
                            <TextField
                              margin="normal"
                              fullWidth
                              id="bio"
                              label="Bio"
                              name="bio"
                              multiline
                              rows={4}
                              value={user.bio}
                              onChange={(e) => handleChange('bio', e.target.value)}
                            />
                          ) : (
                            <Typography>{user.bio}</Typography>
                          )}
                        </TableCell>
                        <TableCell>
                          <IconButton onClick={() => handleEditClick('bio')}>
                            {isEditing.bio ? <SaveIcon onClick={() => handleSave('bio')} /> : <EditIcon />}
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Box>
              </Box>
              <Button onClick={handleLogout} variant="outlined" color="secondary" sx={{ marginTop: 2 }}>
                Logout
              </Button>
            </Box>
          </Container>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default User;
