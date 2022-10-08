import {getUserById} from '../../../services/userService';
import {deleteUser} from '../../../services/userService';

export default async function handler(request, response) {
  const {id} = request.query;
  if (request.method === 'GET') {
    const userData = await getUserById(id);
    return response.status(200).json(userData);
  } else if (request.method === 'DELETE') {
    deleteUser(id);
    response.status(202).json({message: 'User deleted', deleteID: id});
  } else
    response.status(403).json({message: 'Error: request method not allowed.'});
}
