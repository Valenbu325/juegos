import { Request, Response } from 'express';
import { MateriaModel } from '../models/materias.models';

export const obtenerMaterias = async (req: Request, res: Response) => {
  const materias = await MateriaModel.obtenerTodos();
  res.status(200).json(materias);
};

export const obtenerMateriaPorId = async (req: Request, res: Response) => {
  const materia = await MateriaModel.obtenerPorId(Number(req.params.id));
  if (!materia) {
    res.status(404).json({ message: 'Materia no encontrada' });
    return;
  }
  res.status(200).json(materia);
};

export const crearMateria = async (req: Request, res: Response) => {
  const materia = await MateriaModel.crear(req.body);
  res.status(201).json(materia);
};

export const actualizarMateria = async (req: Request, res: Response) => {
  const materia = await MateriaModel.actualizar(Number(req.params.id), req.body);
  if (!materia) {
    res.status(404).json({ message: 'Materia no encontrada' });
    return;
  }
  res.status(200).json(materia);
};

export const eliminarMateria = async (req: Request, res: Response) => {
  const eliminada = await MateriaModel.eliminar(Number(req.params.id));
  if (!eliminada) {
    res.status(404).json({ message: 'Materia no encontrada' });
    return;
  }
  res.status(204).send();
};