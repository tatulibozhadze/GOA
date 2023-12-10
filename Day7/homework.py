deposit = float(input("enter your deposit percent: "))
deposit_amount = int(input("enter your deposit amount: "))

print("your amount in one year: " , deposit * deposit_amount)
two_years = deposit * deposit_amount
print("your amount in two years: " , (two_years + deposit_amount) * deposit)
total = deposit_amount + (two_years + deposit_amount) * deposit + two_years
print ("total amount in two years: " , total)

