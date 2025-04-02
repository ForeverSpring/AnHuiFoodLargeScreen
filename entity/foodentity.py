class Food:
    name = ''
    position = ''
    price = 0
    goodview = 0
    dish = ''

    def __init__(self, name, position, price, goodview, dish):
        self.name = name
        self.position = position
        self.price = price
        self.goodview = goodview
        self.dish = dish

    def __str__(self):
        return f"Food(name={self.name}, position={self.position}, price={self.price}, goodview={self.goodview}, dish={self.dish})"

    def __repr__(self):
        return f"Food(name={self.name}, position={self.position}, price={self.price}, goodview={self.goodview}, dish={self.dish})"
