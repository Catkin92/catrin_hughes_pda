require('minitest/autorun')
require('minitest/rg')
require_relative('../card_game.rb')
require_relative('../card.rb')

class TestCardGame < MiniTest::Test

  def setup

    @card1 = Card.new("Hearts", 3)
    @card2 = Card.new("Diamonds", 1)
    @card3 = Card.new("Spades", 8)

    @cards = [@card1, @card2, @card3]

    @card_game = CardGame.new(@cards)

  end

  def test_check_for_ace_true
    assert_equal(true, @card_game.check_for_ace(@card2))
    assert_equal(false, @card_game.check_for_ace(@card1))
  end

  def test_check_highest_card
    assert_equal(@card1, @card_game.highest_card(@card1, @card2))
  end

  def test_get_cards_total
    assert_equal("You have a total of 12", @card_game.cards_total)
  end

end
