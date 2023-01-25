import { Request, Response } from 'express';
import { MovieModel } from '../models/Movie'
import Logger from '../../config/logger';

export async function createMovie(req: Request, res: Response) {
  try {
    const data = req.body;
    const movie = await MovieModel.create(data);
    return res.status(201).json(movie);
  } catch(error: any) {
    Logger.error(`Erro ao criar filme: ${error.message}`);
    return res.status(500).json({ message: 'Erro ao cadastrar filme'});
  }
}

export async function findMovieById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const movie = await MovieModel.findById(id);

    if (!movie) return res.status(404).json({ message: 'Filme não encontrado'});

    return res.status(200).json(movie);
  } catch(error: any) {
    Logger.error(`Erro ao buscar filme por id: ${error.message}`);
    return res.status(500).json({ message: 'Erro ao buscar filme'});
  }
}

export async function getAllMovies(req:Request, res: Response) {
  try {
    const movies = await MovieModel.find();
    return res.status(200).json(movies);
  } catch(error: any) {
    Logger.error(`Erro ao buscar filmes: ${error.message}`);
    return res.status(500).json({ message: 'Erro ao buscar filmes'});
  }
}

export async function deleteById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const movie = await MovieModel.deleteOne({id});

    if (!movie) return res.status(404).json({ message: 'Filme não encontrado' });

    return res.status(200).json({ message: 'Filme deletado com sucesso' });
  } catch (error: any) {
    Logger.error(`Erro ao remover filme: ${error.message}`);
    return res.status(500).json({ message: 'Erro ao remover filme'});
  }
}

export async function updateMovie(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const data = req.body;

    const movie = await MovieModel.findById(id);

    if (!movie) return res.status(404).json({ message: 'Filme não encontrado' });

    await MovieModel.updateOne({ _id: id}, data);

    return res.status(200).json(data);
  } catch (error: any) {
    Logger.error(`Erro ao atualizar filme: ${error.message}`);
    return res.status(500).json({ message: 'Erro ao atualizar filme'});
  }
}
