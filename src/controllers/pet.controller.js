import { Pet } from "../models/pet.model.js"


export const createPet = async (req, res) => {
  try {
    console.log('Request Body:', req.body); 
    const { name, breed } = req.body;

    if (!breed) {
      return res.status(400).json({ messageError: 'Breed is required' });
    }

    const newPet = await Pet.create({ name, breed });
    return res.status(201).json({ newPet });
  } catch (error) {
    console.error('Error creating pet:', error);
    return res.status(400).json({ messageError: error.message });
  }
};


export const getAllPet = async (req,res) => {
  try {
      // SELECT `id`, `username`, `statusOn`, `createdAt`, `updatedAt` FROM `Users` AS `User`;
      const pets = await Pet.findAll();
      return res.json({ pets });
  } catch (error) {
    console.error('Error fetching pets:', error)
      return res.status(500).json({ messageError: error.message })
  }
}


