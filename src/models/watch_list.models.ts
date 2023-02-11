import client from "../database";
import Watched from "../types/watch_list.types";

class Watch_listmodel {

  async create(w: Watched): Promise<Watched[]> {
    try {
      const sql =
        `INSERT INTO watch_list(user_id, movie_id, watched) VALUES($1,$2,$3) RETURNING *`;
      const conn = await client.connect();
      const result = await conn.query(sql, [w.user_id, w.movie_id, w.watched]);
      const user = result.rows[0];
      conn.release();
      return user;
    } catch (err) {
      throw new Error(`Could not add new watch list. Error: ${err}`);
    }
  }

  async getOne(id: string): Promise<Watched> {
    try {
      const sql = `SELECT movie_id , watched FROM watch_list WHERE user_id = ($1) AND watched = true`;
      const connection = await client.connect();

      const result = await connection.query(sql, [id]);

      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Could not find this watch list ${id}, ${(error as Error).message}`);
    }
  }

  async getcheck(): Promise<Watched[]> {
    try {
      const connection = await client.connect();
      const sql = `SELECT * FROM watch_list`;
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Error at retrieving this watch list ${(error as Error).message}`);
    }
  }

}

export default Watch_listmodel;