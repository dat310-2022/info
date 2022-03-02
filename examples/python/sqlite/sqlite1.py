"""
Example SQLite usage using PySQLite Connector/Python

https://www.sqlitetutorial.net/sqlite-python/
"""

import sqlite3
from sqlite3 import Error


def drop_table(conn):
    """Drop table."""
    cur = conn.cursor()
    try:
        sql = "DROP TABLE postcodes"
        cur.execute(sql)
    except Error as err:
        # if err.errno == errorcode.ER_BAD_TABLE_ERROR:
        #     print("Error: Table does not exist.")
        # else:
        print("Error: {}".format(err))
    else:
        print("Table dropped.")
    finally:
        cur.close()


def create_table(conn):
    """Create table."""
    cur = conn.cursor()
    try:
        sql = ("CREATE TABLE postcodes ("
               "postcode VARCHAR(4), "
               "location VARCHAR(20), "
               "PRIMARY KEY(postcode))")
        cur.execute(sql)
    except Error as err:
        print("Error: {}".format(err))
    else:
        print("Table created.")
    finally:
        cur.close()


def insert_data(conn):
    """Insert data to a table."""
    postcodes = {
        "0001": "Oslo",
        "4036": "Stavanger",
        "4041": "Hafrsfjord",
        "7491": "Trondheim",
        "9019": "Tromsø"
    }
    cur = conn.cursor()
    num = 0
    for k, v in postcodes.items():
        sql = "INSERT INTO postcodes (postcode, location) VALUES (?, ?)"
        try:
            cur.execute(sql, (k, v))  # data is provided as a tuple
            conn.commit()  # commit after each row
        except Error as err:
            print("Error: {}".format(err))
        else:
            num += 1
    print("{:d} rows inserted.".format(num))
    cur.close()


def query_data(conn):
    """Querying data."""
    cur = conn.cursor()
    try:
        sql = ("SELECT postcode, location FROM postcodes "
               "WHERE postcode BETWEEN ? AND ?")
        cur.execute(sql, ("4000","5050"))
        print(cur.fetchall())
        # for (postcode, location) in cur:
        #     print("{}: {}".format(postcode, location))
    except Error as err:
        print("Error: {}".format(err))
    finally:
        cur.close()


if __name__ == "__main__":

    try:
        conn = sqlite3.connect("database_file.db")
    except Error as err:
        print(err)
    else:
        #drop_table(conn)
        create_table(conn)
        insert_data(conn)
        query_data(conn)
        conn.close()
