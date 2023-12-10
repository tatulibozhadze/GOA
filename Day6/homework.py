user_name = input("Please enter your name: ") #აქ შეიქმნა input, რომლის მეშვეობით მომხმარებელს ვეკითხებით სახელს

name_length = len(user_name) #ამ შემთხვევაში len ითვლის ასოების რაოდენობას input ში შეყვანილი სახელის

# Use a loop to print the name as many times as there are letters
for i in range(name_length): #აქ ვიყენებთ loop-ს რომ იმდენჯერ დავპრინტოთ სახელი რამდენი ასოც არის მასში
    print(user_name)