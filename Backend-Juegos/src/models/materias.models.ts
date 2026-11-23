import { pool } from '../config/db.config';

export interface Materia {
  id: number;
  nombre: string;
}

export type DatosMateria = Omit<Materia, 'id'>;

export class MateriaModel {
  static async obtenerTodos(): Promise<Materia[]> {
    const { rows } = await pool.query('SELECT * FROM materias ORDER BY id');
    return rows;
  }

  static async obtenerPorId(id: number): Promise<Materia | undefined> {
    const { rows } = await pool.query('SELECT * FROM materias WHERE id = $1', [id]);
    return rows[0];
  }

  static async crear(datos: DatosMateria): Promise<Materia> {
    const { rows } = await pool.query(
      'INSERT INTO materias (nombre) VALUES ($1) RETURNING *',
      [datos.nombre]
    );
    return rows[0];
  }

  static async actualizar(id: number, datos: DatosMateria): Promise<Materia | undefined> {
    const { rows } = await pool.query(
      'UPDATE materias SET nombre = $1 WHERE id = $2 RETURNING *',
      [datos.nombre, id]
    );
    return rows[0];
  }

  static async eliminar(id: number): Promise<boolean> {
    const { rowCount } = await pool.query('DELETE FROM materias WHERE id = $1', [id]);
    return (rowCount ?? 0) > 0;
  }
}