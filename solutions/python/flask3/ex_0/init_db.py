import sqlite3

def create_table(conn):
    """Create table."""
    cur = conn.cursor()
    try:
        sql = ("CREATE TABLE movies ("
               "imdb_id VARCHAR(10) NOT NULL, "
               "title VARCHAR(40) NOT NULL, "
               "year int NOT NULL, "
               "rating DOUBLE NOT NULL, "
               "synopsis TEXT NOT NULL, "
               "PRIMARY KEY(imdb_id))")
        cur.execute(sql)
    except sqlite3.Error as err:
        print("Error: {}".format(err))
    else:
        print("Table created.")
    finally:
        cur.close()

def insert_data(conn):
    """Insert data to a table."""
    movies = [('tt0068646', 'The Godfather', 1972, 9.2, 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.'),
              ('tt0110912', 'Pulp Fiction', 1994, 8.9, 'The lives of two mob hit men, a boxer, a gangster''s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.'),
              ('tt0111161', 'The Shawshank Redemption', 1994, 9.3, 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'),
              ('tt0468569', 'The Dark Knight', 2008, 8.9, ''),
              ('tt1375666', 'Inception', 2010, 8.8, 'A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.')]
    cur = conn.cursor()
    sql = "INSERT INTO movies (imdb_id, title, year, rating, synopsis) VALUES (?, ?, ?, ?, ?)"
    try:
        cur.executemany(sql, movies)  # data is provided as list of tuples
        conn.commit()  # commit after each row
    except sqlite3.Error as err:
        print("Error: {}".format(err))
    print("Rows inserted.")
    cur.close()

if __name__ == "__main__":

    try:
        conn = sqlite3.connect("database.db")
    except Error as err:
        print(err)
    else:
        create_table(conn)
        insert_data(conn)
        conn.close()