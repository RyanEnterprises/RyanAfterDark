#Imports
from tkinter import *
import smtplib
from tkinter import messagebox

#Windows
root = Tk()
root.geometry("500x500")
root.resizable(False, False)
root.config(bg="black")
root.title("Emailer")

#Variable for Entry Box
Email = StringVar()
Password = StringVar()
To = StringVar()
Subject = StringVar()

#Layout for MailerID
def emaillogin():
    f = Frame(root, height=480, width=500, bg="black")
    Label(f, text="sign in", font=("Arial", 20), bg="black", fg="white").place(x=140, y=210)
    Label(f, text="to continue to email", font=("Arial", 10), bg="black", fg="white").place(x=170, y=170)

    Label(f, text="Email:", font=("Arial", 10), bg="black", fg="white").place(x=140, y=210)
    email = Entry(f, textvariable=Email, width=30, bg="white", fg="black")
    email.place(x=140, y=230)

    Label(f, text="Password:", font=("Arial", 10), bg="black", fg="white").place(x=140, y=280)
    password = Entry(f, textvariable=Password, width=30, bg="white", fg="black", show="*")
    password.place(x=140, y=300)

    Button(f, text="NEXT STEP", font=("Arial", 10), bg="black", fg="white", command=mail_verification).place(x=300, y=330)

    f.place(x=0, y=0)


#Mailing Layout
def mail_compose():
    global body
    f = Frame(root, height=480, width=500, bg="black")
    Label(f, text="Compose", font=("Arial", 20), bg="black", fg="white").place(x=20, y=20)

    Label(f, text="From", font=("Arial", 10), bg="black", fg="white").place(x=20, y=60)
    Label(f, text=f"<{Email.get()}>", font=("Arial", 10), bg="black", fg="white").place(x=20, y=80)

