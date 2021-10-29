#IMPORTS
import sqlite3
from tkinter import *
import math
import random
import smtplib
from tkinter import messagebox
from tkinter import font

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
        else:
            messagebox.showerror('', 'Username or Password is incorrect')
    else:
        messagebox.showerror('', 'Username or Password is incorrect')
def login():
    f = Frame(root, height=450, width=500, bg= '#FFBA41')
    Label(f, text='Login', font=('arial', 20, 'bold'), bg='#FFBA41').place(x=200, y=120)
    Label(f, text='Fill out the following before proceeding', font=('arial', 10, 'bold'),
        fg='#666A6C', bg='#FFBA41').place(x=140, y=170)
    Label(f, text='Username', font=('arial', 10, 'bold'), fg='#4C4A49', bg='#FFBA41').place(x=150, y=200)
    user = Entry(f, textvariable=username_lo, font=('arial', 10, 'bold'), width=30)
    user.place(x=150, y=220)
    Label(f, text='Password', font=('arial', 10, 'bold'), fg='#4C4A49', bg='#FFBA41').place(x=150, y=250)
    passw = Entry(f, textvariable=password_lo, font=('arial', 10, 'bold'), width=30, show='*')
    passw.place(x=150, y=270)
    Button(f, text='Login', font=('arial', 10, 'bold'), bg='#FFBA41', fg='#4C4A49', command=login_response).place(x=220, y=300)
    Label(f, text='Don\'t have an account?', font=('arial', 10, 'bold'), fg='#4C4A49', bg='#FFBA41').place(x=150, y=350)
    Button(f, text='Register', font=('arial', 10, 'bold'), bg='#FFBA41', fg='#4C4A49', command=registration).place(x=300, y=350)
    f.place(x=0, y=0)

def registration():
    f = Frame(root, height=450, width=500, bg= '#FFBA41')
    Label(f, text='Registration', font=('arial', 20, 'bold'), bg='#FFBA41').place(x=140, y=60)

    Label(f, text='Full Name', font=('arial', 10, 'bold'), fg='#4C4A49', bg='#FFBA41').place(x=150, y=120)
    Entry(f, textvariable=fullname, font=('arial', 10, 'bold'), width=30).place(x=150, y=140)

    Label(f, text='Username', font=('arial', 10, 'bold'), fg='#4C4A49', bg='#FFBA41').place(x=150, y=170)
    Entry(f, textvariable=username, font=('arial', 10, 'bold'), width=30).place(x=150, y=190)

    Label(f, text='Email', font=('arial', 10, 'bold'), fg='#4C4A49', bg='#FFBA41').place(x=150, y=220)
    Entry(f, textvariable=email, font=('arial', 10, 'bold'), width=30).place(x=150, y=240)

    Label(f, text='Password', font=('arial', 10, 'bold'), fg='#4C4A49', bg='#FFBA41').place(x=150, y=270)
    Entry(f, textvariable=password, font=('arial', 10, 'bold'), width=30, show='*').place(x=150, y=290)

    Button(f, text='Register', font=('arial', 10, 'bold'), bg='#FFBA41', fg='#4C4A49', command=insert_record).place(x=200, y=330)

    Label(f, text='Already have an account?', font=('arial', 10, 'bold'), fg='#4C4A49', bg='#FFBA41').place(x=120, y=380)
    Button(f, text='Login', font=('arial', 10, 'bold'), bg='#FFBA41', fg='#4C4A49', command=login).place(x=300, y=380)
    f.place(x=0, y=0)