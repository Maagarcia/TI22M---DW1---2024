import time

def teste(texto):
    alfabeto = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!?áãÃéíóõúÉÍÓÚÕÁ,.ç~´-_#0123456789'
    vazio = ''
    for j in texto:
         for i in alfabeto:
            if (vazio == texto):
                break
            if (i == j):
                vazio += i
                print(vazio)
                time.sleep(0.0001)

            else:
                print(vazio + i)
                time.sleep(0.005)
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
                print(vazio + i)
                time.sleep(0.01)
         
x =  input("qual seu nome?")
teste(x)