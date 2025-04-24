const express = require('express');
const axios = require('axios');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3000;

app.get('/users', async (req, res) => {
  const { username } = req.query;
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  try {
    const response = await axios.get(apiUrl);
    const users = response.data;

    if (username) {
      const matchedUser = users.find(
        user => user.username.toLowerCase() === username.toLowerCase()
      );

      if (matchedUser) {
        return res.json(matchedUser);
      } else {
        return res.status(404).json({ message: "User not found" });
      }
    }

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "An error occurred while fetching data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`For username = Bret, Link: http://localhost:${PORT}/users?username=Bret`);
  console.log(`For username = bret (Case-Insensitive), Link: http://localhost:${PORT}/users?username=bret`);
  console.log(`For username = raj (Not in API), Link: http://localhost:${PORT}/users?username=Ram`);
  console.log(`For username = (No username is provided to show all users), Link: http://localhost:${PORT}/users?username=`);
});
