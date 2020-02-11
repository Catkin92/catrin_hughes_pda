### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

class CardGame
# need to initialize the CardGame
  def checkforAce(card) # method should be snake case
    if card.value = 1 # should be double equals
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) # should be def not dif, comma needed between 2 parameters
  if card1.value > card2.value
    return card # should return card1
  else
    return card2
  end
end
end # one too many end

def self.cards_total(cards) # total should equal 0
  total
  for card in cards
    total += card.value
    return "You have a total of" + total # convert int to string
  end # this end should be above the return
end
```
