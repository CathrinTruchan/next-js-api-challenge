import {getAllUsers} from '../../../services/userService';
import {createUser} from '../../../services/userService';

export default async function handler(request, response) {
  if (request.method === 'GET') {
    const data = await getAllUsers();
    return response.status(200).json(data);
  } else if (request.method === 'POST') {
    const newUser = JSON.parse(request.body);
    createUser(newUser.name, newUser.gender, newUser.email);
    return response
      .status(201)
      .json({message: 'User created', newUser: request.body});
  }

  res.status(403).json({message: 'Error: request method not allowed.'});
}
