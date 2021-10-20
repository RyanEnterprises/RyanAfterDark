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
        