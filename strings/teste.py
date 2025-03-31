import time
import sys

def teste(texto):
    alfabeto = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!?áãÃéíóõúÉÍÓÚÕÁ,.ç~´-_#0123456789'
    vazio = ''
    for j in texto:
         for i in alfabeto:
            if (vazio == texto):
                break
            if (i == j):
                vazio += i
                sys.stdout.write('\x1b[1A')
                sys.stdout.write('\x1b[2K')
                print(vazio)
                time.sleep(0.000001)

            else:
                sys.stdout.write('\x1b[1A')
                sys.stdout.write('\x1b[2K')
                print(vazio + i)
                time.sleep(0.000005)
         j = 0


def testennumero(texto):
    alfabeto = '0123456789'
    vazio = ''
    for j in texto:
         for i in alfabeto:
            if (vazio == texto):
                break
            if (i == j):
                vazio += i
                print(vazio)
                time.sleep(0.01)

            else:
                sys.stdout.write('\x1b[1A')
                sys.stdout.write('\x1b[2K')
                print(vazio + i)
                time.sleep(0.01)
         
x =  input("qual seu nome?")
teste(x)