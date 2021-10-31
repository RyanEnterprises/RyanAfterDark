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
