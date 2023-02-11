CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE watch_list(
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id uuid REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
    movie_id uuid REFERENCES movies(id) ON UPDATE CASCADE ON DELETE CASCADE,
    watched BOOLEAN
);