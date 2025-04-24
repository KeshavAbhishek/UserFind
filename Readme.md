# Find User

## Step 1: Clone the repo
### Command: `git clone https://github.com/KeshavAbhishek/UserFind.git`
***

## Step 2: Installation
### Command: `npm i` to install the dependencies
### Output:
![alt text](output1.png)

## Step 3: Run the server
### Command: `node server.js`
### Output:
![alt text](Output2.png)

## Outputs:
### For username = Bret, `http://localhost:4000/users?username=Bret`
![alt text](bret.png)
### For username = bret (Case-Insensitive), `http://localhost:4000/users?username=bret`
![alt text](bret.png)
### For username = Ram (Not in API), `http://localhost:4000/users?username=Ram`
![alt text](usernotfound.png)
### For username = (No username is provided to show all users), `http://localhost:4000/users?username=`
![alt text](allusers.png)