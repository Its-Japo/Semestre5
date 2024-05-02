#Universidad del valle de Guatemala
#Bases de datos 1
#Laboratorio 12

import enquiries
import tabulate
import psycopg2
from psycopg2 import sql
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT


# Función para conectarse a la base de datos
def connect_db():
    conn = psycopg2.connect(
        dbname="lab12",
        user="postgres",
        password="postgres",
        host="127.0.0.1",
        port="5432"
    )
    return conn

# Función 1: Buscar PCs por velocidad y RAM
def buscar_pc_por_velocidad_ram(velocidad, ram):
    conn = connect_db()
    try:
        with conn.cursor() as cur:
            cur.execute("BEGIN TRANSACTION;")
            cur.execute("SET TRANSACTION READ ONLY;")
            cur.execute(sql.SQL("SELECT modelo, precio FROM PC WHERE velocidad = %s AND ram = %s;"), (velocidad, ram))
            pcs = cur.fetchall()
            
            
            if pcs:
                res = [["Modelo", "Precio"]]
                for pc in pcs:
                    res.append(pc)
                print(tabulate.tabulate(res, headers="firstrow"))
            else:
                print("No se encontraron PCs con esos criterios.")
            cur.execute("COMMIT;")
    except Exception as e:
        print(f"Error: {e}")
    finally:
        conn.close()

# Función 2: Eliminar PC y Producto por modelo
def eliminar_pc_producto(modelo):
    conn = connect_db()
    try:
        with conn.cursor() as cur:
            cur.execute("BEGIN TRANSACTION;")
            cur.execute(sql.SQL("DELETE FROM Producto WHERE modelo = %s RETURNING *;"), (modelo,))
            if cur.fetchone():
                print("Producto y PC eliminados.")
            else:
                print("Modelo no encontrado.")
            cur.execute("COMMIT;")
    except Exception as e:
        print(f"Error: {e}")
        cur.execute("ROLLBACK;")
    finally:
        conn.close()

# Función 3: Decrementar precio de PC
def decrementar_precio(modelo, precio):
    conn = connect_db()
    try:
        with conn.cursor() as cur:
            cur.execute("BEGIN TRANSACTION;")
            cur.execute(sql.SQL("UPDATE PC SET precio = %s WHERE modelo = %s RETURNING modelo;"), (precio,modelo,))
            if cur.fetchone():
                print("Precio actualizado.")
            else:
                print("Modelo no encontrado.")
            cur.execute("COMMIT;")
    except Exception as e:
        print(f"Error: {e}")
        cur.execute("ROLLBACK;")
    finally:
        conn.close()

# Función 4: Insertar PC si no existe
def insertar_pc_si_no_existe(fabricante, modelo, velocidad, ram, disco, precio):
    conn = connect_db()
    try:
        with conn.cursor() as cur:
            cur.execute("BEGIN TRANSACTION;")
            cur.execute(sql.SQL("SELECT modelo FROM PC WHERE modelo = %s;"), (modelo,))
            if cur.fetchone():
                print("Error: Ya existe un modelo con esas características.")
            else:
                cur.execute(sql.SQL("INSERT INTO Producto (fabricante, modelo, tipo) VALUES (%s, %s, 'PC');"), (fabricante, modelo))
                cur.execute(sql.SQL("INSERT INTO PC (modelo, velocidad, ram, disco, precio) VALUES (%s, %s, %s, %s, %s);"), (modelo, velocidad, ram, disco, precio))
                print("Nuevo modelo de PC insertado.")
            cur.execute("COMMIT;")
    except Exception as e:
        print(f"Error: {e}")
        cur.execute("ROLLBACK;")
    finally:
        conn.close()

# Ejemplo de uso
if __name__ == '__main__':

    while True:
        opcion = enquiries.choose(
            '¿Qué quieres hacer?',
            [
                'Buscar PC por velocidad y RAM',
                'Eliminar PC y Producto por modelo',
                'Decrementar precio de PC',
                'Insertar PC si no existe',
                'Salir'
            ]
        )
        if opcion == 'Buscar PC por velocidad y RAM':
            velocidad = int(input("Velocidad: "))
            ram = int(input("RAM: "))
            buscar_pc_por_velocidad_ram(velocidad, ram)
        elif opcion == 'Eliminar PC y Producto por modelo':
            modelo = input("Modelo: ")
            eliminar_pc_producto(modelo)
        elif opcion == 'Decrementar precio de PC':
            modelo = input("Modelo: ")
            precio = int(input("Precio: "))
            decrementar_precio(modelo, precio)
        elif opcion == 'Insertar PC si no existe':
            fabricante = input("Fabricante: ")
            modelo = input("Modelo: ")
            velocidad = int(input("Velocidad: "))
            ram = int(input("RAM: "))
            disco = int(input("Disco: "))
            precio = int(input("Precio: "))
            insertar_pc_si_no_existe(fabricante, modelo, velocidad, ram, disco, precio)
        elif opcion == 'Salir':
            exit(0)
        

