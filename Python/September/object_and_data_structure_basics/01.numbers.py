"""
high level support for doing this and that.
"""

print('Hello World')

"""
    For math in Python 2 foe correct mzth
    1 use a float in calculation 3.0 / 2 = 1.5
    2 make a number float float(3) / 2 = 1.5
    3 from __future__ import division
        3 / 2 = 1.5
"""

__addition__ = 2 + 2
print('add: '+ str(__addition__))

# Powers
__powers__ = 2**3
print('exponent: '+ str(__powers__))

# order_of_operations
__order_of_operations__ = 2 + 10 * 10 + 3
# print('order_of_operations: '+ str(__order_of_operations__))
__more_order_of_operations__ = (2 + 10) * (10 + 3)
print('order_of_operations: '+ str(__more_order_of_operations__))

__net_income__ = 100
__tax__ = 0.10

__tax_rate__ = __net_income__ * __tax__
print('I pay ' + str(__tax_rate__) + ' of taxes')
