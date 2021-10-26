#IMPORTS
import sqlite3
from tkinter import *
import math
import random
import smtplib
from tkinter import messagebox

# Database and Table
con = sqlite3.connect('userdata.db')
cur = con.cursor()
cur.execute('''CREATE TABLE IF NOT EXISTS record(
    name text,
    username text,
    pasword text,
    email text
)
''')
con.commit()

# Window
root = Tk()
root.geometry('500x450')
root.title('Verification')
root.resizable(False, False)

# Entry Widget Data Var

fullname = StringVar()
username = StringVar()
password = StringVar()
username_lo = StringVar()
password_lo = StringVar()
email = StringVar()
otp = StringVar()

# Insert Data on Record
def insert_record():
    count = 0
    warn = ''
    if fullname.get() == '':
        warn = "NAME FIELD CANNOT BE LEFT EMPTY!"
    else:
        count += 1
    
    if username.get() == '':
        warn = "USERNAME FIELD CANNOT BE LEFT EMPTY!"
    else:
        count += 1
    
    if email.get() == '':
        warn = "EMAIL FIELD CANNOT BE LEFT EMPTY!"
    else:
        count += 1
    
    if password.get() == '':
        warn = "AAAAAA PASSWORD CANNOT BE LEFT EMPTY AAAAAAAAAAAAAAAAAAAAAAAAAAA"
    else:
        count += 1
    if count == 4:
        con = sqlite3.connect('userdata.db')
        cur = con.cursor()
        cur.execute("INSERT INTO record VALUES(:name, :username, :password, :email)", {
            'name': fullname.get(),
            'username': username.get(),
            'password': password.get(),
            'email': email.get()
        })
        con.commit()

# Select Date From Records
def login_response():
    try:
        con = sqlite3.connect('userdata.db')
        c = con.cursor()
        for row in c.execute("Select * from record"):
            usern = row[1]
            passwo = row[2]

    except Exception as ep:
        messagebox.showerror('', ep)
    count = 0
    if username_lo.get() == '':
        warn = "USERNAME FIELD CANNOT BE LEFT EMPTY!"
    else:
        count += 1

    if password_lo.get() == '':
        warn = "PASSWORD FIELD CANNOT BE LEFT EMPTY!"
    else:
        count += 1
    if count == 2:
        if username_lo.get() == usern and password_lo.get() == passwo:
            messagebox.showinfo('', 'Login Successful')
            root.destroy()
            import main
        else:
            messagebox.showerror('', 'Username or Password is incorrect')
    else:
        messagebox.showerror('', 'Username or Password is incorrect')
        

        